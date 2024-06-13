import { AppRoot } from '@telegram-apps/telegram-ui';
import { RouterProvider } from 'react-router-dom';

import { SuspenseFallback } from '~/components/suspense-fallback/suspense-fallback';
import { useApp } from '~/containers/app/use-app.ts';
import { routers } from '~/pages/routes';

export const App = () => {
  const { platform } = useApp();

  return (
    <AppRoot platform={platform}>
      <RouterProvider
        router={routers}
        fallbackElement={
          <div className='flex-1 p-4'>
            <SuspenseFallback />
          </div>
        }
      />
    </AppRoot>
  );
};
