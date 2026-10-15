import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Danilo Vicentin - Piloto de Corrida',
  description: 'Piloto de Corrida dedicado a chegar no ponto mais alto do pódio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body className={rajdhani.className}>{children}</body></html>;
}
