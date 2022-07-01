![Tux, the Linux mascot](/ts.png)

## 1- Setup Inicial e uma aplicação TypeScript:
- [x] - Instalando o pacote Concurrently, podemos combinar diferentes comandos de script, como “npm run start” e “npm run build” em um único script e, em seguida, executá-lo na linha de comando.

[link paconte npm ](https://www.npmjs.com/package/concurrently)

[link Blog Acervo Lima](https://acervolima.com/como-executar-varios-scripts-npm-em-paralelo/#:~:text=Ap%C3%B3s%20a%20instala%C3%A7%C3%A3o%20do%20pacote,a%20opera%C3%A7%C3%A3o%20de%20constru%C3%A7%C3%A3o%20simultaneamente.)

```console
npm install concurrently --save
```

- [x] - para colocar de forma automágica iremos inicializar um arquivo package.json e no script start iremos colocar essa linha de comando para digitarmos apenas npm start.


```console 
npm init -y
npm install git-commit-msg-linter --save-dev
```
> Nota: criar um arquivo .gitignore | adicionar a pasta node_modules/ no seu conteudo.
> 

```json
"start":"tsc && node dist/src/index.js",
```

![package.json](/package.png  )

- [x] - Primeiro vamos instalar o compilador typeScript;

```console
npm install -D typescript
```

- [x] - Instalando o tsc de maneira global 

```console
npm install -g typescript
```

[pacote npm tsc ](https://www.npmjs.com/package/typescript)

- [x] - Configurando o compilador TypeScript, rode o comando abaixo:

```console 
npx tsc --init
```


- [x] - irá gerar um arquivo tsconfig.json com uma quantidade robusta de infromação, para nosso primeiro exemplo troque pelo disponibilizado pelo course e a medida que for avançando o conhecimento no type script iremos incrementando essas configuraçẽos.

> Course(Trybe):

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": ".",
    "target": "es2019",
    "module": "commonjs",
    "typeRoots": [
      "src/@types",
      "./node_modules/@types"
    ],
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

- [x] - Em seguida crie o arquivo .eslintrc.json e no seu escopo adicione a seguinte configuração:

```json
{
  "root": true,
  "env": {
    "browser": false,
    "node": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "plugin:editorconfig/noconflict",
    "plugin:mocha/recommended",
    "airbnb-typescript/base"
  ],
  "parser": "@typescript-eslint/parser",
  "overrides": [
    {
      "files": [
        "*.ts"
      ]
    }
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "sonarjs",
    "editorconfig",
    "mocha"
  ],
  "rules": {
    "no-underscore-dangle": "off",
    "no-console": "off",
    "camelcase": "warn",
    "arrow-parens": [
      2,
      "always"
    ],
    "quotes": [
      2,
      "single"
    ],
    "implicit-arrow-linebreak": "off",
    "consistent-return": "off",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "object-curly-newline": "off",
    "max-params": [
      "error",
      4
    ],
    "max-lines": [
      "error",
      250
    ],
    "max-lines-per-function": [
      "error",
      {
        "max": 20,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-len": [
      "error",
      {
        "code": 100
      },
      {
        "ignoreComments": true
      }
    ],
    "complexity": [
      "error",
      5
    ],
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "sonarjs/cognitive-complexity": [
      "error",
      5
    ],
    "sonarjs/no-one-iteration-loop": [
      "error"
    ],
    "sonarjs/no-identical-expressions": [
      "error"
    ],
    "sonarjs/no-use-of-empty-return-value": [
      "error"
    ],
    "sonarjs/no-extra-arguments": [
      "error"
    ],
    "sonarjs/no-identical-conditions": [
      "error"
    ],
    "sonarjs/no-collapsible-if": [
      "error"
    ],
    "sonarjs/no-collection-size-mischeck": [
      "error"
    ],
    "sonarjs/no-duplicate-string": [
      "error"
    ],
    "sonarjs/no-duplicated-branches": [
      "error"
    ],
    "sonarjs/no-identical-functions": [
      "error"
    ],
    "sonarjs/no-redundant-boolean": [
      "error"
    ],
    "sonarjs/no-unused-collection": [
      "error"
    ],
    "sonarjs/no-useless-catch": [
      "error"
    ],
    "sonarjs/prefer-object-literal": [
      "error"
    ],
    "sonarjs/prefer-single-boolean-return": [
      "error"
    ],
    "sonarjs/no-inverted-boolean-check": [
      "error"
    ]
  }
}
```
- [x] - Crinado um arquiv .env onde irá conter as variáveis de ambiente do banco de dados e demais dados sensíveis da aplicação:

```.env
 MONGO_INITDB_ROOT_USERNAME=root
 MONGO_INITDB_ROOT_PASSWORD=xablau
```

- [x] - Em seguida iremos criar a nossa pasta src, pois, lá conterá todos os arquivos que serão compilados de acordo com a configuração acima disponibilizada na propriedade "include":["src/**/**"].

> Estrutura de pasta:

```console
src
```


> Observação Importante: Todos os arquivos que estiverem na pasta node_modules e que tiverem a extensão spec.ts não serão compilados, serão ignorados, de acordo com a configuração disponibilizada no arquivo tsconfig.json na propriedade exclue.

- [x] - Em seguida iremos criar um arquivo index.ts e adicionaremos em seu escopo um console.log('Hello World') e nos livramos da "maldição" de não conseguirmos aprender uma nova linguagem sem antes da um olá mundo escrito me ts rsrsrs

> Arquivo: index.ts

```typecript
console.log(hello world!! ts)
```

- [x] - Em seguida dentro da pasta da aplicação, no terminal do vs code digite o comando tsc para compilar todos os scripts ts dentro da pasta src conforme explicitados no arquivo tsconfig.json, e se tudo estiver certo será gerada uma pasta chamada dist com o meu programa Hello World em typescript traduzido para Hello World em JavaScript.

![Tux, the Linux mascot](/tsparajs.png  )

- [x] - Para compilar e rodar o arquivo no terminal execute o seguinte comando:

```console 
npm start
```
- [x] - Se quiser rodar o código utilizando a extensão codeRunner do vsCode para executar seus códigos typescript execute o comando abaixo uma única vez.

```console
npm install -g ts-node

```

![Tux, the Linux mascot](/POO.png )

[Fonte de Informação: Blog ByTrybe](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/)
## 2 - O que é um paradigma de programação?

>Um paradigma pode ser entendido como a forma com a qual se decide resolver determinado problema por meio da programação de computadores. Nesse sentido, temos alguns paradigmas possíveis que eventualmente podem ser usados mais de um (caso a linguagem escolhida ofereça suporte).

Como exemplos, podemos citar os dois primeiros (que deram origem aos demais), que são o tipo imperativo e o declarativo. Existem também o tipo estruturado e o paradigma orientado a objetos, que serão abordados mais adiante.

## 2.1 - O que é o Paradigma POO?
> O paradigma da POO(Programação Orientada a Objetos) é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros.

A primeira linguagem de programação com paradigma de orientação a objetos foi criada em 1970, por Alan Kay. Ele era matemático, biólogo e, ao longo de sua vida repleta de invenções, criou vários programas de aprendizado voltados para crianças.

Segundo Kay, “o computador ideal deveria funcionar como um organismo vivo, isso é, cada célula se relaciona com outras a fim de alcançar um objetivo, mas cada uma funciona de forma autônoma. As células poderiam também reagrupar-se para resolver outro problema, ou desempenhar outras funções”.

De fato, o matemático tinha em seu pensamento uma mistura de raciocínio lógico com biológico, o que vinha de suas duas formações originais. Em determinado momento de sua vida, Alan Kay passou a trabalhar na gigante Xerox, mais precisamente no departamento de estudos.

Durante suas atividades, ele idealizou a criação de um aparelho chamado Dynabook. Era uma espécie de tablet com teclado físico (isso em plena década de 70). Para que o Dynabook se tornasse realidade, era necessário o desenvolvimento de uma linguagem de programação por meio da qual pudesse ser construído o sistema do aparelho.

Foi então que surgiu a primeira linguagem de programação orientada a objetos: o Smalltalk. A linguagem de POO de Alan Kay foi a primeira a contar com os conceitos de classes, objetos, atributos e métodos.

## 3 - Sinxtaxe Geral de Uma Classe:

```javascritp

class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

```

## 3.1 - Processo de criação de uma classe em TypeScript:

> Processo de Criação de uma Classe: Utilize a palavra reservada class o Nome da Classe: Exemplo Pessoa, e um par de chaves:

```javascript
   class Pessoa{
   }
```
> A classe pode conter atributos, para isso basta digitarmos o nome que queremos atribuir às nossas variáveis (atributos) e seu tipo tendo em vista que estamos trabalhando com javascript:

```javascript
   class Pessoa{
     nome: string;
     altura: number;
     largura: number;
   }
```
> Podem ainda existir métodos (ações) dentro de uma classe, para escrevermos um método basta entitularmos o seu nome em seguida os parênteses e chaves conforme explicitado abaixo:

```javascript
   class Pessoa{

    nome: string;

    dormir() {
    console.log(`${this.nome}: zzzzzzz`);
    
  }
   }
```


![img mongoose](/mongoose.jpg )

## 4 - O que é mongoose?
> O Mongoose é uma biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação. Ele possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios.

O Mongoose fornece um mapeamento de objetos do MongoDB similar ao ORM (Object Relational Mapping), ou ODM (Object Data Mapping) no caso do Mongoose. Isso significa que o Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.

[Link para o Artivo](https://www.macoratti.net/17/04/mongo_cloud3.htm)

## 4.1 - Instalando o mongoose:

```console
npm install express
npm install mongoose
```



![Docker Node](./dockerNode.jpeg)

### 5 - Dockerizando aplicação:

> Para aplicação ficar mais completa iremos trabalhar com micro serviços (docker), inicialmente iremos dockerizar o mysql e o NodeJS.

```yml
version: '3.1'
# inicialmente teremos 02(dois) microserviços trabalhando conjuntamente o mysql e o nodeJS (API - Back-End) 
services:

# 1º serviço mysql
  mysql:  
  # baixar a imagem do mysql 5.7 no docker hub
      image: mysql:5.7
      # da um nome para o nosso container mysql
      container_name: container-mysql
      # configurar nossa vairável de ambiente 
      environment:
        - MYSQL_ROOT_PASSWORD=xxxx
      ports:
      # rodar na porta 3308 na  minha maquina e 3306 no container
        - 3308:3306  

  # 2º serviço      
  api:
  # Baixar a última versão do node tag (latest)
    image: node:latest
    # vamos nomear o container como container-api
    container_name: container-api
    # restartar automaticamente a aplicação 
    restart: always
    # configurando a porta onde vai rodar api dentro do container docker
    ports:
    # rodar na porta 3001 na  minha maquina e 3001 no container
      - 3001:3001
    # configurando as variaveis de ambiente do mysql  
    environment:
        - DB_HOST=mysql
        - DB_NAME=dbreservas
        - DB_USER=root
        - DB_PASSWORD=1020
        - SERVER_PORT:3001
    # Fazendo um bind entre minha pasta back-end e usr/app dentro do meu container node    
    volumes:
      - ./back-end:/usr/app
    # setando meu diretório de trabalho onde será refletido as mudanças feitas na pasta back-end  
    working_dir: /usr/app
    # por fim vamos rodar o comando npm install e npm start para instalar as dependencias do meu projeto 
    # dentro do container e por fim inicializar minha aplicação back-end
    command: bash -c "npm install && npm start"            
# --------------------------------------------------------------
# CRIANDO UM SCRIPT NO pakage.json para rondar o script abaixo #
# --------------------------------------------------------------
# docker-compose up -d
