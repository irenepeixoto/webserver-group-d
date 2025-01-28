import Address from "../models/Address";

const routeService = {
  getRouteDistance: async (
    originAddress: Address,
    destinationAddress: Address,
  ) => {
    const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const GOOGLE_API_KEY = "AIzaSyDubVF_4V2Vr9ORnRhZ9kWB_TUtIo9uoMA";

    const body = {
      origin: { address: originAddress.fullAddress() },
      destination: { address: destinationAddress.fullAddress() },
    };
    console.log(JSON.stringify(body));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  },
};

export default routeService;
