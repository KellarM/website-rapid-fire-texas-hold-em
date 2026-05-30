// build: 2026053002
import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { trackEvent } from '@/hooks/useAnalyticsTracker';

const inputStyle = {
  backgroundColor: '#000000',
  border: '1px solid #C9A84C',
  color: '#C9A84C',
  padding: '0.75rem 1rem',
  width: '100%',
  fontSize: '0.9rem',
  outline: 'none',
  borderRadius: 0,
  fontFamily: 'inherit',
  boxSizing: 'border-box',
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', company: '', role: '', email: '', interest: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await base44.functions.invoke('submitDemoRequest', {
        full_name: formData.name,
        company: formData.company,
        email: formData.email,
        role_interest: formData.role || formData.interest || '',
        message: formData.message,
      });
      trackEvent('demo_request_submitted', { label: formData.email });
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err.message);
      setError(`Unable to send your message. Please email kellarm@xfhgamestudioltd.com directly.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'rgba(201,168,76,0.6)' }} />
            <span style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Get in Touch</span>
            <div style={{ height: '1px', width: '3rem', backgroundColor: 'rgba(201,168,76,0.6)' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffffff', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to <span style={{ color: '#C9A84C' }}>Discuss?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
            Whether you're an operator, manufacturer, iGaming platform, or investor — we want to hear from you. Submit your details and we'll respond within 2 business days.
          </p>
        </div>

        {submitted ? (
          <div style={{ border: '1px solid rgba(201,168,76,0.4)', backgroundColor: '#000', padding: '4rem', textAlign: 'center' }}>
            <div style={{ color: '#C9A84C', fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.75rem' }}>Message Received</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', maxWidth: '28rem', margin: '0 auto' }}>
              Thank you for your interest in Rapid Fire Texas Hold'em. A member of the XFH Game Studio team will be in touch within 2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#000000', border: '1px solid #C9A84C', padding: '2rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  placeholder="Jane Smith" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C'; }} />
              </div>

              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Company / Organization *</label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange}
                  placeholder="Acme Gaming Inc." style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C'; }} />
              </div>

              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Your Role</label>
                <input type="text" name="role" value={formData.role} onChange={handleChange}
                  placeholder="VP Gaming Operations" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C'; }} />
              </div>

              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Business Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="jane@company.com" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                  onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C'; }} />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Area of Interest</label>
              <select name="interest" value={formData.interest} onChange={handleChange}
                style={{ ...inputStyle, color: formData.interest ? '#C9A84C' : 'rgba(201,168,76,0.4)' }}
                onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = formData.interest ? '#C9A84C' : 'rgba(201,168,76,0.4)'; }}>
                <option value="">Select one...</option>
                <option value="ETG Operator">ETG Operator</option>
                <option value="Casino Technology Integrator">Casino Technology Integrator</option>
                <option value="Gaming Distributor">Gaming Distributor</option>
                <option value="iGaming Platform">iGaming Platform</option>
                <option value="Investor">Investor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message *</label>
              <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                placeholder="Tell us about your organization and what you're looking for..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => { e.target.style.borderColor = '#F5D78E'; e.target.style.color = '#ffffff'; }}
                onBlur={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C'; }} />
            </div>

            {error && (
              <div style={{ marginBottom: '1.25rem', padding: '1rem', border: '1px solid rgba(239,68,68,0.4)', backgroundColor: 'rgba(239,68,68,0.1)', color: '#f87171', fontSize: '0.875rem' }}>
                {error}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <p style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.7rem' }}>
                Patent Pending — Application No. 3311959. All inquiries kept strictly confidential.
              </p>
              <button type="submit" disabled={submitting}
                style={{
                  backgroundColor: '#000000', color: '#C9A84C', border: '1px solid #C9A84C',
                  padding: '0.875rem 2.5rem', fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.6 : 1, transition: 'all 0.3s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!submitting) { e.target.style.backgroundColor = '#C9A84C'; e.target.style.color = '#000000'; } }}
                onMouseLeave={e => { e.target.style.backgroundColor = '#000000'; e.target.style.color = '#C9A84C'; }}>
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>

          </form>
        )}

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            Prefer direct contact? &nbsp;
            <a href="mailto:kellarm@xfhgamestudioltd.com" style={{ color: 'rgba(201,168,76,0.5)', textDecoration: 'none' }}>
              kellarm@xfhgamestudioltd.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}