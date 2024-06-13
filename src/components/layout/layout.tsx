import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { SuspenseFallback } from '~/components/suspense-fallback/suspense-fallback';

export const Layout = () => (
  <div className='flex flex-1 flex-col gap-4 overflow-y-auto p-4'>
    <Suspense fallback={<SuspenseFallback />}>
      <Outlet />
    </Suspense>
  </div>
);
