import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default abstract class Comprar{
    public abstract comprar(ProdutoServico): void;
}