import { Request, Response } from 'express';
import fuelService from '../services/fuelService';

const fuelController = {
  getCheapest: async (req: Request, res: Response) => {
    try {
      const { postalCode, fuelType } = req.query;
      if (!postalCode || !fuelType) {
        return res.status(400).json({ message: 'Postal code and fuel type are required' });
      }
      const route = await fuelService.getCheapest(postalCode as string, fuelType as string);
      res.json(route);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: 'Error fetching fuel prices and routes.', error: error.message });
    }
  },
};

export default fuelController;
