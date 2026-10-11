import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Pilot 23 — Born to Push',
  description: 'A karting driver built for the next grid.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className={rajdhani.className}>{children}</body></html>;
}
