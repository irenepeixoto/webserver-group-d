import Address from "../models/Address";

const routeService = {
  getRouteDistance: async (
    originAddress: Address,
    destinationAddress: Address,
  ): Promise<{ distanceMeters: number; duration: string }> => {
    const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const apiKey = process.env.GOOGLE_API_KEY || "";

    const body = {
      origin: { address: originAddress.fullAddress() },
      destination: {
        location: {
          latLng: {
            latitude: destinationAddress.latitude,
            longitude: destinationAddress.longitude,
          },
        },
      },
      travelMode: "DRIVE",
    };

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
    return data.routes[0];
  },
  getRouteComplete: async (
    originAddress: Address,
    destinationAddress: Address,
  ) => {
    const url = "https://routes.googleapis.com/directions/v2:computeRoutes";
    const apiKey = process.env.GOOGLE_API_KEY || "";

    const body = {
      origin: { address: originAddress.fullAddress() },
      destination: {
        location: {
          latLng: {
            latitude: destinationAddress.latitude,
            longitude: destinationAddress.longitude,
          },
        },
      },
      travelMode: "DRIVE",
    };

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
    return data.routes[0];
  },
};

export default routeService;
