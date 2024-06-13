import { lazy } from 'react';

export const ErrorPageLazy = lazy(() =>
  import('./error-page').then((r) => ({ default: r.ErrorPage })),
);
