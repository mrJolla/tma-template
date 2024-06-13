import { useEffect } from 'react';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

type TUseBackButton = {
  hideOnClick?: boolean;
  onClick?: () => void;
  show?: boolean;
};

export const useBackButton = ({
  onClick,
  show,
  hideOnClick,
}: TUseBackButton = {}) => {
  const tg = useTelegram();

  useEffect(() => {
    if (typeof show !== 'boolean') return;

    if (show) {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  }, [show, tg.BackButton]);

  useEffect(() => {
    const handleClick = () => {
      onClick?.();
      tg.HapticFeedback.selectionChanged();

      if (hideOnClick) {
        tg.BackButton.hide();
      }
    };

    tg.BackButton.onClick(handleClick);

    return () => {
      tg.BackButton.offClick(handleClick);
    };
  }, [hideOnClick, onClick, tg.BackButton, tg.HapticFeedback]);

  return tg.BackButton;
};
