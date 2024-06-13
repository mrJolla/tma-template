import { LoadingCard } from '~/components/loading-card/loading-card';

export const SuspenseFallback = () => (
  <div className='flex-1 flex-center'>
    <LoadingCard />
  </div>
);
