import BadRequestError from "../errors/BadRequest";
import Address from "../models/Address";
import GeoApiResponse from "../types/GeoApiResponse";

const geoApiService = {
  getAddressByPostalCode: async (
    postalCode: string,
  ): Promise<Address> => {
    const postalCodeRegex = /^\d\d\d\d-\d\d\d$/;
    if (!postalCodeRegex.test(postalCode)) {
      throw new BadRequestError("The provided postal code must follow the following format: 1234-567")
    }

    const url = `https://json.geoapi.pt/cp/${postalCode}`;
    const reponse = await fetch(url);
    const data: GeoApiResponse = await reponse.json();
    const address = new Address(data.CP, data.partes[0].Artéria, data.Concelho, data.Distrito);
    return address;
  },
};

export default geoApiService;
