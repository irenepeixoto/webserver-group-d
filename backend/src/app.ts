import express from "express";
import fuelService from "./services/fuelService";
import fuelRoute from "./routes/fuelRoute";
import errorHandler from "./middlewares/errorHandler";
const app = express();

const port = process.env.EXPRESS_PORT || 3000;

app.use("/fuel", fuelRoute);

app.use(errorHandler);
app.use(express.json());

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
});
