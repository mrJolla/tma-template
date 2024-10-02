import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ErrorBoundary } from '~/components/error-boundary/error-boundary';
import { App } from '~/containers/app/app';
import {
  LONG_CACHE_TIMING,
  SHORT_CACHE_TIMING,
} from '~/shared/constants/react-query-timings.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import '~/shared/assets/styles/app.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: SHORT_CACHE_TIMING,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: LONG_CACHE_TIMING,
    },
  },
});

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
