import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-Track — Danilo Vicentin',
  description: 'Participação de Danilo Vicentin no CKB, no Kartódromo de Nova Odessa.',
};

export default function OnTrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
