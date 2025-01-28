import express from "express";
import fuelPriceService from "./services/fuelPriceService";
import routeService from "./services/routeService";
const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(port, async () => {
  const route = await routeService.getRoute("porto", "braga");
  console.log(route);
  console.log(`listening on port ${port}`);
});
