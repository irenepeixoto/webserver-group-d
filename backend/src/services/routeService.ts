const { RoutesClient } = require("@googlemaps/routing").v2;

const routingClient = new RoutesClient({
  apiKey: "",
});

const routeService = {
  getRouteDistance: async (originAddress: string, destinationAddress: string) => {
    const origin = {
      origin: { address: originAddress },
    };
    const destination = {
      destination: { address: destinationAddress },
    };

    const response = await routingClient.computeRoutes(
      { origin, destination, units: "METRIC"},
      {
        otherArgs: {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": "",
            "X-Goog-FieldMask":
              "routes.duration,routes.distanceMeters",
          },
        },
      },
    );

    return response;
  },
  getRouteComplete: async ()
};

export default routeService;
