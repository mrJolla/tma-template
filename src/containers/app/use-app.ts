import { useEffect } from 'react';

import { IS_DEV } from '~/shared/constants/app.ts';
import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';
import { usePlatform } from '~/shared/hooks/use-platform.ts';

export const useApp = () => {
  const tg = useTelegram();

  const platform = usePlatform();

  useEffect(() => {
    if (IS_DEV) {
      import('eruda').then((r) => r.default.init());
    }

    tg.ready();
    tg.expand();
    tg.setHeaderColor('secondary_bg_color');
  }, [tg]);

  useEffect(() => {
    const root: HTMLDivElement = document.querySelector('#root')!;

    root.style.paddingBottom = platform === 'ios' ? '79px' : '108px';
  }, [platform]);

  return {
    platform,
  };
};
