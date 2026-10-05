import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProjectsPage from './pages/AllProjectsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
