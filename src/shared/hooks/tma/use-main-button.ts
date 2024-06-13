import { useEffect } from 'react';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

type TUseMainButton = {
  hideOnClick?: boolean;
  onClick?: () => void;
  show?: boolean;
};

export const useMainButton = ({
  onClick,
  show,
  hideOnClick,
}: TUseMainButton) => {
  const tg = useTelegram();

  useEffect(() => {
    if (typeof show !== 'boolean') return;

    if (show) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [show, tg.MainButton]);

  useEffect(() => {
    const handleClick = () => {
      onClick?.();
      tg.HapticFeedback.selectionChanged();

      if (hideOnClick) {
        tg.MainButton.hide();
      }
    };

    tg.MainButton.onClick(handleClick);

    return () => {
      tg.MainButton.offClick(handleClick);
    };
  }, [hideOnClick, onClick, tg.HapticFeedback, tg.MainButton]);

  return tg.MainButton;
};
