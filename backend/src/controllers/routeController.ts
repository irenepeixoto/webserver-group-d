import { Request, Response } from 'express';
import routeService from '../services/routeService';
import Address from '../models/Address';

const routeController = {
  getDistance: async (req: Request, res: Response) => {
    try {
      const { origin, destination } = req.query;
      
      if (!origin || !destination) {
        return res.status(400).json({ message: 'Both origin and destination are required' });
      }

      const originAddr = JSON.parse(origin as string);
      const destinationAddr = JSON.parse(destination as string);

      const originAddress = new Address(originAddr.postalCode, originAddr.line, originAddr.municipality, originAddr.state);
      const destinationAddress = new Address(destinationAddr.postalCode, destinationAddr.line, destinationAddr.municipality, destinationAddr.state);

      const distance = await routeService.getRouteDistance(originAddress, destinationAddress);
      res.json(distance);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: 'Error calculating route distance', error: error.message });
    }
  },
  getCompleteRoute: async (req: Request, res: Response) => {
    try {
      const { origin, destination } = req.query;

      if (!origin || !destination) {
        return res.status(400).json({ message: 'Both origin and destination are required' });
      }

      const originAddr = JSON.parse(origin as string);
      const destinationAddr = JSON.parse(destination as string);

      const originAddress = new Address(originAddr.postalCode, originAddr.line, originAddr.municipality, originAddr.state);
      const destinationAddress = new Address(destinationAddr.postalCode, destinationAddr.line, destinationAddr.municipality, destinationAddr.state);

      const route = await routeService.getRouteComplete(originAddress, destinationAddress);
      res.json(route);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: 'Error calculating complete route', error: error.message });
    }
  },
};

export default routeController;
