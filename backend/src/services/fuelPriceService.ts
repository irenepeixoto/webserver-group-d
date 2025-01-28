import BadRequestError from "../errors/BadRequest";
import Address from "../models/Address";
import FuelPrice from "../models/FuelPrice";
import FuelPriceApiResponse from "../types/FuelPriceApiResponse";
import GeoApiResponse from "../types/GeoApiResponse";

const fuelPriceService = {
  getAllByAddress: async (
    address: Address,
    fuelType: string,
  ): Promise<FuelPrice[]> => {
    if (
      !Object.keys(FuelTypes).some(
        (validFuelType) => validFuelType === fuelType,
      )
    ) {
      throw new BadRequestError(
        "The provided fuel type is not valid, please chose a valid type: 'Gasóleo', 'Gasolina 95', 'Gasolina 98'",
      );
    }

    const fuelTypeId = FuelTypes[fuelType as keyof typeof FuelTypes];
    const MunicipalityId =
      MunicipalitiesIds[address.state as keyof typeof MunicipalitiesIds];

    const url = `https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=${fuelTypeId}&idMarca=&idTipoPosto=&idDistrito3=&idsMunicipios=${MunicipalityId}&qtdPorPagina=1000&pagina=1`;

    const response = await fetch(url);
    const data = (await response.json()) as FuelPriceApiResponse;

    const fuelPrices = data.resultado.map((result) => {
      const stationAddress = new Address(
        result.CodPostal,
        result.Morada,
        result.Municipio,
        result.Distrito,
      );
      const fuelPrice = new FuelPrice(
        result.Preco,
        result.Combustivel,
        stationAddress,
        result.Nome,
      );
      return fuelPrice;
    });

    return fuelPrices;
  },
};

enum FuelTypes {
  "Gasóleo" = 2101,
  "Gasolina 95" = 3201,
  "Gasolina 98" = 3405,
}

enum MunicipalitiesIds {
  "Amares" = 34,
  "Barcelos",
  "Braga",
  "Cabeceiras de Basto",
  "Celorico de Basto",
  "Esposende",
  "Fafe",
  "Guimarães",
  "Guimares" = 42,
  "Póvoa de Lanhoso",
  "Terras de Bouro",
  "Vieira do Minho",
  "Vila Nova de Famalicão",
  "Vila Verde",
  "Vale de Cambra",
  "Vizela",
}

export default fuelPriceService;
