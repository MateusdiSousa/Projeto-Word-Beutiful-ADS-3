export default class EnderecoDto {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    codigoPostal: number;
    informacoesAdicionais: string;
    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: number, codigoPostal: number, informacoesAdicionais: string);
}
