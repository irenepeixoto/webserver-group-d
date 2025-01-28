import express from "express";
import fuelController from "../controllers/fuelController";

const fuelRoute = express.Router();

fuelRoute.get("/cheapest", fuelController.getCheapest);
fuelRoute.get("/nearest", fuelController.getNearest);

export default fuelRoute;
