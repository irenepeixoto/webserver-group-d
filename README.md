# webserver-group-d

## Descrição
Aplicativo web que sugere o posto de combustível mais próximo com o combustível mais barato. Utiliza APIs para obter preços de combustíveis em Portugal e localização de postos de combustível.

## Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (versão 6 ou superior)
- Express: ```npm install express @types/express```

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/irenepeixoto/webserver-group-d.git
cd webserver-group-d
```

2. Dependências:
```bash
npm install
```

3. Crie um arquivo .env com as variáveis de ambiente:

SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
GOOGLE_API_KEY=<your_google_api_key>
EXPRESS_PORT=<your_preferred_port>

## Configuração do Supabase

Certifique-se de configurar o Supabase com as seguintes variáveis de ambiente:

SUPABASE_URL: A URL do seu projeto Supabase.
SUPABASE_KEY: A chave de API do Supabase que permite acesso aos dados.

1. Uso
Para iniciar o servidor, você pode usar o comando:

```bash
npm start
```

O servidor estará rodando na porta configurada no seu arquivo .env.

## Endpoints

Aqui estão os principais endpoints da aplicação:

GET /fuel/cheapest: Retorna o posto de combustível mais barato e próximo com base no tipo de combustível e código postal fornecidos.
GET /geo/address: Retorna o endereço a partir de um código postal.
GET /route/distance: Calcula a distância entre o endereço de origem e destino fornecidos.
GET /route/complete: Retorna a rota completa entre o endereço de origem e destino fornecidos.

## Estrutura do Projeto

|-- backend/
|   |-- .vscode/
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
|-- database/
|   |-- schema.sql
|-- Docker/
|   |-- docker-compose.yml
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

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature/correção: (git checkout -b feature/nova-feature).
3. Commit suas mudanças: (git commit -am 'Adicionar nova feature').
4. Envie para o repositório remoto: (git push origin feature/nova-feature).
5. Abra um Pull Request no repositório original.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.


### Adicionar a atualização ao Git:

1. Crie a nova branch:
```bash
git checkout -b update-readme
```





