# webserver-group-d

## Descrição

O Webserver Group-D é uma aplicação web que ajuda os utilizadores a encontrar o posto de combustível mais próximo e económico em Portugal. Utilizando APIs de geolocalização e preços de combustíveis, a aplicação sugere a melhor opção com base na localização e tipo de combustível desejado.

## Funcionalidades

✅ Sugere o posto mais próximo e barato com base na localização e no tipo de combustível.
✅ Consulta preços de combustível em tempo real através da API da DGEG.
✅ Fornece rotas otimizadas através do Google Maps API.
✅ Desenvolvido com Node.js, Express e Supabase para uma solução escalável.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)

Confirme que tem o Node.js instalado e na versão correta:

```bash
node -v   # Deve ser 14 ou superior
```

- [npm](https://www.npmjs.com/) (versão 6 ou superior)

Confirme que tem o npm instalado e na versão correta:

```bash
npm -v    # Deve ser 6 ou superior
```

- [Docker](https://www.docker.com/)

Verifique se o Docker está instalado:

```bash
docker --version
```
Se não estiver, pode instalar a partir do [site oficial](https://www.docker.com/).

- Certifique-se de configurar o Supabase com as seguintes variáveis de ambiente:

```bash
`SUPABASE_URL`: A URL do seu projeto Supabase.
`SUPABASE_KEY`: A chave de API do Supabase que permite acesso aos dados.
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/irenepeixoto/webserver-group-d.git
cd webserver-group-d
```

2. Navegue até o diretório do `\backend`:

```bash
cd backend
```

3. Instale as dependências do Node.js:

```bash
npm install
```

3. Crie um arquivo `.env` com as variáveis a seguir. Substitua pelos valores correspondentes às suas credenciais:

```plaintext
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
GOOGLE_API_KEY=<your_google_api_key>
EXPRESS_PORT=<your_preferred_port>  # Exemplo: 3000
```

Certifique-se de que o ficheiro `.env` está localizado no diretório `\backend` onde irá executar o comando docker run. Caso contrário, utilize o parâmetro `--env-file` para especificar o caminho completo.

4. Inicie os serviços do Docker:

- Navegue até o diretório do backend (se necessário):

```bash
cd backend
```

- Construa a imagem Docker:

```bash
docker build -t backend ./backend
```

- Inicie o container:

```bash
docker run -p 3000:3000 --env-file .env --network="host" -t backend
```

5. Inicie a aplicação:

Para iniciar o servidor, pode usar o comando:
```bash
npm start
```

O servidor vai rodar na porta configurada no seu arquivo `.env` na variável `EXPRESS_PORT`. Por exemplo, se a variável for configurada para 3000, o servidor estará acessível na porta 3000 na sua máquina local.
 

## APIs Utilizadas

1. **GeoAPI**: Utilizada para obter o endereço a partir de um código postal.
   - [Obter endereço de um código postal](https://geoapi.pt/?mapa=3)
2. **API de Preços de Combustíveis**: Utilizada para obter os preços dos combustíveis nos postos de combustível em Portugal.
   - [Pesquisar postos de combustíveis](https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos)
3. **API Google Routes**: Utilizada para obter rotas entre o endereço do utilizador e do posto de combustível.
   - [Obter Rotas](https://developers.google.com/maps/documentation/routes)

### Endpoints da API

Aqui estão os principais endpoints da aplicação:

- `GET /fuel/cheapest`: Retorna o posto de combustível mais barato com base no tipo de combustível e código postal fornecidos.
- `GET /fuel/nearest`: Retorna o posto de combustível mais próximo com base no tipo de combustível e código postal fornecidos.

#### **Exemplo: Obter o posto de combustível mais barato**
- **Rota:** `GET /fuel/cheapest`
- **Exemplo de uso:**
   ```bash
   GET "http://localhost:3000/fuel/cheapest?fuel_type=Gasolina 98&postalCode=4760-121"
   ```
- **Resposta esperada (JSON):**
```plaintext   
"userAddress": {
   "postalCode": "4760-121",
   "line": "Rua António Carvalho Faria",
   "municipality": "Vila Nova de Famalicão",
   "state": "Braga",
   "latitude"：0，
   "longitude": 0
}

"fuelPrice": {
   "price":
   "1,804 €",
   "fuelType": "Gasolina especial 98".
   "stationAddress": {
      "postalCode": "4765-072",
      "line": "Av. Vila Nunes",
      "municipality": "Vila Nova de Famalicão".
      "state": "Braga",
      "latitude": 41.365586,
      "longitude": -8.443049
   }
   "stationName": "Q8 CARREIRA"
}
```
   
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
|   |-- .env
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

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature/correção: 
```bash
git checkout -b feature/nova-feature
```
3. Commit suas mudanças: 
```bash
git commit -m "Adicionar nova feature"
```
4. Envie para o repositório remoto: 
```bash
git push origin feature/nova-feature
```
5. Abra um Pull Request no repositório original.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
