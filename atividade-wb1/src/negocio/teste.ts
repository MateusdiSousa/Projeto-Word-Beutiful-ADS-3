import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export class Teste {
    private servicos !: Array<Servico>;
    private produtos !: Array<Produto>;
    private clientes !: Array<Cliente>;

    constructor(servicos: Array<Servico>, produtos: Array<Produto>, clientes: Array<Cliente>) {
        this.servicos = servicos;
        this.produtos = produtos;
        this.clientes = clientes;
    }

    ContruirAmbiente() {
        // Clientes 
        this.clientes.push(new Cliente('Angelina', 'Ziraldo', new CPF('87233765626', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Bernardo', 'Yago', new CPF('66158113247', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Cecilia', 'Xerxes', new CPF('77513597901', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Daniel', 'Wilda', new CPF('52179724918', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Diana', 'Wilson', new CPF('12154974155', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Eric', 'Vitoria', new CPF('77753398024', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Fabiola', 'Ulisses', new CPF('33203424010', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Gabriel', 'Talita', new CPF('23572520061', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Helena', 'Theo', new CPF('81161508040', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Icaro', 'Samanta', new CPF('82191377033', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Juliana', 'Romulo', new CPF('52376507081', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Jean', 'Queila', new CPF('11836899009', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Karen', 'Pedro', new CPF('33851696077', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Luis', 'Olivia', new CPF('20294030085', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Monique', 'Nelson', new CPF('39387663019', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Natanael', 'Miriam', new CPF('01671415035', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Nicole', 'Leonardo', new CPF('28641837060', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Orlando', 'Kimberly', new CPF('26494158005', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Patricia', 'Joao', new CPF('96200240019', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Pietro', 'Isis', new CPF('66847450096', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Quenia', 'Henrique', new CPF('10970330073', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Ricardo', 'Gilda', new CPF('77607516050', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Sofia', 'Gustavo', new CPF('17064086093', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Thales', 'Fernanda', new CPF('17325679050', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Ursula', 'Enzo', new CPF('22586438051', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Vicente', 'Dalila', new CPF('29971566028', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Walesca', 'Cicero', new CPF('67342794058', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Xavier', 'Catarina', new CPF('78111707010', new Date()), 'Masculino',[],[]))
        this.clientes.push(new Cliente('Yara', 'Bruno', new CPF('91882130057', new Date()), 'Feminino',[],[]))
        this.clientes.push(new Cliente('Zacarias', 'Aline', new CPF('12448918007', new Date()), 'Masculino',[],[]))

        //Produtos
        this.produtos.push(new Produto('Esmalte Lilas','', 5))
        this.produtos.push(new Produto('Shampoo','', 4))
        this.produtos.push(new Produto('Condicionador','', 6))
        this.produtos.push(new Produto('Creme Hidratante','', 15))
        this.produtos.push(new Produto('Escova','', 17))
        this.produtos.push(new Produto('Pasta de Dente','', 20))
        this.produtos.push(new Produto('Fio Dental','', 10))
        this.produtos.push(new Produto('Agua Sanitaria','', 13))
        this.produtos.push(new Produto('Tinta para Cabelos','', 1))
        this.produtos.push(new Produto('Pente','', 5))
        this.produtos.push(new Produto('Tesoura','', 20))
        this.produtos.push(new Produto('Caderno','', 7))
        this.produtos.push(new Produto('Bolacha','', 80))
        this.produtos.push(new Produto('Caneta','', 35))
        this.produtos.push(new Produto('Lapis','', 15))
        this.produtos.push(new Produto('Borracha','', 2))
        this.produtos.push(new Produto('Cafe','', 3))
        this.produtos.push(new Produto('Leite Vegetal','', 3))
        this.produtos.push(new Produto('Fruta','', 25))
        this.produtos.push(new Produto('Kombucha','', 5))

        //Serviços
        this.servicos.push(new Servico('Lavar Roupa','', 30))
        this.servicos.push(new Servico('Passar Roupa','', 40))
        this.servicos.push(new Servico('Manicure','', 30))
        this.servicos.push(new Servico('Pedicure','', 40))
        this.servicos.push(new Servico('Massagem','', 100))
        this.servicos.push(new Servico('Depilação','', 45))
        this.servicos.push(new Servico('Cortar Cabelo','', 25))
        console.log("")
    }
}