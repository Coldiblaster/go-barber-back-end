<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
<h1 align="center">
  GoStack 13.0 - GoBarber API Rest - Back-End
  <br>
</h1>

<p align="center">
  <a href="#introdução">:small_blue_diamond: Introdução</a> 
  <a href="#pré-requisitos-warning">:small_blue_diamond: Pré-requisitos</a>
  <a href="#como-rodar-a-aplicação-arrow_forward">:small_blue_diamond: Como rodar a aplicação</a>
  <a href="#como-rodar-os-testes">:small_blue_diamond: Como rodar os testes</a>
  <a href="#comandos-importantes-clipboard">:small_blue_diamond: Comandos Importantes</a>
  <a href="#deploy-rocket">:small_blue_diamond: Deploy</a>
  <a href="#linguagens-dependencias-e-libs-utilizadas-books">:small_blue_diamond: Linguagens, dependencias e libs utilizadas</a>
</p>


## Introdução


## Pré-requisitos :warning:
- [x] [Docker](https://www.docker.com/get-started)
- [x] [Node.js](https://nodejs.org/en/download)
- [x] [Git](https://git-scm.com)
- [x] [Yarn](https://yarnpkg.com/)

## Como rodar a aplicação :arrow_forward:
```bash
# Clone o repositório
$ git clone https://github.com/Coldiblaster/go-barber-back-end.git
# Entre na pasta
$ cd go-barber-back-end
# Instale as dependências
$ yarn
# Inicie o Banco de Dados
$ docker run --name gostack_gobarber -e POSTGRES_PASSWORD=123456 -d postgres
# Rode as migrations
$ yarn typeorm migration:run
# Inicie o Projeto
$ yarn dev:server
```
## Como rodar os testes

Passo a passo para executar os testes

## Deploy :rocket:

Passo a passo para executar o Deploy

## Comandos Importantes :clipboard:

:memo: Knex.JS

```bash
# Caso precise criar migrations
$ yarn typeorm migration:create -n NomeTabela

# Rode as migrations
$ yarn typeorm migration:run

# Caso precise reverter uma migration (Reverte a ultima migration executada)
$ yarn typeorm migration:revert     

```

:whale: Docker

```bash
# Criar o Banco de Dados
$ docker run --name gostack_gobarber -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres

# Listar as imagens disponíveis no meu repositório local
$ docker ps

# Parar banco
$ docker stop gostack_postgres

# Inicar banco
$ docker start gostack_postgres

# Limpar as imagens e contêineres;
$ docker system prune -a

# Dicas de comandos para o docker:
$ https://woliveiras.com.br/posts/comandos-mais-utilizados-no-docker/
```

:octocat: Git

```bash
# Clonar o repositório
$ git clone https://github.com/Coldiblaster/go-barber-back-end.git

# Atualize o repositório com os arquivos atualizados da branch master
$ git pull
```

## Linguagens, dependencias e libs utilizadas :books:

- [Typeorm](https://typeorm.io/#/)
- [Typescript](https://typeorm.io/#/)

:copyright: 2020 - GoBarber API Rest - Vinicius Bastazin
