import express from "express";
import fuelController from "../controllers/fuelController";

const fuelRoute = express.Router();

fuelRoute.get("/cheapest", fuelController.getCheapest);

export default fuelRoute;
