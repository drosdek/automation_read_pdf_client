export interface IFatura {
  id: Number;
  numeroCliente: String;
  numeroInstalacao: String;
  mesReferencia: String;
  energiaEletricaQuantidade: String;
  energiaEletricaValor: String;
  energiaEletricaSCEESemICMSQuantidade: String;
  energiaEletricaSCEESemICMSValor: String;
  energiaEletricaSCEEIsentaQuantidade: String;
  energiaEletricaSCEEIsentaValor: String;
  energiaCompensadaGDIQuantidade: String;
  energiaCompensadaGDIValor: String;
  contribIlumPublicaMunicipalValor: String;
  energiaInjetadaHFPQuantidade: String;
  energiaInjetadaHFPValor: String;
  energiaCompSemICMSQuantidade: String;
  energiaCompSemICMSValor: String;
  vencimento: Date;
  valorPagar: String;
  createdAt: Date;
}
