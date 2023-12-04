<div align="center">

# ADS03_ILP007

Repositório para as atividades em dupla WB da disciplina Programação Orientada a Objetos.

## Professor Doutor Gerson da Penha Neto

## A Equipe:

| Partipantes | Github |
| -------- |-------- |
| Alicea Lima | <a href="https://github.com/alicearocha" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |
| Mateus de Sousa | <a href="https://github.com/MateusdiSousa" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |

</div>


# Listas
* 1<a href="#1"> atvi-wb-typescript ✅</a>
* 2<a href="#2"> atvii-wb-typescript ✅</a>
* 3<a href="#3"> atviii-wb-typescript ✅</a>
* 4<a href="#4"> atviv-wb-typescript ✅</a>
* 5<a href="#5"> atvv-wb-typescript 🚧</a>

<span id="1">

## Lista I

#### Primeiro projeto do WB é do tipo cli (command-line interface) com cadastros dos clientes e seus respectivos produtos, serviços e listagens de negócios.
🛠️ Para rodar o programa em sua máquina deve seguir os comandos:
```cmd
1º - cd .\atividade-wb1\
tsc
2º - npm install
3º - node out/app/main.js
```

<span id="2">

## Lista II

#### Segundo projeto do WB tem o objetivo de desenvolver interfaces gráficas (sem vínculo algum com
aplicação back-end) trabalhando com classes no TypeScript.
🛠️ Para rodar o programa em sua máquina deve seguir os comandos: 

```cmd
1º - cd .\atividade-wb2\
2º - npm install
3º - npm start
```

<span id="3">

## Lista III

#### Terceiro projeto do WB tem o objetivo de desenvolver interfaces gráficas (sem vínculo algum com
aplicação back-end) trabalhando com funções no TypeScript.
Para rodar o programa deve usar os comandos: 

```cmd
1º - cd .\atividade-wb3
2º - npm install
3º - npm start
```

<span id="4">

## Lista IV

#### Projeto para a integração da interface com um backend previamente disponibilizado (apenas clientes).
🛠️ Para rodar o programa em sua máquina deve seguir os comandos:

(Pasta Server)
```cmd
1º - cd atviv-wb-typescript
2º - cd executavel
3º - java -jar wbbackend.jar
```

(Pasta Client)
```cmd
4º - cd atviv-wb-typescript. 
5º - cd frontend
6º - npm install
6º - npm start
```

<span id="5">

## Lista V

#### Finalização do projeto iniciado na lista I, unindo a interface com um backend desenvolvido pela equipe para atender não somente aos clientes, mas aos produtos e serviços também, feito em express.
🛠️ Para rodar o programa em sua máquina deve seguir os comandos: 
``` cmd
1º - Instale o postgres na sua máquina. Em seguida, crie um banco de dados com o nome de "wb".
2º - cd atividade-wb5
2º - Dentro da raiz da pasta backend: crie uma arquivo '.env' e coloque as informações do seu banco seguindo o exemplo do arquivo '.env.exemplo.'
3º - No terminal: entre na pasta backend com o comando 'cd .\backend\'
4º - No terminal: digite 'npm install'
5º - No terminal: digite 'npm install --save @nestjs/typeorm typeorm pg'
6º - No terminal: digite 'npm run start' para rodar o servidor

----------------------------------Front-End---------------------------------------

1º - Abra um novo terminal: entra na pasta frontend com o comando 'cd .\frontend\'
7º - Agora neste terminal digite 'npm install' e em seguida 'npm run start' para rodar a aplicação
```
