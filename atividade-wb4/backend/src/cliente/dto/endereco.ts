export default class EnderecoDto {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
  codigoPostal: number;
  informacoesAdicionais: string;

  constructor(
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: number,
    codigoPostal: number,
    informacoesAdicionais: string,
  ) {
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;

    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.informacoesAdicionais = informacoesAdicionais;
  }
}
