# CurrencyConvert

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Руководство по сборке и тестированию приложения

## Требования для разработки

Перед началом работы убедитесь, что на вашем компьютере установлены следующие инструменты:

- [Node.js](https://nodejs.org/) (рекомендуется версия LTS)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) с установленным эмулятором или подключенным физическим устройством
- [Xcode](https://developer.apple.com/xcode/) (только для macOS, для сборки под iOS)
- [Git](https://git-scm.com/) для клонирования репозитория

## Шаги для сборки и локального тестирования

### 1. Клонирование репозитория

```bash
# Клонируйте репозиторий на ваш локальный компьютер
git clone https://github.com/0puggs0/currencyConvert

# Перейдите в директорию проекта
cd your-repository
```

### 2. Установка зависимостей

```bash
# Установите все необходимые зависимости
npm install
```

### 3. Запуск на Android

1. Убедитесь, что Android-эмулятор запущен или подключено физическое устройство.
2. Выполните следующую команду для запуска приложения:

```bash
npx react-native run-android
```

### 4. Запуск на iOS (только для macOS)

1. Откройте проект в Xcode:

```bash
open ios/tzApp.xcworkspace
```

2. Выберите целевое устройство (симулятор или подключенное устройство) в Xcode.
3. Нажмите кнопку **Run** в Xcode или выполните команду:

```bash
npx react-native run-ios
```

### 5. Сборка APK-файла для Android

1. Убедитесь, что в файле `android/app/build.gradle` в секции `signingConfigs` указаны настройки подписи (или используйте отладочную подпись).
2. Выполните следующую команду для сборки релизного APK:

```bash
cd android
./gradlew assembleRelease
```

3. Найдите готовый APK-файл в папке:

```
android/app/build/outputs/apk/release/app-release.apk
```

### 6. Дополнительные шаги для iOS (сборка в Release)

1. В Xcode выберите схему сборки **Release**.
2. Настройте подпись в разделе **Signing & Capabilities**.
3. Соберите проект через Xcode или выполните команду:

```bash
npx react-native run-ios --configuration Release
```

## Полезные команды

- Очистка кэша React Native:

```bash
npm start --reset-cache
```

- Очистка сборки Android:

```bash
cd android
./gradlew clean
```

- Очистка сборки iOS:

```bash
cd ios
xcodebuild clean
```

## Полезные ссылки

- [Документация React Native](https://reactnative.dev/docs/environment-setup)
- [Настройка Android Studio](https://developer.android.com/studio)
- [Настройка Xcode](https://developer.apple.com/xcode/)
