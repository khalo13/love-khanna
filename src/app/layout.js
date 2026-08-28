import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.askmymoon.com'),
  title: {
    default: 'AskMyMoon | Instant Personalised Astrology Remedies',
    template: '%s | AskMyMoon',
  },
  description: 'Generate an instant, affordable astrology report with chart-based remedies, dosha analysis, mantras, and practical guidance.',
  keywords: ['AskMyMoon', 'Vedic astrology remedies', 'personalised astrology report', 'dosha analysis', 'kundli remedies'],
  authors: [{ name: 'AskMyMoon' }],
  creator: 'AskMyMoon',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'AskMyMoon',
    title: 'AskMyMoon | Instant Personalised Astrology Remedies',
    description: 'Get practical, chart-based astrology remedies and dosha analysis in one affordable report.',
    url: 'https://www.askmymoon.com',
  },
  twitter: {
    card: 'summary',
    title: 'AskMyMoon | Instant Personalised Astrology Remedies',
    description: 'Get practical, chart-based astrology remedies and dosha analysis in one affordable report.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// src/app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-slate-950 text-slate-100 antialiased"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}