import BadRequestError from "../errors/BadRequest";
import GeoApiResponse from "../types/GeoApiResponse";

const geoApiService = {
  getAddressByPostalCode: async (
    postalCode: string,
  ): Promise<GeoApiResponse> => {
    const postalCodeRegex = /^\d\d\d\d-\d\d\d$/;
    if (!postalCodeRegex.test(postalCode)) {
      throw new BadRequestError("The provided postal code must follow the following format: 1234-567")
    }

    const url = `https://json.geoapi.pt/cp/${postalCode}`;
    const response= await fetch(url);
    const address: GeoApiResponse = await response.json();
    return address;
  },
};

export default geoApiService;
