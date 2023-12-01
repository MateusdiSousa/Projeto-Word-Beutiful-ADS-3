import { useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Cliente } from "../interfaces/clientes";
import clientesService from "../services/clientes.service";

interface telefone {
    numero: Number
}

function CadastroCliente() {
    const [nome, setNome] = useState<string>()
    const [nomesocial, setNomeSocial] = useState<string>()
    const [genero, setGenero] = useState<string>()
    const [cpf, setCpf] = useState<string>()
    const [rg, setRg] = useState<string>()
    const [dataCadastro, setDataCadastro] = useState<Date>()
    const [telefone, setTelefone] = useState<string>()

    const nav = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const cliente: Cliente = {
            nome: nome,
            nomeSocial: nomesocial,
            genero: genero,
            cpf: cpf,
            rg: rg,
            dataCadastro: new Date(),
            telefone: telefone,
            quantidade_produtos_consumidos: 0,
            quantidade_servicos_consumidos: 0,
            total_gasto_produto: 0,
            total_gasto_servico: 0,
            total_gasto: 0,
        }

        clientesService.create(cliente).then(resp => {
            console.log(resp.data)
            nav('clientes')
        })

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
                            <div className="input-field col s10">
                                <input onChange={(e) => setGenero(e.target.value)} id="genero" type="text" className="validate"></input>
                                <label >Gênero</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input className="validate" type="number" onChange={(e) => setCpf (e.target.value)} id="cpf"></input>
                                <label>CPF:</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input className="validate" type="number" onChange={(e) => setRg (e.target.value)} id="rg"></input>
                                <label>RG:</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                            <input className="validate" type="Date" onChange={(e) => setDataCadastro(new Date(e.target.value))} id="data_cadastro"></input>
                            <label>Data de Cadastro: </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                            <input className="validate" type="number" onChange={(e) => setTelefone(e.target.value)} id="telefone"></input>
                            <label>Telefone: </label>
                            </div>
                        </div>

                        <div className="row">
                            <button className="btn waves-effect waves-light yellow lighten-1" type="button" name="action">Cadastrar
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