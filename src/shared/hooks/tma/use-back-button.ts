import { useEffect } from 'react';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

type TUseBackButton = {
  isHideOnClick?: boolean;
  isShow?: boolean;
  onClick?: () => Promise<void> | void;
};

export const useBackButton = ({
  onClick,
  isShow,
  isHideOnClick,
}: TUseBackButton = {}) => {
  const tg = useTelegram();

  useEffect(() => {
    if (typeof isShow !== 'boolean') return;

    if (isShow) {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  }, [isShow, tg.BackButton]);

  useEffect(() => {
    const handleClick = async () => {
      await onClick?.();

      tg.HapticFeedback.impactOccurred('light');

      if (isHideOnClick) {
        tg.BackButton.hide();
      }
    };

    tg.BackButton.onClick(handleClick);

    return () => {
      tg.BackButton.offClick(handleClick);
    };
  }, [isHideOnClick, onClick, tg.BackButton, tg.HapticFeedback]);

  return tg.BackButton;
};
