# SteamDB API

Aplicação desenvolvida em Node.js utilizando JavaScript para consumir a Web API da Steam e obter informações sobre jogos, como:

- Título
- Desenvolvedora
- Distribuidora
- Modos de jogo
- Gêneros
- Data de lançamento
- Plataformas suportadas

E outras informações.

O projeto foi criado para agilizar a coleta e padronização dessas informações para um projeto pessoal de banco de dados voltado à curadoria de jogos.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Axios
- Steam Web API

## Como executar

Clone o repositório:

```bash
git clone <repositorio>
```

Acesse a pasta do projeto:

```bash
cd api-steamdb
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
node src/main.js
```

## Inserindo IDs de jogos

Para consultar diferentes jogos, altere o arquivo:

```txt
/src/data/jogosId.json
```

Exemplo:

```json
[
  1507580,
  730,
  570
]
```

Cada número representa o ID de um jogo na Steam. 

Para descobrir o id de um jogo vá na página do **steamdb** e pesquise pelo titulo do jogo.