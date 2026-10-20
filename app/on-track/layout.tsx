import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-Track — Danilo Vicentin',
  description: 'Fotos e momentos de Danilo Vicentin no kart.',
};

export default function OnTrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
