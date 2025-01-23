import express from "express";import geoApiService from "./services/geoApiService";
 const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
  const address = await geoApiService.getAddressByPostalCode("4760-121");
  console.log(address);
});
