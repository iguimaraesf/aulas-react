# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Criar o container com o Node 19

ReactNode.bat
```
if "%1" == "" (
	echo "uso: NodeReact <nome da pasta do novo projeto>
	exit
)
set pasta = "%~dp0%1"

mkdir "%~dp0%1"

docker run --rm --volume "%~dp0%1:/srv/react-docker" --workdir "/srv/react-docker" --publish 3000:3000 -it node:19 bash

```

chamar
```
ReactNode.bat comeco
```
...e dentro do container
```
cd aulas
```

Da série de vídeos [Curso de React com Typescript] (https://www.youtube.com/watch?v=OkMhKAlEObw&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=1)

## Aula 02
[Removendo arquivos](https://www.youtube.com/watch?v=OkMhKAlEObw&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=2)

## Aula 03
[Estrutura de pastas e rotas](https://www.youtube.com/watch?v=flqBnYMKiJE&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=3) [e](https://www.youtube.com/watch?v=-3Cff7gND-Y&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=4)

## Aula 04
[Componentes e páginas](https://www.youtube.com/watch?v=antT8q5JFxA&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=5)
- Componente dentro de componente

## Aula 05
[Formulário de login](https://www.youtube.com/watch?v=369iSxifmZk&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=6)
- Navegação entre rotas.

## Aula06
[useState feito do jeito certo - explicação](https://www.youtube.com/watch?v=m-DDPENCxpE&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=7)
- useState
- Não funcionou o hot reload (desbravando por mim mesmo)
```
npm install -D webpack-cli
npm install -D ts-loader
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install -D webpack-dev-server
```

## Aula 07
[useEffect feito do jeito certo - uma introdução](https://www.youtube.com/watch?v=T34qDvn8u3c&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=8)
- useEffect
- executa quando uma dependência muda e *define* um novo valor

## Aula 08
[useMemo](https://www.youtube.com/watch?v=5jbTLtilzfI&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=9)
- useMemo
- executa quando uma dependência muda e *processa* um novo valor

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
