import { AppRootContextInterface } from '@telegram-apps/telegram-ui/dist/components/Service/AppRoot/AppRootContext';

import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

export const usePlatform = (): AppRootContextInterface['platform'] => {
  const tg = useTelegram();

  return ['macos', 'ios'].includes(tg.platform) ? 'ios' : 'base';
};
