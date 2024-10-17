# react-test

После того, как был организован новый репозиторий на GitHub, выполняется его клонирование на локальную машину:
```
git clone git@github.com:VladyBarvy/react-test.git
```

(А если был склонирован посредством команды ```git clone git@github.com:VladyBarvy/react-test.git``` уже готовый и развивающийся репозиторий,
то необходимо перейти в папку react-test-project и выполнить команду ```npm install```)



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


Для того, чтобы на GitHub Pages обновилось React-приложение, необходимо в терминале выполнить команду:
```
npm run deploy
```

Эта информация на сайте: https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf?ysclid=m1l7c2qgxt55071255




// ---------------------------------------------------------------------------------------------------------------------------

Если деплой на GitHub Pages производится впервые в проекте, то необходимо выполнить следующие шаги:
1) установить библиотеку gh-pages, выполнив следующую команду:
```
npm install gh-pages --save-dev
```

2) Добавьте в package.json следующие поля:
```
"homepage": "https://<ваш-логин>.github.io/<имя-репозитория>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3) запушить изменения в проекте на удалённый репозиторий на GitHub:
```
git add -A
git commit -m "Deploy React app"
git push origin main
```

4) и уже потом выполнить деплой:
```
npm run deploy
```
