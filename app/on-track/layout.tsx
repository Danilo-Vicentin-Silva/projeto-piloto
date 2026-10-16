import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On-Track — Danilo Vicentin',
  description: 'Telemetria, resultados e calendário de pista de Danilo Vicentin.',
};

export default function OnTrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
