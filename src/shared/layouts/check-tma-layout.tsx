import { ReactNode } from 'react';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

export type TCheckTmaLayout = {
  children?: ReactNode;
};

export const CheckTmaLayout = ({ children }: TCheckTmaLayout) => {
  const tg = useTelegram();

  if (!tg.initData) {
    return <p>Приложение должно быть запущено через бота telegram.</p>;
  }

  return children;
};
