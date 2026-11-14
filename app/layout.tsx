import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Danilo Vicentin - Piloto de Corrida',
  description: 'Piloto de Corrida dedicado a chegar no ponto mais alto do pódio.',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/favicons/apple-touch-icon.png'
  },
  manifest: '/favicons/site.webmanifest'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className={rajdhani.className}>{children}</body></html>;
}
