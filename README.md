# webserver-group-d

## Descrição

Aplicação web que sugere o posto de combustível mais próximo com o combustível mais barato. Utiliza APIs para obter preços de combustíveis em Portugal e localização de postos de combustível.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (versão 6 ou superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Express: ```npm install express @types/express```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/irenepeixoto/webserver-group-d.git
cd webserver-group-d
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com as variáveis de ambiente:

```plaintext
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
GOOGLE_API_KEY=<your_google_api_key>
EXPRESS_PORT=<your_preferred_port>
```

## Configuração do Supabase

Certifique-se de configurar o Supabase com as seguintes variáveis de ambiente:
- `SUPABASE_URL`: A URL do seu projeto Supabase.
- `SUPABASE_KEY`: A chave de API do Supabase que permite acesso aos dados.

## Uso

Para iniciar o servidor, pode usar o comando:
```bash
npm start
```

O servidor vai rodar na porta configurada no seu arquivo `.env`.

## APIs Utilizadas

1. **GeoAPI**: Utilizada para obter o endereço a partir de um código postal.<br>
   - [Obter endereço de um código postal](https://geoapi.pt/?mapa=3)
2. **API de Preços de Combustíveis**: Utilizada para obter os preços dos combustíveis nos postos de combustível em Portugal.<br>
   - [Pesquisar postos de combustíveis](https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos)
3. **API Google Routes**: Utilizada para obter rotas entre o endereço do utilizador e do posto de combustível.<br>
   - [Obter Rostas](https://developers.google.com/maps/documentation/routes)
## Endpoints

Aqui estão os principais endpoints da aplicação:

- `GET /fuel/cheapest`: Retorna o posto de combustível mais barato com base no tipo de combustível e código postal fornecidos.
- `GET /fuel/nearest`: Retorna o posto de combustível mais próximo com base no tipo de combustível e código postal fornecidos.

## Estrutura do Projeto

```plaintext
|-- backend/
|   |-- node_modules/
|   |-- src/
|   |   |-- controllers/
|   |   |   |-- fuelController.ts
|   |   |   |-- geoController.ts
|   |   |   |-- routeController.ts
|   |   |-- database/
|   |   |   |-- database.ts
|   |   |-- errors/
|   |   |   |-- BadRequest.ts
|   |   |-- middlewares/
|   |   |   |-- errorHandler.ts
|   |   |-- models/
|   |   |   |-- Address.ts
|   |   |   |-- FuelPrice.ts
|   |   |-- services/
|   |   |   |-- fuelPriceService.ts
|   |   |   |-- fuelService.ts
|   |   |   |-- geoApiService.ts
|   |   |   |-- routeService.ts
|   |   |-- types/
|   |   |   |-- FuelPriceApiResponse.ts
|   |   |   |-- GeoApiResponse.ts
|   |   |-- app.ts
|   |-- Dockerfile
|-- frontend/
|   |-- scripts/
|   |   |-- main.js
|   |-- styles/
|   |   |-- style.css
|   |-- index.html
|   |-- .dockerignore
|   |-- .gitignore
|   |-- LICENCE
|   |-- municipios_ids
|   |-- README.md
|
```

## Configuração do Docker

### Construindo e Iniciando o Container Docker

1. Navegue até o diretório do webservice:

```bash
cd backend
```

2. Construa a imagem Docker:

```bash
docker build . --network=host -t backend
```

3. Inicie o container:

```bash
docker run -p 3000:3000 -e SUPABASE_KEY=chave-api-supabase -e SUPABASE_URL=url-api-supabase -e GOOGLE_API_KEY=chave-api-google --network="host" -t backend
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature/correção: 
```bash
git checkout -b feature/nova-feature
```
3. Commit suas mudanças: 
```bash
git commit -am 'Adicionar nova feature'
```
4. Envie para o repositório remoto: 
```bash
git push origin feature/nova-feature
```
5. Abra um Pull Request no repositório original.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

### Adicionar a atualização ao Git:

1. Crie a nova branch:
```bash
git checkout -b update-readme
```
