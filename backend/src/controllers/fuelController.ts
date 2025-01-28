import { Request, Response } from "express";
import fuelService from "../services/fuelService";
import supabaseService from "../services/supabaseService";

const fuelController = {
  getCheapest: async (
    req: Request<{}, {}, {}, { postalCode?: string; fuelType?: string }>,
    res: Response,
  ): Promise<void> => {
    const { postalCode, fuelType } = req.query;
    if (!postalCode || !fuelType) {
      res
        .status(400)
        .json({ message: "Postal code and fuel type are required" });
      return;
    }
    const route = await fuelService.getCheapest(postalCode, fuelType);
    console.log(req.ip)
    supabaseService.saveResponse(req.ip!, route)
    res.status(200).json(route);
  },
  getNearest: async (
    req: Request<{}, {}, {}, { postalCode?: string; fuelType?: string }>,
    res: Response,
  ): Promise<void> => {
    const { postalCode, fuelType } = req.query;
    if (!postalCode || !fuelType) {
      res
        .status(400)
        .json({ message: "Postal code and fuel type are required" });
      return;
    }
    const route = await fuelService.getNearest(postalCode, fuelType);
    supabaseService.saveResponse(req.ip!, route)
    res.status(200).json(route);
  },
};

export default fuelController;
