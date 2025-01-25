import express from "express";
import fuelPriceService from "./services/fuelPriceService";
const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
});
