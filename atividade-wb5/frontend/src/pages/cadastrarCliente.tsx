import { useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Cliente } from "../interfaces/clientes";
import clientesService from "../services/clientes.service";
import { Rg } from "../interfaces/rgs";
import { Telefone } from "../interfaces/telefones";
import DatePicker from "react-widgets/DatePicker";
import Combobox from "react-widgets/Combobox";

function CadastroCliente() {
    const [nome, setNome] = useState<string>('')
    const [nomesocial, setNomeSocial] = useState<string>('')
    const [genero, setGenero] = useState<string>('Outro')
    const [cpf, setCpf] = useState<string>('')

    const [rgs, setRgs] = useState<Rg[]>([])
    const [numeroRg, setNumeroRg] = useState<string>()
    const [dataEmissao, setDataEmissao] = useState<Date>()

    const [telefones, setTelefones] = useState<Telefone[]>([])
    const [ddd, setDdd] = useState<string>()
    const [numero, setNumero] = useState<string>()

    const nav = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const cliente: Cliente = {
            nome: nome,
            nomeSocial: nomesocial,
            genero: genero,
            cpf: cpf,
            rgs: rgs,
            dataCadastro: new Date(),
            telefones: telefones,
            quantidade_produtos_consumidos: 0,
            quantidade_servicos_consumidos: 0,
            total_gasto_produto: 0,
            total_gasto_servico: 0,
            total_gasto: 0,
        }

        clientesService.create(cliente).then(resp => {
            console.log(resp)
            nav('/clientes')
        })
    }

    function AdicionarRg(e) {
        e.preventDefault()
        const newRg: Rg = {
            numero: numeroRg,
            data_de_emissao: dataEmissao
        }
        setRgs([...rgs, newRg])
    }

    function AdicionarTelefone(e) {
        e.preventDefault()
        const newTelefone: Telefone = {
            ddd: ddd,
            numero: numero
        }
        setTelefones([...telefones, newTelefone])
    }

    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Cadastro de Cliente</h2>
                <div className="row">
                    <Link to={'/clientes'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>

                    <form action="">
                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={(e) => setNome(e.target.value)} id="first_name" type="text" className="validate"></input>
                                <label >Nome do Cliente</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={(e) => setNomeSocial(e.target.value)} id="social_name" type="text" className="validate"></input>
                                <label >Nome Social</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s5">
                                <Combobox
                                    placeholder="Gênero"
                                    data={["Feminino", "Masculino", "Outros"]}
                                    onChange={(e) => setGenero(e)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input className="validate" type="text" onChange={(e) => setCpf(e.target.value)} id="cpf"></input>
                                <label>CPF:</label>
                            </div>
                        </div>

                        <div className="row">
                            {rgs && (
                                <>
                                    {rgs.map((rg) => {
                                        return (
                                            <p>
                                                {rg.numero}
                                            </p>
                                        )
                                    })}
                                </>
                            )}
                        </div>

                        <div className="row">
                            <div className="input-field col s5">
                                <input className="validate" type="text" onChange={(e) => setNumeroRg(e.target.value)} id="rg"></input>
                                <label>Número do RG:</label>
                            </div>
                            <div className="input-field col s5">
                                <DatePicker placeholder="Data de Emissão do RG" className="validate" onChange={(e) => setDataEmissao(e)} id="rg"></DatePicker>
                            </div>
                            <div className="input-field col s10">
                                <button onClick={(e) => {
                                    AdicionarRg(e)
                                    console.log(rgs)
                                }}>
                                    Adicionar RG
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            {telefones && (
                                <>
                                    {telefones.map((telefone) => {
                                        return (
                                            <p>
                                                ({telefone.ddd}) {telefone.numero}
                                            </p>
                                        )
                                    })}
                                </>
                            )}
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input className="validate" type="text" onChange={(e) => setDdd(e.target.value)} id="telefone"></input>
                                <label>DDD: </label>
                            </div>
                            <div className="input-field col s10">
                                <input className="validate" type="text" onChange={(e) => setNumero(e.target.value)} id="telefone"></input>
                                <label>Telefone: </label>
                            </div>

                            <div className="input-field col s10">
                                <button onClick={(e) => {
                                    AdicionarTelefone(e)
                                    console.log(rgs)
                                }}>
                                    Adicionar Telefone
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <button onClick={handleSubmit} className="btn waves-effect waves-light yellow lighten-1" type="button" name="action">Cadastrar
                                <i className="material-icons right  ">send</i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default CadastroCliente;