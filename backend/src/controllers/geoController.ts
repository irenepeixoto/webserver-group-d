import { Request, Response } from "express";
import geoApiService from "../services/geoApiService";

const geoController = {
  getAddress: async (req: Request, res: Response) => {
    try {
      const { postalCode } = req.query;
      if (!postalCode) {
        return res.status(400).json({ message: "Postal code is required" });
      }
      const address = await geoApiService.getAddressByPostalCode(postalCode as string);
      if (!address) {
        return res.status(404).json({ message: "Address not found" });
      }
      res.status(200).json(address);
    } catch (err) {
      const error = err as Error;
      res.status(500).json({ message: "Error fetching address", error: error.message });
    }
  },
};

export default geoController;
