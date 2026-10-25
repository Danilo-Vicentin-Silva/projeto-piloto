export const NEXT_RACE = {
  round: '05',
  venue: 'Autódromo de Interlagos',
  city: 'São Paulo, Brasil',
  date: '15 NOV 2026',
  startsAt: '2026-11-15T10:30:00-03:00',
  laps: 18,
  distance: '43,2 KM',
} as const;

export const STATS = [
  { label: 'PÓDIOS', value: '18', detail: 'TOP 3 • CARREIRA', icon: 'Trophy' },
  { label: 'VITÓRIAS', value: '07', detail: 'PILOTO • KART', icon: 'Flag' },
  { label: 'POLES', value: '05', detail: 'MELHOR POSIÇÃO', icon: 'Zap' },
  { label: 'POSIÇÃO MÉDIA', value: '4,2', detail: 'ÚLTIMAS 12 ETAPAS', icon: 'Gauge' },
  { label: 'VOLTA RÁPIDA', value: '09', detail: 'RECORDE PESSOAL', icon: 'ArrowDownRight' },
] as const;

export const SEASONS = [
  { year: '2026', championship: 'Campeonato Nacional', position: 'P2', podiums: '06' },
  { year: '2025', championship: 'Copa Brasil de Kart', position: 'P4', podiums: '05' },
  { year: '2024', championship: 'Kart Series Sul', position: 'P3', podiums: '04' },
] as const;

export const RESULTS = [
  { category: 'KART / OKN', round: 'ETAPA 04 · VELOPARK', date: '11 OUT 2026', position: 'P2', time: '+0.284', highlight: false },
  { category: 'KART / OKN', round: 'ETAPA 03 · CASCAVEL', date: '20 SET 2026', position: 'P1', time: '18:42.610', highlight: true },
  { category: 'KART / OKN', round: 'ETAPA 02 · SERRA', date: '16 AGO 2026', position: 'P3', time: '+1.092', highlight: false },
  { category: 'KART / OKN', round: 'ETAPA 01 · INTERLAGOS', date: '14 JUN 2026', position: 'P1', time: '19:06.238', highlight: true },
] as const;

export const PHOTO_MOMENTS = [
  {
    src: '/Imagens/CKB3-AMIKA-M-621.jpg',
    alt: 'Karts disputando uma etapa no kartódromo',
    location: 'VELOPARK / BRASIL',
    year: '2026',
    className: 'photoTall',
  },
  {
    src: '/Imagens/CKB3-AMIKA-M-622.jpg',
    alt: 'Danilo Vicentin acompanhando uma etapa no kartódromo',
    location: 'CASCAVEL / BRASIL',
    year: '2025',
    className: 'photoShort',
  },
  {
    src: '/Imagens/CKB3-AMIKA-M-759.jpg',
    alt: 'Kart na pista durante uma etapa de corrida',
    location: 'SERRA / BRASIL',
    year: '2024',
    className: 'photoShort',
  },
] as const;

export const ACHIEVEMENTS = [
  { title: 'CAMPEÃO REGIONAL', category: 'Kart / Cadete', year: '2024', mark: '01' },
  { title: 'COPA DE INVERNO', category: 'Kart / Júnior', year: '2025', mark: '02' },
  { title: 'PÓDIO NACIONAL', category: 'Kart / OKN', year: '2026', mark: '03' },
  { title: 'POLE POSITION', category: 'Kart / OKN', year: '2026', mark: '04' },
] as const;

export const SESSIONS = [
  { name: 'TREINO 1', date: 'SEX 13 NOV', time: '09:20' },
  { name: 'TREINO 2', date: 'SEX 13 NOV', time: '14:10' },
  { name: 'CLASSIFICAÇÃO', date: 'SÁB 14 NOV', time: '10:35' },
  { name: 'CORRIDA', date: 'DOM 15 NOV', time: '10:30' },
] as const;

export const CALENDAR = [
  {
    round: '05',
    venue: 'Autódromo de Interlagos',
    city: 'São Paulo, SP',
    date: '15 NOV 2026',
    laps: '18 VOLTAS',
    distance: '43,2 KM',
    detail: 'O desafio final da temporada combina o miolo técnico com a reta mais longa do calendário.',
    history: 'Última passagem: P1 · melhor volta: 1:03.482',
  },
  {
    round: '06',
    venue: 'Kartódromo de Aldeia da Serra',
    city: 'Barueri, SP',
    date: '06 DEZ 2026',
    laps: '22 VOLTAS',
    distance: '26,4 KM',
    detail: 'Traçado compacto e fluido, com curvas de raio variável e pouco espaço para erro.',
    history: 'Última passagem: P3 · melhor volta: 0:48.216',
  },
  {
    round: '07',
    venue: 'Kartódromo de Cascavel',
    city: 'Cascavel, PR',
    date: '24 JAN 2027',
    laps: '20 VOLTAS',
    distance: '31,0 KM',
    detail: 'Circuito veloz que recompensa consistência e uma boa saída das curvas de alta.',
    history: 'Última passagem: P1 · melhor volta: 0:54.901',
  },
  {
    round: '08',
    venue: 'Kartódromo do Velopark',
    city: 'Nova Santa Rita, RS',
    date: '21 FEV 2027',
    laps: '24 VOLTAS',
    distance: '28,8 KM',
    detail: 'Uma sequência técnica em que acertar o ritmo de volta faz toda a diferença.',
    history: 'Última passagem: P2 · melhor volta: 0:42.078',
  },
] as const;

export const HELMET_DESIGNS = [
  { name: 'GREEN SIGNAL', year: '2026', series: 'RACE EDITION', primary: '#32cd32', secondary: '#06102d' },
  { name: 'GOLDEN LAP', year: '2025', series: 'CHAMPION EDITION', primary: '#ffd700', secondary: '#0047ab' },
  { name: 'BLUE SHIFT', year: '2025', series: 'TRACK EDITION', primary: '#0047ab', secondary: '#ffd700' },
  { name: 'FIRST GRID', year: '2024', series: 'ORIGINAL EDITION', primary: '#32cd32', secondary: '#0047ab' },
] as const;

export const HELMET_FILTERS = ['TODOS', '2026', '2025', '2024'] as const;
export type HelmetFilter = (typeof HELMET_FILTERS)[number];
