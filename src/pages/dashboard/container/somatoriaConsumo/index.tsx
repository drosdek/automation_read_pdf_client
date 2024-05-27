import { useEffect, useState } from "react";
import { IFatura } from "../../interfaces/fatura.interface";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

interface DataGridFaturaProps {
  faturas: IFatura[];
}
const SomatoriaConsumos: React.FC<DataGridFaturaProps> = ({ faturas }) => {
  const [consumoEnergiaEletrica, setConsumoEnergiaEletrica] =
    useState<number>();
  const [energiaCompensada, setEnergiaCompensada] = useState<number>();
  const [valorTotalSemdGD, setValorTotalSemdGD] = useState<number>();
  const [economiaGD, setEconomiaGD] = useState<number>();

  const tratarDados = () => {
    let consumoEnergiaEletricaTratado: number = 0;
    let energiaCompensadaTratado: number = 0;
    let valorTotalSemdGDTratado: number = 0;
    let economiaGDTratado: number = 0;
    faturas.forEach((item) => {
      if (
        item.energiaEletricaQuantidade &&
        item.energiaEletricaSCEESemICMSQuantidade
      ) {
        consumoEnergiaEletricaTratado +=
          Number(item.energiaEletricaQuantidade) +
          Number(item.energiaEletricaSCEESemICMSQuantidade);
      }
      if (item.energiaCompensadaGDIQuantidade)
        energiaCompensadaTratado += Number(item.energiaCompensadaGDIQuantidade);
      if (
        item.energiaEletricaValor &&
        item.energiaEletricaSCEESemICMSValor &&
        item.contribIlumPublicaMunicipalValor
      ) {
        valorTotalSemdGDTratado +=
          Number(item.energiaEletricaValor) +
          Number(item.energiaEletricaSCEESemICMSValor) +
          Number(item.contribIlumPublicaMunicipalValor);
      }
      if (item.energiaCompensadaGDIQuantidade)
        economiaGDTratado += Number(item.energiaCompensadaGDIQuantidade);
    });
    setConsumoEnergiaEletrica(consumoEnergiaEletricaTratado);
    setEnergiaCompensada(consumoEnergiaEletricaTratado);
    setValorTotalSemdGD(valorTotalSemdGDTratado);
    setEconomiaGD(economiaGDTratado);
  };

  useEffect(() => {
    tratarDados();
  }, [faturas]);
  return (
    <Grid container xs={12}>
      <Grid xs={12} sm={3} container alignItems="center" direction="column">
        <Typography>Consumo de Energia Elétrica KWh</Typography>
        {consumoEnergiaEletrica}
      </Grid>
      <Grid xs={12} sm={3} container alignItems="center" direction="column">
        <Typography>Energia Compensada kWh</Typography>
        {energiaCompensada}
      </Grid>
      <Grid xs={12} sm={3} container alignItems="center" direction="column">
        <Typography>Valor Total sem GD R$</Typography>
        {valorTotalSemdGD}
      </Grid>
      <Grid xs={12} sm={3} container alignItems="center" direction="column">
        <Typography>Economia GD R$</Typography>
        {economiaGD}
      </Grid>
    </Grid>
  );
};
export default SomatoriaConsumos;
