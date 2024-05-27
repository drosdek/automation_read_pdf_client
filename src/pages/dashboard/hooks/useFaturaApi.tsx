import { useCallback } from "react";
import apiFactory from "../../../api/apiFactory";
import { IFatura } from "../interfaces/fatura.interface";

interface Filter {
  [key: string]: any;
}

const useFaturaApi = () => {
  const extractFaturaData = useCallback(
    (files: File[]): Promise<IFatura[]> => {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));

      return apiFactory("faturas/extract-fatura-data", "post", formData);
    },
    []
  );

  const getAllFaturas = useCallback((): Promise<IFatura[]> => {
    return apiFactory("/faturas", "get");
  }, []);

  const getFaturaById = useCallback((id: number): Promise<IFatura> => {
    return apiFactory(`faturas/byId/${id}`, "get");
  }, []);

  const getAllFaturasByNumeroCliente = useCallback(
    (numeroCliente: string): Promise<IFatura[]> => {
      return apiFactory(`faturas/byCliente/${numeroCliente}`, "get");
    },
    []
  );

  const filterFaturasByNumeroCliente = useCallback(
    (numeroCliente: string, filter: Filter): Promise<IFatura[]> => {
      const queryString = new URLSearchParams(filter).toString();
      return apiFactory(`faturas/filter/${numeroCliente}?${queryString}`, "get");
    },
    []
  );

  return {
    extractFaturaData,
    getFaturaById,
    getAllFaturas,
    getAllFaturasByNumeroCliente,
    filterFaturasByNumeroCliente,
  };
};

export default useFaturaApi;
