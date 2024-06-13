import { useTelegram } from '~/shared/hooks/tma/use-telegram.ts';

export const HomePage = () => {
  const tg = useTelegram();

  if (!tg.initData) {
    return <p>Приложение должно быть запущено через бота telegram.</p>;
  }

  return (
    <pre>
      <code>{JSON.stringify(tg.initData, null, 2)}</code>
    </pre>
  );
};
