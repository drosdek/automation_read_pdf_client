import { useEffect, useState } from "react";
import useFaturaApi from "./hooks/useFaturaApi";
import Grid from "@mui/material/Unstable_Grid2";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import { IFatura } from "./interfaces/fatura.interface";
import DataGridFatura from "./container/dataGrid";
import BarChartFaturaKwh from "./container/barChartKwh";
import BarChartFaturaValor from "./container/barChartValor";
import SomatoriaConsumos from "./container/somatoriaConsumo";
import FileUpload from "./container/fileUpload";

interface IOptionsAC {
  label: String;
  value: String | Number;
}

const Dashboard: React.FC = () => {
  const { getFaturaById, getAllFaturasByNumeroCliente, getAllFaturas } =
    useFaturaApi();
  const [fatura, setFatura] = useState<IFatura | null>(null);
  const [faturas, setFaturas] = useState<IFatura[]>([]);
  const [faturasAC, setFaturasAC] = useState<IOptionsAC[]>([]);
  const [selectedAC, setSelectedAC] = useState<String | Number>("");

  const fetchFaturas = async () => {
    try {
      const data = await getAllFaturasByNumeroCliente(String(selectedAC));
      setFaturas(data);
    } catch (error) {
      console.error("Erro ao buscar faturas:", error);
    }
  };

  const fetchAllFaturasForAC = async () => {
    try {
      const data = await getAllFaturas();
      let options: IOptionsAC[] = [];
      let uniqueClientes = new Set();
      data.forEach((item: IFatura) => {
        if (item.numeroCliente && !uniqueClientes.has(item.numeroCliente)) {
          options.push({
            label: item.numeroCliente,
            value: item.numeroCliente,
          });
          uniqueClientes.add(item.numeroCliente);
        }
      });
      setFaturasAC(options);
    } catch (error) {
      console.error("Erro ao buscar faturas:", error);
    }
  };

  useEffect(() => {
    fetchAllFaturasForAC();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography>
          Digite o Nº Cliente para localizarmos sua fatura:
        </Typography>
        <Grid container direction="row" alignItems="center">
          <Grid>
            <Autocomplete
              sx={{ width: 300 }}
              options={faturasAC}
              onChange={(_, newValue) => {
                if (newValue) setSelectedAC(newValue?.value);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Nº Cliente" />
              )}
            ></Autocomplete>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              onClick={fetchFaturas}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <FileUpload />
        </Grid>
        <SomatoriaConsumos faturas={faturas} />
        <Grid container xs={12} justifyContent="center">
          <DataGridFatura faturas={faturas} />
        </Grid>
        <Grid container xs={12} justifyContent="center">
          <Grid xs={12} sm={6}>
            <BarChartFaturaKwh faturas={faturas} />
          </Grid>
          <Grid xs={12} sm={6}>
            <BarChartFaturaValor faturas={faturas} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
