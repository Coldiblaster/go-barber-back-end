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

## Funcionalidades

- Existem as funcionalidades macro(Tudo que definimos como tela) e micro (Funcionalidades que estão dentro da tela de macro)

- Temos as seguintes categorias de micro:
  - RF (Requisitos funcionais): Todas funcionalidades que teremos dentro do macro.
  - RNF (Requisitos não funcionais): Tudo que não é ligado a regra de negocio.
  - RN (Regras de negocio):

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envio em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2hr;
- o usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrads;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

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
$ docker run --name gostack_gobarber -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
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

:memo: Typeorm

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
