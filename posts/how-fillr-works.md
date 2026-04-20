---
title: "How Fillr Works: Building an AI-Powered Job Application Engine"
date: "2026-03-20"
tags: ["AI", "Chrome Extension", "JavaScript"]
excerpt: "A deep dive into the field detection engine, LLM integration, and ATS compatibility work behind my Chrome extension for job applications."
---

Job applications are a form-filling problem dressed up as a career decision. The content — my name, email, work history, skills — is the same every time. Only the form changes. Fillr exists to make that part automatic.

## Manifest V3 and Why It Made Things Harder

Fillr is built on Chrome's Manifest V3 extension platform. V3 introduced service workers instead of persistent background pages, which broke a lot of autofill approaches that relied on long-running scripts. It also tightened Content Security Policy rules, which rules out some shortcuts for DOM injection.

The upside is that V3 is the future — V2 extensions are being sunset. Building on V3 from the start meant no painful migration later.

## The Field Detection Engine

The core of Fillr is the field detector: a script that runs in the context of the job application page and classifies every input it finds. I ended up supporting 40+ field types across text inputs, dropdowns, checkboxes, radio buttons, and file uploads.

Classification works by reading the field's label text, placeholder, `name` attribute, and surrounding DOM context, then matching against a set of patterns. "First Name", "firstName", "given-name" all map to the same field type. Dropdowns for graduation year look different from dropdowns for country, and the detector handles both.

The hardest part was dynamically rendered SPAs. A lot of modern ATS platforms (Workday especially) render fields after the page load, sometimes in response to user interaction. Fillr uses a MutationObserver to watch the DOM and re-run field detection whenever new elements appear.

## LLM Integration with Groq

Static data handles name, email, phone, education, and work history. But applications increasingly have open-ended questions — "Why do you want to work here?", "Describe a time you overcame a challenge." These need a different approach.

I integrated Groq's API with the Llama 3.3 70B model for these fields. When Fillr encounters a question it can't answer from static data, it sends the field label and context to Groq along with a system prompt containing my background, and the model generates a personalized answer.

Cover letters work the same way. Fillr reads the job title and company name from the page, passes them to Groq, and generates a tailored letter in a few seconds. The quality is good enough that I usually only make minor edits before submitting.

## ATS Compatibility

Getting Fillr to work across Greenhouse, Lever, Workday, Taleo, and LinkedIn required learning each platform's quirks. Greenhouse uses standard HTML inputs — straightforward. Workday renders everything in a Shadow DOM, which requires different querySelector calls. Taleo has a legacy DHTML structure that looks like it was designed in 2008.

I maintain a platform-specific config object that patches the field detector's behavior for known ATS patterns. When a user hits a new platform that doesn't work, they can report it and I add a patch.

## Privacy First

Everything about Fillr's data model is local. Profile data lives in `chrome.storage.local`. Application history lives in `chrome.storage.local`. The only outbound calls are to Groq's API when AI generation is triggered, and those calls don't include any identifying information beyond what's needed to answer the specific question.

No accounts, no sync, no analytics. When you uninstall Fillr, your data disappears with it. I think this is the right default for a tool that touches sensitive job application data.

## What's Next

I want to add smart duplicate detection — right now, if Scout surfaces a posting I've already applied to via Fillr, there's no automatic connection between them. Wiring the two together is the natural next step.
