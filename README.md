# react-test

После того, как был организован новый репозиторий на GitHub, выполняется его клонирование на локальную машину:
```
git clone git@github.com:VladyBarvy/react-test.git
```





Далее переходим в образованную директорию репозитория и в терминале выполняем команду, которая устанавливает npm-библиотеку с нулевой конфигурацией React-проекта:
```
npm create vite@latest
```

В процессе установки нужно ответить на несколько вопросов:
```
Need to install the following packages:
  create-vite@5.2.3
Ok to proceed? (y) y
✔ Project name: … vite-project
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /tmp/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
```





После того, как npm-библиотека установится, следует последовательно выполнить несколько действий:
  - перейти в созданный каталог (по умолчанию он называется vite-project)
  - запустить команду "npm install"
  - после чего можно проверить работу приложения, выполнив команду "npm run dev"
  - запуститься локальный сервер и отобразится ссылка, по которой в браузере откроется React-приложение








Запуск React-приложения выполняется следующей командой:
```
npm run dev
```
