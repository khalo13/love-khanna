import Link from 'next/link';
import BrandLogo from './BrandLogo';
import Footer from './Footer';

export default function InfoPage({ eyebrow, title, intro, children }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans antialiased">
      <header className="border-b border-amber-900/10 bg-[#FAF6F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link href="/" aria-label="AskMyMoon home">
            <BrandLogo />
          </Link>
          <Link href="/" className="text-xs sm:text-sm font-semibold text-amber-900 hover:text-orange-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <article className="bg-white border border-amber-900/15 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">{eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">{title}</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">{intro}</p>
          <div className="mt-8 space-y-7 text-sm sm:text-base leading-relaxed text-slate-700">{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
