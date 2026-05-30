import { useState } from 'react';

const EMAILJS_SERVICE_ID  = 'service_xt83ycl';
const EMAILJS_TEMPLATE_ID = 'template_0n87fkn';
const EMAILJS_PUBLIC_KEY  = 're_euEgsnYT_gPyeDzshy6NYEscRcJsPi6aX';

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
};

const inputFocus = { borderColor: '#F5D78E', color: '#ffffff' };
const inputBlur  = { borderColor: '#C9A84C', color: '#C9A84C' };

// Dynamically load EmailJS from CDN so no package.json change needed
function sendViaEmailJS(templateParams) {
  return new Promise((resolve, reject) => {
    const send = () => {
      window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
        .then(resolve)
        .catch(reject);
    };
    if (window.emailjs) {
      send();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.onload = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); send(); };
      script.onerror = () => reject(new Error('Failed to load EmailJS'));
      document.head.appendChild(script);
    }
  });
}

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
      await sendViaEmailJS({
        name:     formData.name,
        company:  formData.company,
        role:     formData.role || 'Not provided',
        email:    formData.email,
        interest: formData.interest || 'Not specified',
        message:  formData.message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong sending your message. Please email us directly at kellarm@xfhgamestudioltd.com');
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
          <div style={{ border: '1px solid rgba(201,168,76,0.4)', backgroundColor: '#000' }} className="rounded-sm p-12 text-center">
            <div className="text-gold text-5xl mb-4">✓</div>
            <h3 className="font-playfair text-2xl text-white font-bold mb-3">Message Received</h3>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              Thank you for your interest in Rapid Fire Texas Hold'em. A member of the XFH Game Studio team will be in touch within 2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#000000', border: '1px solid #C9A84C' }} className="rounded-sm p-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

              {/* Name */}
              <div>
                <label className="block text-gold text-xs tracking-widest uppercase mb-2">Full Name *</label>
                <input
                  type="text" name="name" required value={formData.name} onChange={handleChange}
                  placeholder="Jane Smith"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, inputFocus)}
                  onBlur={e => Object.assign(e.target.style, inputBlur)}
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-gold text-xs tracking-widest uppercase mb-2">Company / Organization *</label>
                <input
                  type="text" name="company" required value={formData.company} onChange={handleChange}
                  placeholder="Acme Gaming Inc."
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, inputFocus)}
                  onBlur={e => Object.assign(e.target.style, inputBlur)}
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-gold text-xs tracking-widest uppercase mb-2">Your Role</label>
                <input
                  type="text" name="role" value={formData.role} onChange={handleChange}
                  placeholder="VP Gaming Operations"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, inputFocus)}
                  onBlur={e => Object.assign(e.target.style, inputBlur)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gold text-xs tracking-widest uppercase mb-2">Business Email *</label>
                <input
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="jane@company.com"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.target.style, inputFocus)}
                  onBlur={e => Object.assign(e.target.style, inputBlur)}
                />
              </div>
            </div>

            {/* Interest */}
            <div className="mb-5">
              <label className="block text-gold text-xs tracking-widest uppercase mb-2">Area of Interest</label>
              <select
                name="interest" value={formData.interest} onChange={handleChange}
                style={{ ...inputStyle, color: formData.interest ? '#C9A84C' : 'rgba(201,168,76,0.4)' }}
                onFocus={e => Object.assign(e.target.style, inputFocus)}
                onBlur={e => Object.assign(e.target.style, inputBlur)}
              >
                <option value="">Select one...</option>
                <option value="Engine Licensing">Engine Licensing</option>
                <option value="Manufacturing Partnership">Manufacturing Partnership</option>
                <option value="iGaming / RGS Platform">iGaming / RGS Platform</option>
                <option value="Stadium Gaming Configuration">Stadium Gaming Configuration</option>
                <option value="Investment / Funding">Investment / Funding</option>
                <option value="Regulatory / Certification">Regulatory / Certification</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-gold text-xs tracking-widest uppercase mb-2">Message *</label>
              <textarea
                name="message" required rows={5} value={formData.message} onChange={handleChange}
                placeholder="Tell us about your organization and what you're looking for..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => Object.assign(e.target.style, { ...inputFocus, resize: 'vertical' })}
                onBlur={e => Object.assign(e.target.style, { ...inputBlur, resize: 'vertical' })}
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-5 p-4 border border-red-500/40 bg-red-500/10 text-red-400 text-sm rounded-sm">
                {error}
              </div>
            )}

            {/* Footer row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-gold/30 text-xs">
                Patent Pending — Application No. 3311959. All inquiries kept strictly confidential.
              </p>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  backgroundColor: '#000000',
                  color: '#C9A84C',
                  border: '1px solid #C9A84C',
                  padding: '0.875rem 2.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.6 : 1,
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!submitting) {
                    e.target.style.backgroundColor = '#C9A84C';
                    e.target.style.color = '#000000';
                  }
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = '#000000';
                  e.target.style.color = '#C9A84C';
                }}
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
