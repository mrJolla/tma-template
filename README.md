# Telegram Mini App
- [Официальная дока](https://core.telegram.org/bots/webapps#initializing-mini-apps) со всеми доступными свойствами
- [UI библа](https://github.com/Telegram-Mini-Apps/TelegramUI). [Storybook](https://tgui.xelene.me/), [figma](https://www.figma.com/community/file/1348989725141777736/telegram-mini-apps-ui-kit) и [пример аппки](https://github.com/Telegram-Mini-Apps/TGUI-Example) с ней;

### Компоненты
- В index.html файле подключен `https://telegram.org/js/telegram-web-app.js` файл. Он помещает в глобальную область видимости объект Telegram через который мы и управляем TMA.
- Для удобства созданы хуки:
  1. `useTelegram()` - для работы с объектом `Telegram`;
  2. `useMainButton()` - для [кнопки](https://core.telegram.org/bots/webapps#mainbutton);
  3. `useBackButton()` - для [стрелки назад](https://core.telegram.org/bots/webapps#backbutton);
  4. `usePlatform()` - определение платформы для стилизации компонента `AppRoot` из `@telegram-apps/telegram-ui`;

### Разработка
- Локальная разработка ведется через [ngrok](https://ngrok.com/). Надо регаться через VPN. Так же есть [интересный мануал](https://docs.telegram-mini-apps.com/platform/getting-app-link) с разными вариантами;
- Для дебага в боте через телефон подключена библа `eruda`;
- Так же [полезная страница](https://core.telegram.org/bots/webapps#testing-mini-apps) для ознакомления включения режима разработчика в самом приложении Telegram;

### Доставка в прод
- Обязательно поднимайте 3 сервера: prod, prelive и dev:
  1. **prod** - боевой;
  2. **prelive** - полная имитация боевого, но по факту тестовый. Раз в сутки сбрасывается и получает данные с боя;
  3. **dev** - полностью тестовые данные;
