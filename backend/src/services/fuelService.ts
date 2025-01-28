import fuelPriceService from "./fuelPriceService";
import geoApiService from "./geoApiService";
import routeService from "./routeService";

const fuelService = {
  getCheapest: async (postalCode: string, fuelType: string) => {
    const userAddress = await geoApiService.getAddressByPostalCode(postalCode);
    const fuelPrices = await fuelPriceService.getAllByAddress(
      userAddress,
      fuelType,
    );
    const route = routeService.getRouteComplete(
      userAddress,
      fuelPrices[0].stationAddress,
    );
    return route;
  },
};

export default fuelService;
