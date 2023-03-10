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

## Aula 09
[useCallback](https://www.youtube.com/watch?v=Uli4R2PKnxA&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=10)
- useCallback
- Reduzir a quantidade de vezes em que uma função é recriada

## Aula 10
[useRef](https://www.youtube.com/watch?v=ZPNUCOtyCDM&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=11)
- useRef
- obtém a referência para um elemento HTML

## Aula 11
[mais useRef](https://www.youtube.com/watch?v=b0nmDHREJsw&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=12)
- referência sem tocar no HTML

## Aula 12
[Componentes](https://www.youtube.com/watch?v=UgQJ1IyyPxg&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=13)

## Aula 13
[Referências dentro de componentes](https://www.youtube.com/watch?v=RT2_zt7q2_4&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=14) e (https://www.youtube.com/watch?v=GVc-b7Cx2T0&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=15)
- forwardRef

## Aula 14
[Filhos](https://www.youtube.com/watch?v=GVc-b7Cx2T0&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=16)
- componente para o botão
- trecho de código dentro de uma tag de componente personalizado

## Aula 15
[Contextos](https://www.youtube.com/watch?v=OrXjC_wWlT0&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=17)
- Criação do contexto
- Compartilha informações entre componentes ou páginas
- hack - createContext.... ({} as UsuarioLogadoContextData)

## Aula 16
[Mais contextos](https://www.youtube.com/watch?v=v9FFFhYASmQ&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=18)
- Usando o contexto criado
- Contextos dentro dos componentes

## Aula 17
[Hook personalizado](https://www.youtube.com/watch?v=oTuTRDtyGFQ&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=19)
- Simplificando o uso do código

## Aula 18
[Funções no contexto](https://www.youtube.com/watch?v=ABGP4UTbKvk&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=20)
- Implementação da função de logout

## Aula 19
[Compartilhamento de estado (state)](https://www.youtube.com/watch?v=p2V-iWxgVKE&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=21)
- Simulando a mudança do contexto com useEffect

## Aula 20
[Listas](https://www.youtube.com/watch?v=YMxc9biU9ms&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=22)
- Sempre será usado na prática

## Aula 21
[Listas com objetos](https://www.youtube.com/watch?v=YMxc9biU9ms&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=23)
- Lista aprimorada com objetos e regras de negócio

## Aula 22
[JSON Server](https://www.youtube.com/watch?v=GruUvNF6OnM&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=24)
- Recurso auxiliar
- Simulação de back-end
- Apresentação do json-server
- Funciona se chamado de dentro do container com curl http://localhost:3000/posts

## Aula 23
[Utilizando o JSON Server](https://www.youtube.com/watch?v=e6XlTZNv0iw&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=25)
- Configuração da entidade
- Ajustes para trabalhar com o back-end

## Aula 24
[Camada de serviço](https://www.youtube.com/watch?v=T9hhp5qPykg&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=26)
- CRUD completo de tarefas

## Aula 25
[Buscando tarefas](https://www.youtube.com/watch?v=PQ4uUnqhT8I&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=27)
- com a flat --host 0.0.0.0, funcionou no container
- além disso, publiquei também a porta 3333 de dentro do container.
- no terminal do docker, executa npm run mock
- no terminal da conexão ao container, executa npm start

## Aula 26
[Inclusão de uma tarefa](https://www.youtube.com/watch?v=E5BQvXTpCvY&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=28)

## Aula 27
[Alteração de uma tarefa](https://www.youtube.com/watch?v=SkI5AaZOsPs&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm&index=29)



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
