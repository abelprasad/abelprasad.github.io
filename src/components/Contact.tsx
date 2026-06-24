import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwvkbpkl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brand-purple/5 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-8">Let's build something <span className="text-brand-purple">extraordinary.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to collaboration, freelance projects, and connecting with other builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-brand-purple hover:bg-brand-darkPurple text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Oops! Something went wrong. Please try again or email directly.</p>
            )}
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Have a project in mind or want to collaborate? Fill out the form or reach out directly through email or social media.
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:abelprasad4@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>abelprasad4@gmail.com</span>
              </a>

              <a href="https://github.com/abelprasad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span>github.com/abelprasad</span>
              </a>

              <a href="https://www.linkedin.com/in/abel-prasad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <span>linkedin.com/in/abel-prasad</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
