import React, { useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import Combobox from "react-widgets/Combobox";
import DataPicker from "react-widgets/DatePicker";
import axios from "axios"

interface telefone {
    ddd: string
    numero: string
}

function CadastroCliente() {
    const [nome, setNome] = useState<string>()
    const [sobrenome, setSobrenome] = useState<string>()
    const [estado, setEstado] = useState<string>()
    const [cidade, setCidade] = useState<string>()
    const [bairro, setBairro] = useState<string>()
    const [rua, setRua] = useState<string>()
    const [numero, setNumero] = useState<number>()
    const [codigoPostal, setCodigoPostal] = useState<string>()
    const [informacoesAdicionais, setInformacoesAdicionais] = useState<string>()
    const [telefoneDTO, setTelefone] = useState<telefone[]>([])
    const [telefoneDDD, setTelefoneDDD] = useState<string>()
    const [telefoneNum, setTelefoneNum] = useState<string>()
    const [emailCliente, setEmailCliente] = useState<string>()

    const handleSend = () => {
        const clienteDTO = {
            nome: nome,
            sobreNome: sobrenome,
            endereco: {
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                numero: numero,
                codigoPostal: codigoPostal,
                informacoesAdicionais: informacoesAdicionais
            },
            telefones: telefoneDTO
        }
        axios.post('http://localhost:32832/cliente/cadastrar', clienteDTO)
            .then((resp) => {
                console.log('resposta do servidor: ' + resp.data)
            }).then(() => {
                alert('Cliente cadastrado com sucesso!')

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
                                <input onChange={(e) => setSobrenome(e.target.value)} id="middle_name" type="text" className="validate"></input>
                                <label >Sobrenome</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={(e) => setEmailCliente(e.target.value)} id="middle_name" type="email" className="validate"></input>
                                <label >Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <h5>Endereço</h5>
                            <div>
                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setEstado(e.target.value)} id="estado"></input>
                                    <label>Estado</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setCidade(e.target.value)} id="cidade"></input>
                                    <label>Cidade</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setBairro(e.target.value)} id="bairro"></input>
                                    <label>Bairro</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setRua(e.target.value)} id="rua"></input>
                                    <label>Rua</label>
                                </div>

                                <div className="input-field col s5">
                                    <input id="numero" className="validate" onChange={(e) => setNumero(e.target.valueAsNumber)} type="text"></input>
                                    <label>Número</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setCodigoPostal(e.target.value)} id="CEP"></input>
                                    <label>CEP</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" onChange={(e) => setInformacoesAdicionais(e.target.value)} id="informacoes_adicionais"></input>
                                    <label>Informacoes Adicionais</label>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <input className="validate" type="text" onChange={(e) => setTelefoneDDD(e.target.value)} />
                            <label>DDD</label>

                            <input className="validate" type="text" onChange={(e) => setTelefoneNum(e.target.value)} />
                            <label>Telefone</label>
                        </div>

                        <div className="row">

                            <button type="button" onClick={ () => {
                                    telefoneDTO.push({ ddd: telefoneDDD, numero: telefoneNum })
                                    alert('número adicionado')
                                }} className="btn waves-effect transparent black-text btn-small" >Adicionar numero</button>
                        </div>

                        <div className="row">
                            <button onClick={() => handleSend()} className="btn waves-effect waves-light yellow lighten-1" type="button" name="action">Cadastrar
                                <i className="material-icons right  ">send</i>
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}

export default CadastroCliente;