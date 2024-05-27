import { useEffect, useState } from "react";
import { IFatura } from "../../interfaces/fatura.interface";
import { BarChart } from "@mui/x-charts/BarChart";

interface DataGridFaturaProps {
  faturas: IFatura[];
}

const BarChartFaturaValor: React.FC<DataGridFaturaProps> = ({ faturas }) => {
  const [mesReferencia, setMesRefencia] = useState<String[]>([]);
  const [energiaKwh, setEnergiaKwh] = useState<number[]>([0]);

  const tratarDados = () => {
    let mesReferenciaTratado: String[] = [];
    let consumoKwh: number[] = [];
    faturas.forEach((item) => {
      if (item.mesReferencia) mesReferenciaTratado.push(item.mesReferencia);
      if (item.energiaEletricaValor && item.energiaEletricaSCEESemICMSValor) {
        consumoKwh.push(
          Number(item.energiaEletricaValor) +
            Number(item.energiaEletricaSCEESemICMSValor)
        );
      } else {
        consumoKwh.push(Number(item.energiaEletricaValor));
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
          id: "barConsumoEletricaValor",
          data: mesReferencia,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: energiaKwh,
          label: `Valor Total sem GD R$`,
        },
      ]}
      title="Valor Total sem GD R$"
      width={500}
      height={300}
    />
  );
};

export default BarChartFaturaValor;
