const { RoutesClient } = require("@googlemaps/routing").v2;

const routingClient = new RoutesClient({
  apiKey: "AIzaSyDubVF_4V2Vr9ORnRhZ9kWB_TUtIo9uoMA",
});

const routeService = {
  getRoute: async (originAddress: string, destinationAddress: string) => {
    const origin = {
      origin: { address: originAddress },
    };
    const destination = {
      destination: { address: destinationAddress },
    };

    const response = await routingClient.computeRoutes(
      { origin, destination },
      {
        otherArgs: {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": "AIzaSyDubVF_4V2Vr9ORnRhZ9kWB_TUtIo9uoMA",
            "X-Goog-FieldMask":
              "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
          },
        },
      },
    );

    return response;
  },
};

export default routeService;
