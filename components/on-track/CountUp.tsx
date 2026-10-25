import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  value: string;
}

export function CountUp({ value }: CountUpProps) {
  const { ref, displayValue } = useCountUp(value);

  return <span ref={ref}>{displayValue}</span>;
}
