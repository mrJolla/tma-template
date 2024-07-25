import { useEffect } from 'react';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

type TUseMainButton = {
  isHideOnClick?: boolean;
  isShowProgress?: boolean;
  onClick?: (d: WebApp) => Promise<void> | void;
  params?: MainButtonParams;
};

export const useMainButton = ({
  onClick,
  isHideOnClick = true,
  params = {},
  isShowProgress = true,
}: TUseMainButton) => {
  const tg = useTelegram();

  useEffect(() => {
    if (params?.is_visible) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [params?.is_visible, tg.MainButton]);

  useEffect(() => {
    const handleClick = async () => {
      if (isShowProgress) {
        tg.MainButton.showProgress();
      }

      await onClick?.(tg);
      tg.HapticFeedback.impactOccurred('light');

      if (isHideOnClick) {
        tg.MainButton.hide();
      }
    };

    tg.MainButton.onClick(handleClick);
    tg.MainButton.setParams(params);

    return () => {
      tg.MainButton.offClick(handleClick);
      tg.MainButton.setParams({});
      tg.MainButton.hideProgress();
    };
  }, [
    isHideOnClick,
    isShowProgress,
    onClick,
    params,
    tg.HapticFeedback,
    tg.MainButton,
  ]);

  return tg.MainButton;
};
