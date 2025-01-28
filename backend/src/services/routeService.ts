import Address from "../models/Address";

const routeService = {
  getRouteDistance: async (
    originAddress: Address,
    destinationAddress: Address,
  ) => {
    const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const apiKey = process.env.GOOGLE_API_KEY || "";

    const body = {
      origin: { address: originAddress.fullAddress() },
      destination: { address: destinationAddress.fullAddress() },
      travelMode: "DRIVE",
    };
    console.log(JSON.stringify(body));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  },
  getRouteComplete: async (
    originAddress: Address,
    destinationAddress: Address,
  ) => {
    const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const apiKey = process.env.GOOGLE_API_KEY || "";

    const body = {
      origin: { address: originAddress.fullAddress() },
      destination: { address: destinationAddress.fullAddress() },
      travelMode: "DRIVE",
    };
    console.log(JSON.stringify(body));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  },
};

export default routeService;
