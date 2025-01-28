import Address from "./Address";

class FuelPrice {
  constructor(
    readonly price: string,
    readonly fuelType: string,
    readonly stationAddress: Address,
    readonly stationName: string,
  ) { }
}

export default FuelPrice;
