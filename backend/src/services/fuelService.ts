import fuelPriceService from "./fuelPriceService";
import geoApiService from "./geoApiService";

const fuelService = {
  getCheapest: async(postalCode: string, fuelType: string) => {
    const userAddress = await geoApiService.getAddressByPostalCode(postalCode);
    const fuelPrices = await fuelPriceService.getAllByAddress(userAddress, fuelType);
  }
};

export default fuelService;
