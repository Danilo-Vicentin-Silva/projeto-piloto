import { useEffect, useState } from 'react';

export function useCountdown(targetDate: string) {
  const [remaining, setRemaining] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const updateCountdown = () => {
      const distance = Math.max(0, new Date(targetDate).getTime() - Date.now());
      const days = Math.floor(distance / 86_400_000);
      const hours = Math.floor((distance % 86_400_000) / 3_600_000);
      const minutes = Math.floor((distance % 3_600_000) / 60_000);
      const seconds = Math.floor((distance % 60_000) / 1_000);
      setRemaining([days, hours, minutes, seconds]);
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1_000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return remaining;
}
