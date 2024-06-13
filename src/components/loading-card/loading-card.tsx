import { useEffect, useState } from 'react';

let interval: NodeJS.Timeout;

export const LoadingCard = () => {
  const [dots, setDots] = useState('...');

  useEffect(() => {
    interval = setInterval(() => {
      if (dots === '...') {
        setDots('.');
      } else {
        setDots((v) => v + '.');
      }
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, [dots]);

  return (
    <div className='card text-lg flex-center'>
      Загрузка<span className='w-3'>{dots}</span>
    </div>
  );
};
