import { Request, Response } from "express";
import fuelService from "../services/fuelService";
import supabaseService from "../services/supabaseService";

const fuelController = {
  getCheapest: async (
    req: Request<{}, {}, {}, { postalCode?: string; fuelType?: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const { postalCode, fuelType } = req.query;
      if (!postalCode || !fuelType) {
        res.status(400).json({ message: "Postal code and fuel type are required" });
        return; // Use `return` sem retornar a resposta
      }
      const route = await fuelService.getCheapest(postalCode, fuelType);
      if (!route) {
        res.status(404).json({ message: "No routes found" });
        return;
      }
      res.status(200).json(route);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: "Error fetching fuel prices and routes.", error: error.message });
    }
    const route = await fuelService.getCheapest(postalCode, fuelType);
    supabaseService.saveResponse(req.ip!, route)
    res.status(200).json(route);
  },
  getNearest: async (
    req: Request<{}, {}, {}, { postalCode?: string; fuelType?: string }>,
    res: Response
  ): Promise<void> => {
    try {
      const { postalCode, fuelType } = req.query;
      if (!postalCode || !fuelType) {
        res.status(400).json({ message: "Postal code and fuel type are required" });
        return; // Use `return` sem retornar a resposta
      }
      const route = await fuelService.getNearest(postalCode, fuelType);
      if (!route) {
        res.status(404).json({ message: "No routes found" });
        return;
      }
      res.status(200).json(route);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: "Error fetching fuel prices and routes.", error: error.message });
    }
    const route = await fuelService.getNearest(postalCode, fuelType);
    supabaseService.saveResponse(req.ip!, route)
    res.status(200).json(route);
  },
};

export default fuelController;
