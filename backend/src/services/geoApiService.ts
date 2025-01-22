import GeoApiResponse from "../types/GeoApiResponse";

const geoApiService = {
  getAddressByPostalCode: async (
    postalCode: string,
  ): Promise<GeoApiResponse> => {
    const url = `https://json.geoapi.pt/cp/${postalCode}`;
    const reponse = await fetch(url);
    const address: GeoApiResponse = await reponse.json();
    return address;
  },
};

export default geoApiService;
