import Address from "./Address";

class FuelPrice {
  constructor(
    readonly price: number,
    readonly fuelType: string,
    readonly stationAddress: Address,
    readonly stationName: string,
  ) {}
}

export default FuelPrice;
