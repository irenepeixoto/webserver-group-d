import express from "express";
import "express-async-errors";
import fuelRoute from "./routes/fuelRoute";
import errorHandlerMiddleware from "./middlewares/errorHandler";
const app = express();

const port = process.env.EXPRESS_PORT || 3000;

app.use("/fuel", fuelRoute);

app.use(errorHandlerMiddleware);
app.use(express.json());

app.listen(port, async () => {
  console.log(`listening on port ${port}`);
});
