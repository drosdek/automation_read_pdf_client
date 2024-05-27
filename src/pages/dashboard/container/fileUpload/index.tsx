import { useState } from "react";
import useFaturaApi from "../../hooks/useFaturaApi";
import { Button, Typography } from "@mui/material";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { extractFaturaData } = useFaturaApi();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const faturas = await extractFaturaData(selectedFile);
        console.log(faturas);
      } catch (error) {
        console.error("Erro ao extrair dados da fatura:", error);
      }
    }
  };

  return (
    <div>
      <Typography>Enviar uma fatura</Typography>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleFileUpload}>
        Enviar
      </Button>
    </div>
  );
}

export default FileUpload;
