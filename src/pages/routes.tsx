import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '~/components/layout/layout';
import { ErrorPageLazy } from '~/pages/error-page/error-page.lazy';
import { HomePageLazy } from '~/pages/home-page/home-page.lazy';

export const routers = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        Component: HomePageLazy,
        index: true,
      },
    ],
    errorElement: <ErrorPageLazy />,
    id: 'main',
    path: '/',
  },
]);
