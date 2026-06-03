import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Linkedin, Send, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOLD = '#C9A84C';
const CHAR_LIMIT = 3000;

const TEMPLATES = [
  {
    label: '🚀 Patent Update',
    text: `🎰 Exciting news from XFH Game Studio!\n\nOur patent application for Rapid Fire Texas Hold'em (Application No. 3311959) is advancing — a proprietary Electronic Table Game that combines the strategy of poker with a unique 4-stage Cascade Crescendo betting system.\n\nKey highlights:\n• 30–120 rounds per hour\n• Configurable RTP (85–97%)\n• Hardware-agnostic deployment (ETG, iGaming, stadiums)\n• GLI-11 / BMM certification pathway underway\n\nIf you're an operator, distributor, or iGaming platform exploring next-generation table games, let's connect.\n\n#GamingInnovation #CasinoTech #ETG #iGaming #PokerGame #XFHGameStudio`,
  },
  {
    label: '🏆 Milestone Announcement',
    text: `Milestone reached at XFH Game Studio! 🎯\n\nRapid Fire Texas Hold'em continues to progress through development — our math model has been validated and we are actively pursuing regulatory certification.\n\nOur Cascade Crescendo system delivers a player experience unlike anything currently on the casino floor, with tiered wagering that builds tension round by round.\n\nReach out if you'd like to schedule a demo or discuss licensing opportunities.\n\n#CasinoGaming #TableGames #GamingTech #PatentPending #XFHGameStudio`,
  },
  {
    label: '🤝 Partnership Call',
    text: `XFH Game Studio is actively seeking manufacturing and distribution partners for Rapid Fire Texas Hold'em.\n\nWe offer:\n✅ Full math model & RTP documentation\n✅ HTML5 codebase ready for RGS integration\n✅ Patent-pending proprietary mechanics\n✅ Technical support through certification\n\nIdeal partners: ETG manufacturers, iGaming platforms, gaming distributors.\n\nDM us or visit xfhgamestudioltd.com to request a confidential briefing.\n\n#GamingPartnership #ETG #iGaming #CasinoInnovation`,
  },
];

export default function LinkedInAnnounce() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const remaining = CHAR_LIMIT - text.length;

  const handlePost = async () => {
    if (!text.trim()) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await base44.functions.invoke('postLinkedInUpdate', { text });
      if (res.data?.success) {
        setStatus('success');
        setText('');
      } else {
        setErrorMsg(res.data?.error || 'Unknown error');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to post');
      setStatus('error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', padding: '2rem 1rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>

        {/* Back link */}
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(201,168,76,0.6)', fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          <ArrowLeft size={13} /> Back to Site
        </Link>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Linkedin size={28} color={GOLD} />
          <div>
            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', color: '#fff', letterSpacing: '0.1em', margin: 0 }}>LinkedIn Announcements</h1>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0 }}>Post platform updates directly to your LinkedIn profile</p>
          </div>
        </div>

        {/* Templates */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.6rem', color: GOLD, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.65rem' }}>Quick Templates</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {TEMPLATES.map(t => (
              <button key={t.label} onClick={() => setText(t.text)}
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', color: GOLD, padding: '0.35rem 0.8rem', fontSize: '0.72rem', cursor: 'pointer', borderRadius: 2, transition: 'all 0.2s', fontFamily: 'inherit' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text area */}
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <textarea
            value={text}
            onChange={e => { setText(e.target.value); setStatus(null); }}
            placeholder="Write your LinkedIn update here…"
            maxLength={CHAR_LIMIT}
            rows={12}
            style={{
              width: '100%', boxSizing: 'border-box', backgroundColor: '#111',
              border: `1px solid ${remaining < 100 ? '#f87171' : 'rgba(201,168,76,0.35)'}`,
              color: '#fff', padding: '1rem', fontSize: '0.9rem', lineHeight: 1.6,
              outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif', borderRadius: 2,
            }}
          />
          <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', fontSize: '0.7rem', color: remaining < 100 ? '#f87171' : 'rgba(255,255,255,0.25)' }}>
            {remaining} remaining
          </div>
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.85rem', marginBottom: '1rem', padding: '0.75rem', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 2, background: 'rgba(74,222,128,0.07)' }}>
            <CheckCircle size={16} /> Post published successfully to LinkedIn!
          </div>
        )}
        {status === 'error' && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#f87171', fontSize: '0.85rem', marginBottom: '1rem', padding: '0.75rem', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 2, background: 'rgba(248,113,113,0.07)' }}>
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} /> {errorMsg}
          </div>
        )}

        {/* Post button */}
        <button
          onClick={handlePost}
          disabled={!text.trim() || status === 'loading'}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            backgroundColor: text.trim() && status !== 'loading' ? GOLD : 'rgba(201,168,76,0.25)',
            color: text.trim() && status !== 'loading' ? '#000' : 'rgba(255,255,255,0.3)',
            border: 'none', padding: '0.875rem 2rem', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase', cursor: text.trim() && status !== 'loading' ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s', fontFamily: 'inherit', borderRadius: 2,
          }}
        >
          <Send size={14} />
          {status === 'loading' ? 'Posting…' : 'Post to LinkedIn'}
        </button>

      </div>
    </div>
  );
}