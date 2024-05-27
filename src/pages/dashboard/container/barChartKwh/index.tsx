import { useEffect, useState } from "react";
import { IFatura } from "../../interfaces/fatura.interface";
import { BarChart } from "@mui/x-charts/BarChart";

interface DataGridFaturaProps {
  faturas: IFatura[];
}

const BarChartFaturaKwh: React.FC<DataGridFaturaProps> = ({ faturas }) => {
  const [mesReferencia, setMesRefencia] = useState<String[]>([]);
  const [energiaKwh, setEnergiaKwh] = useState<number[]>([0]);

  const tratarDados = () => {
    let mesReferenciaTratado: String[] = [];
    let consumoKwh: number[] = [];
    faturas.forEach((item) => {
      if (item.mesReferencia) mesReferenciaTratado.push(item.mesReferencia);
      if (
        item.energiaEletricaQuantidade &&
        item.energiaEletricaSCEESemICMSQuantidade
      ) {
        consumoKwh.push(
          Number(item.energiaEletricaQuantidade) +
            Number(item.energiaEletricaSCEESemICMSQuantidade)
        );
      } else {
        consumoKwh.push(Number(item.energiaEletricaQuantidade));
      }
    });
    setEnergiaKwh(consumoKwh);
    setMesRefencia(mesReferenciaTratado);
  };

  useEffect(() => {
    tratarDados();
  }, [faturas]);
  return (
    <BarChart
      xAxis={[
        {
          id: "barConsumoEletricaKwh",
          data: mesReferencia,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: energiaKwh,
          label: `Consumo de Energia Elétrica KWh`
        },
      ]}
      title="Consumo de Energia Elétrica KWh"
      width={500}
      height={300}
    />
  );
};

export default BarChartFaturaKwh;
