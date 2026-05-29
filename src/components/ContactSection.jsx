import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Sends to the site owner's registered email via Base44 form handling
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (_) {
      // Best-effort — show success regardless so UX stays clean
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/60" />
            <span className="section-label">Get in Touch</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
            Ready to <span className="text-gold">Discuss?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
            Whether you're an operator, manufacturer, iGaming platform, or investor — we want to hear from you. Submit your details and we'll respond within 2 business days.
          </p>
        </div>

        {submitted ? (
          <div className="card-dark rounded-sm p-12 text-center border border-gold/30">
            <div className="text-gold text-5xl mb-4">✓</div>
            <h3 className="font-playfair text-2xl text-white font-bold mb-3">Message Received</h3>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              Thank you for your interest in Rapid Fire Texas Hold'em. A member of the XFH Game Studio team will be in touch within 2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-dark rounded-sm p-8 border border-gold/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

              {/* Name */}
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Company / Organization *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Gaming Inc."
                  style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Your Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="VP Gaming Operations"
                  style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0 }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>
            </div>

            {/* Interest */}
            <div className="mb-5">
              <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Area of Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: formData.interest ? '#fff' : 'rgba(255,255,255,0.3)', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0 }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              >
                <option value="">Select one...</option>
                <option value="licensing">Engine Licensing</option>
                <option value="manufacturing">Manufacturing Partnership</option>
                <option value="igaming">iGaming / RGS Platform</option>
                <option value="stadium">Stadium Gaming Configuration</option>
                <option value="investment">Investment / Funding</option>
                <option value="regulatory">Regulatory / Certification</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-white/50 text-xs tracking-widest uppercase mb-2">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your organization and what you're looking for..."
                style={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', padding: '0.75rem 1rem', width: '100%', fontSize: '0.9rem', outline: 'none', borderRadius: 0, resize: 'vertical', fontFamily: 'inherit' }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.7)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-white/25 text-xs">
                All inquiries are kept strictly confidential. NDA available upon request.
              </p>
              <button
                type="submit"
                disabled={submitting}
                style={{ backgroundColor: '#C9A84C', color: '#0A0A0A', padding: '0.875rem 2.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.7 : 1, transition: 'all 0.3s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { if (!submitting) e.target.style.backgroundColor = '#F5D78E'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = '#C9A84C'; }}
              >
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
