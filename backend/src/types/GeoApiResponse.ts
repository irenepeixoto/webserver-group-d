type GeoApiResponse = {
  CP: string;
  CP4: string;
  CP3: string;
  Distrito: string;
  Concelho: string;
  partes: {
    Artéria: string;
  }[];
  erro?: string;
};

export default GeoApiResponse;
