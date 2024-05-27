import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IFatura } from "../../interfaces/fatura.interface";
import { Box } from "@mui/material";

interface DataGridFaturaProps {
  faturas: IFatura[];
}

const DataGridFatura: React.FC<DataGridFaturaProps> = ({ faturas }) => {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "numeroCliente",
      headerName: "Nº Cliente",
      width: 150,
      editable: true,
    },
    {
      field: "numeroInstalacao",
      headerName: "Nº Instalação",
      width: 150,
      editable: true,
    },
    {
      field: "mesReferencia",
      headerName: "Referente a",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaQuantidade",
      headerName: "Energia Eletrica kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaValor",
      headerName: "Energia Eletrica R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaSCEESemICMSQuantidade",
      headerName: "Energia Eletrica SCEE s/ ICMS kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaSCEESemICMSValor",
      headerName: "Energia Eletrica SCEE s/ ICMS R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaSCEEIsentaQuantidade",
      headerName: "Energia Eletrica SCEE Isenta kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaEletricaSCEEIsentaValor",
      headerName: "Energia Eletrica SCEE Isenta R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaCompensadaGDIQuantidade",
      headerName: "Energia Eletrica Comp. GD I kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaCompensadaGDIValor",
      headerName: "Energia Eletrica Comp. GD I R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaCompSemICMSQuantidade",
      headerName: "Energia Comp. s/ ICMS kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaCompSemICMSValor",
      headerName: "Energia Comp. s/ ICMS R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaInjetadaHFPQuantidade",
      headerName: "Energia Injetada HFP kWh",
      valueGetter: (value) => value ? `${value} kWh` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "energiaInjetadaHFPValor",
      headerName: "Energia Injetada HFP R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "contribIlumPublicaMunicipalValor",
      headerName: "Contr. Ilum. Publica Municipal R$",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
    {
      field: "vencimento",
      headerName: "Vencimento",
      valueFormatter: (value) => new Date(value).toLocaleDateString("pt-br"),
      width: 150,
      editable: true,
    },
    {
      field: "valorPagar",
      headerName: "Valor a pagar (R$)",
      valueGetter: (value) => value ? `R$ ${value}` : "-",
      width: 150,
      editable: true,
    },
  ];

  const rows = faturas;
  return (
    <Box sx={{ height: 400, width: "90%" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default DataGridFatura;
