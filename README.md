# Project-Typescript-
Projeto desenvolvido em Typescript.

![imagem do projeto](img/tomato_icon.png)
O código está na branch feature, para acessar projeto [Clique Aqui!](https://diandressa.github.io/Project-Typescript/docs/)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Projetos

Há um novo projeto na branch feature

### Pré-requisitos

    *nodeJS
    *Vscode
    *Extensão: Live Sass Compiler

### Para rodar o projeto

Abra o terminal no VsCode ou Git Bash:

`npm run start` 

Adicione a extensão no Vscode

`Live Sass Compiler`

Clique em "Watch Sass" na parte inferior direita no VScode

### Configurações inicias para criar um projeto em Typescript

#### Iniciar projeto

Crie o arquivo package.json

`npm init -y`

Criar o tsconfig

`tsc --init` ou `npx tsc --init`


#### Instalar Typescript

No terminal, precisamos baixar os módulos da aplicação:

`npm install typescript@5.3.3 --save-dev`

ou instalar a última versão disponível:

`npm install typescript@latest --save-dev`

ou

`npm install typescript --save-dev`

>Após esse comando os módulos são instalados

#### package.json
```
{
  "name": "project-typescript",
  "version": "1.0.0",
  "description": "Um projeto desenvolvido por mim utilizando Typescript na prática",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "lite-server --baseDir=dist",
    "start": "concurrently \"npm run watch\" \"npm run server\"",
    "compile": "tsc",
    "watch": "tsc -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.8.2"
  }
}

```

Acrescentar no arquivo:
```
"server": "lite-server --baseDir=dist",
"start": "concurrently \"npm run watch\" \"npm run server\"",
"compile": "tsc",
"watch": "tsc -w"
```

### Instalar o concurrently

`npm install concurrently --save-dev`

### Instalar o lite-server

`npm install lite-server --save-dev`

### Dist/ npm run serve

Tudo que está dentro da pasta dist vai ser compartilhado com nosso navegador.
Precisamos compartilhar a pasta dist com o navegador dentro de package.json.
Em package.json podemos ver a pasta dist sendo compartilhada: "server": "lite-server --baseDir=dist".
A pasta dist é a raiz do projeto 

Para abri o projeto no navegador usamos o comando
`npm run server`

Roda na porta 3000

#### tscongif.json

```
{
  "compilerOptions": {
    "target": "ES6", // Compilar para ES6
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true, // Ativar todas as opções de verificação de tipo estritas
    "esModuleInterop": true, // Habilitar interoperação com módulos ES
    "outDir": "./dist/js", // Diretório de saída para arquivos compilados
    "rootDir": "./app", // Diretório raiz dos arquivos de código fonte
    "noEmitOnError": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  },
  "include": [
    "app/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}

```

#### Criar pastas

Cria a pasta dist e a pasta app na raiz.

Em dist ficaram os arquivos js compilados e em app os arquivos ts.

Em dist:
* cria as pastas: css e js. Dentro de js cria as pastas models e controllers e o arquivo app.js
* cria o arquivo index.html

#### npm run watch

No package.json 

`"watch": "tsc -w"`

Monitora os arquivos para que assim que tiver alguma alteração ele compile. Preciso ativar ele com o comando `npm run watch`

#### npm run start

O problema que enquanto esse comando está rodando não consigo rodar o npm run server para rodar o servidor web: Em package.json, a linha `"start": "concurrently \"npm run watch\" \"npm run server\"",` e `"concurrently": "^6.0.0",` permite rodar dois comando ao mesmo tempo. 

Para iniciar usamos o comando: `npm run start`

#### Comando para compilar

`npm run compile`

Só compila se não tiver nenhum erro

#### Atenção

    Cria arquivo app.js
    Coloca link desse arquivo no index.html
    <script type="module" src="js/app.js"></script>

    --------

    O navegador não entende a linguagem typescript.
    A linguagem Typescript precisa ser compilada para o navegador entender.

    Precisamos usar a pasta app para colocar os arquivos ts e a pasta dist para receber os arquivos ts compilados para js. Assim o navegador que lê a pasta dist consegue interpretar/entender.

### Comandos para rodar o projeto

Compilar:

`npm run compile`

Compilar, observando alterações:

`npm run watch`

Rodar o servidor:

`npm run server`

Compilar e ao mesmo tempo rodar o servidor:

`npm run start`






