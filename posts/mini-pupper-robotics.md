---
title: "Securing a Robot: mTLS, Telemetry, and Autonomous Navigation on Mini-Pupper"
date: "2026-02-10"
tags: ["Robotics", "ROS2", "Security"]
excerpt: "What I learned building a secure, observable, autonomously-navigating quadruped robot for my senior capstone."
---

My senior capstone project (CMPSC 488) is a quadruped robot — a Mini-Pupper — that navigates a maze autonomously. The technical requirements were open-ended, which meant we got to make real architectural decisions. The ones that mattered most were around security, observability, and navigation.

## Why mTLS

When we moved the robot off localhost and onto a shared university network, the threat model changed. Any device on the same network could theoretically reach the robot's control services. We needed every inter-service call to be authenticated and encrypted, not just the external-facing ones.

Mutual TLS (mTLS) was the right tool. Unlike regular TLS where only the server presents a certificate, mTLS requires both sides to authenticate. Every microservice in the control stack — the navigation planner, the sensor aggregator, the motor controller — presents a client certificate when calling any other service. Connections without a valid certificate are rejected at the transport layer.

Setting up the certificate authority and distributing certs to each service was tedious but not complicated. The hard part was getting ROS2's DDS communication layer to play nicely with our certificate infrastructure — ROS2 has its own security model (SROS2) that required some configuration to align with our setup.

## The Telemetry Pipeline

Before we had real telemetry, debugging meant adding print statements, redeploying to the robot, and running the maze again. The iteration loop was slow and frustrating.

The telemetry pipeline changed this. Each microservice publishes sensor readings, nav decisions, and error states to a MongoDB collection in real time via a lightweight logging client. A Redis layer caches the most recent state so dashboards read from memory rather than hitting the database on every request.

With the pipeline running, we can watch the robot navigate and immediately see what the sensor array was reporting when it made a wrong turn. Debugging a navigation bug that used to take an afternoon now takes twenty minutes.

## AprilTag Navigation

GPS doesn't work indoors. Wheel odometry drifts over time. We needed a reliable localization mechanism for a robot operating in a structured environment, and AprilTag detection was the answer.

AprilTags are high-contrast fiducial markers — essentially QR codes optimized for fast, accurate pose detection. We positioned tags at key waypoints in the maze. The robot's camera feeds frames into a Python ROS2 node that runs AprilTag detection and computes the robot's position and heading relative to each tag. That pose estimate feeds into the navigation planner, which decides the next movement.

The system is not perfect — detection fails in low light and at steep angles — but it's reliable enough to navigate the maze without GPS or manual waypoints. The robot knows where it is because it can see where it is.

## What I'd Build Differently

The certificate management setup is manual. In a production system you'd use something like cert-manager or Vault to handle certificate rotation automatically. Our current setup requires a team member to re-issue certs when they expire.

The MongoDB schema also grew organically and is messier than it should be. I'd design the telemetry schema upfront with queryability in mind — right now, pulling historical nav decisions requires some awkward aggregation queries that could be avoided with a better document structure.

The capstone runs through May 2026. By the time it wraps, I want the navigation robust enough to handle the maze reliably under competition conditions, not just in ideal lighting.
