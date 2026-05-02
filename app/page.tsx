export default function Page() {
  const faqs = [
    {
      q: 'Which API providers are supported?',
      a: 'GitHub, AWS, Stripe, Twilio, SendGrid, and more. New integrations are added regularly based on user requests.'
    },
    {
      q: 'How do renewal notifications work?',
      a: 'You receive email alerts 30, 7, and 1 day before any key expires. Webhook support lets you pipe alerts into Slack or PagerDuty.'
    },
    {
      q: 'Is my API key data stored securely?',
      a: 'Only metadata (name, expiry date, provider) is stored — never the key values themselves. All data is encrypted at rest.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never let an API key expire<br />
          <span className="text-[#58a6ff]">unnoticed again</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Aggregate keys from GitHub, AWS, Stripe and more into one calendar view.
          Get renewal alerts before outages happen.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $19/mo
        </a>
        <div className="mt-12 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
              <div key={d} className="text-center text-xs text-[#8b949e] font-medium py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
              <div key={day} className={`text-center text-sm py-2 rounded ${
                day === 8 ? 'bg-red-900/60 text-red-300 font-bold' :
                day === 15 ? 'bg-yellow-900/60 text-yellow-300 font-bold' :
                day === 23 ? 'bg-red-900/60 text-red-300 font-bold' :
                'text-[#c9d1d9] hover:bg-[#21262d]'
              }`}>{day}</div>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>Expiring soon</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>Expires in 7 days</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of expirations</p>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-xs text-[#8b949e] mb-8">Cancel anytime</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Unlimited API key tracking',
              'Calendar + list view',
              'Email & webhook alerts',
              'GitHub, AWS, Stripe, Twilio, SendGrid',
              'Background sync every 6 hours',
              'Team sharing (up to 5 seats)'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} API Key Expiry Calendar. All rights reserved.
      </footer>
    </main>
  )
}
