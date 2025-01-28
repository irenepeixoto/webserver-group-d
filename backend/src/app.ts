import express from "express";
import fuelService from "./services/fuelService";
const app = express();

const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(port, async () => {
  const a = await fuelService.getNearest("4760-121", "Gasolina 95");
  console.log(a);
  console.log(`listening on port ${port}`);
});
