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
    const route = await routeService.getRouteComplete(
      userAddress,
      fuelPrices[0].stationAddress,
    );
    return { route, userAddress, fuelPrice: fuelPrices[0] };
  },
  getNearest: async (postalCode: string, fuelType: string) => {
    const userAddress = await geoApiService.getAddressByPostalCode(postalCode);

    const fuelPrices = await fuelPriceService.getAllByAddress(
      userAddress,
      fuelType,
    );

    const promises = fuelPrices.map((fuelPrice) =>
      routeService.getRouteDistance(userAddress, fuelPrice.stationAddress),
    );

    const routesDistance = await Promise.all(promises);

    const nearestFuelIndex = routesDistance.reduce(
      (prevRouteIndex, currRoute, currRouteIndex, routesArray) => {
        return currRoute.distanceMeters <
          routesArray[prevRouteIndex].distanceMeters
          ? currRouteIndex
          : prevRouteIndex;
      },
      0,
    );

    const route = await routeService.getRouteComplete(
      userAddress,
      fuelPrices[nearestFuelIndex].stationAddress,
    );

    return { route, userAddress, fuelPrice: fuelPrices[nearestFuelIndex] };
  },
};

export default fuelService;
