import InfoPage from '../components/InfoPage';

export const metadata = {
  title: 'About AskMyMoon | Instant Personalised Remedies',
  description: 'Learn how AskMyMoon makes personalised Vedic remedy guidance simple, accessible, and affordable.',
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Our vision"
      title="Making personalised remedies simple for everyone"
      intro="AskMyMoon is India’s first instant remedial tool built to make practical astrological guidance accessible without expensive consultations or searching across multiple platforms."
    >
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">One place for clear guidance</h2>
        <p className="mt-2">Instead of making people visit different websites for charts, planetary patterns, and remedies, AskMyMoon brings the experience together in one simple report. Enter your birth details once and receive a structured view of the patterns found in your chart.</p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Personalised, not generic</h2>
        <p className="mt-2">AskMyMoon matches the patterns in a native’s birth chart with practical lifestyle steps, spiritual practices, mantras, donations, and puja guidance. The result is focused on the individual chart rather than a one-size-fits-all list of suggestions.</p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Built for real life</h2>
        <p className="mt-2">Our vision is to keep remedial guidance affordable, fast, and easy to understand. AskMyMoon is designed for people who want useful next steps without emptying their pockets or spending hours searching for answers in different places.</p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">A thoughtful starting point</h2>
        <p className="mt-2">The platform offers structured insights for reflection and personal practice. It is not a replacement for professional medical, financial, legal, or mental-health advice, and important life decisions should always be made with appropriate expert support.</p>
      </section>
    </InfoPage>
  );
}
