import './globals.css';

export const metadata = {
  title: 'AstroRemedies | Personalized Reports',
  description: 'Get your customized astrology remedies report.',
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