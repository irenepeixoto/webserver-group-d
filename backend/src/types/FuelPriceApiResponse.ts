type FuelPriceApiResponse = {
  status: boolean;
  mensagem: string;
  resultado: {
    Nome: string;
    Municipio: string;
    Preco: string;
    Distrito: string;
    CodPostal: string;
    Combustivel: string;
    Morada: string;
  }[];
};

export default FuelPriceApiResponse;
