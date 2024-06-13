import { lazy } from 'react';

export const HomePageLazy = lazy(() =>
  import('./home-page').then((r) => ({ default: r.HomePage })),
);
