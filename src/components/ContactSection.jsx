import { useState } from 'react';
import { base44 } from '@/api/base44Client';

const roles = ['ETG Operator', 'Casino Technology Integrator', 'Gaming Distributor', 'iGaming Platform', 'Investor', 'Other'];

export default function ContactSection() {
  const [form, setForm] = useState({ full_name: '', company: '', email: '', role_interest: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await base44.functions.invoke('submitDemoRequest', form);
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: '#0A0A0A' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-gold/60" />
              <span className="section-label">Get In Touch</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
              Partner with<br />
              <span className="text-gold">XFH Game Studio</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Whether you're an ETG operator, casino technology integrator, or gaming distributor — we're ready to discuss how Rapid Fire Texas Hold'em fits your floor strategy.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold text-sm flex-shrink-0">✉</div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Email</div>
                  <a href="mailto:contact@xfhgamestudioltd.com" className="text-gold hover:text-gold-light text-sm transition-colors">contact@xfhgamestudioltd.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold text-sm flex-shrink-0">📞</div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Direct Line</div>
                  <a href="tel:7805044899" className="text-white/80 hover:text-gold text-sm transition-colors">780-504-4899</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold text-sm flex-shrink-0">🌐</div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Website</div>
                  <span className="text-white/60 text-sm">www.xfhgamestudioltd.com</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="card-dark rounded-sm p-5">
              <div className="text-gold text-[10px] tracking-[0.25em] uppercase mb-3">What to Expect</div>
              <ul className="space-y-2">
                {[
                  'Live demo walkthrough of the full game system',
                  'Math sheet and RTP documentation review',
                  'Customization options discussion',
                  'Integration pathway for Interblock terminals',
                  'Licensing & deployment timeline overview',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/50 text-sm">
                    <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="card-dark rounded-sm p-7">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-gold text-5xl mb-4">✓</div>
                <h3 className="text-white font-playfair text-2xl font-bold mb-2">Request Received</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Thank you for your interest in Rapid Fire Texas Hold'em. Michael Kellar will be in touch shortly to schedule your live demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-semibold text-xl mb-1">Request a Demo</h3>
                <p className="text-white/40 text-sm mb-6">Fill out the form and we'll schedule a live walkthrough.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Michael Smith"
                        value={form.full_name}
                        onChange={e => setForm({ ...form, full_name: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 focus:border-gold text-white text-sm px-4 py-2.5 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Company</label>
                      <input
                        type="text"
                        placeholder="Casino Operator Co."
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 focus:border-gold text-white text-sm px-4 py-2.5 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black/50 border border-gold/20 focus:border-gold text-white text-sm px-4 py-2.5 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Role / Interest</label>
                    <select
                      value={form.role_interest}
                      onChange={e => setForm({ ...form, role_interest: e.target.value })}
                      className="w-full bg-black/80 border border-gold/20 focus:border-gold text-white text-sm px-4 py-2.5 outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-xfh-black">Select your role</option>
                      {roles.map(r => <option key={r} value={r} className="bg-xfh-black">{r}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/40 text-[10px] uppercase tracking-wider block mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your interest or specific questions..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-black/50 border border-gold/20 focus:border-gold text-white text-sm px-4 py-2.5 outline-none transition-colors resize-none placeholder:text-white/20"
                    />
                  </div>

                  {error && <p className="text-red-400 text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gold text-xfh-black font-bold text-sm tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-xfh-black/30 border-t-xfh-black rounded-full animate-spin"></span> Sending...</>
                    ) : (
                      <>→ Submit Request</>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}