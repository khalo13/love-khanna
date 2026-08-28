import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-amber-900/10 bg-[#FAF6F0] px-4 py-7 text-center text-sm text-slate-600 sm:py-8">
            <p>
                Built by{' '}
                <a
                    href="https://www.instagram.com/_13verse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-700 transition-colors"
                >
                    @askmymoon
                </a>
                <span className="mx-2 text-slate-400">·</span>
                Brought to you by{' '}
                <a
                    href="https://www.askmymoon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-700 transition-colors"
                >
                    www.askmymoon.com
                </a>
            </p>
            <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-orange-500">
                <Link href="/terms" className="hover:text-orange-700 transition-colors">Terms and Conditions</Link>
                <span className="text-slate-400">·</span>
                <Link href="/privacy" className="hover:text-orange-700 transition-colors">Privacy Policy</Link>
                <span className="text-slate-400">·</span>
                <Link href="/about" className="hover:text-orange-700 transition-colors">About</Link>
            </nav>
        </footer>
    );
}
