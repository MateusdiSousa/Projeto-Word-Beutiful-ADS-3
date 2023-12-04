import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, redirect, redirectDocument, useLocation, useNavigate, useParams } from "react-router-dom";
import { ClienteI } from "../interfaces/clientes";
import { Telefone, TelefoneI } from "../interfaces/telefones";
import { Combobox } from "react-widgets/cjs";



function EditarCliente() {
    const [nome, setNome] = useState<string>('')
    const [nomeSocial, setNomeSocial] = useState<string>('')
    const [genero, setGenero] = useState<string>('')
    const [cpf, setCPF] = useState<string>('')

    const [telefones, setTelefones] = useState([])
    const [ddd, setDdd] = useState<string>()
    const [numero, setNumero] = useState<string>()

    const [numeroRg, setNumeroRg] = useState<string>()
    const [dataEmissao, setDataEmissao] = useState<Date>()

    const nav = useNavigate()
    const location = useLocation()

    useEffect(
        () => {
            const cliente = location.state.key
            setNome(cliente.nome)
            setNomeSocial(cliente.nomeSocial)
            setGenero(cliente.genero)
            setCPF(cliente.cpf)
            setTelefones(cliente.telefones)
        }
        , []
    )


    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Editar Cliente</h2>
                    <div className="row">
                        <Link to={'/clientes'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>

                        <form action="">
                        <div className="row">
                            <div className="input-field col s10">
                                <input value={nome} id="first_name" onChange={e => {setNome(e.target.value)}} type="text" className="validate"></input>
                                <label className="active">Nome do Cliente</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={e => {setNomeSocial(e.target.value)}} value={nomeSocial} id="social_name" type="text" className="validate"></input>
                                <label className="active">Nome Social</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s5">
                                <Combobox
                                    value={genero}
                                    placeholder="Gênero"
                                    data={["Feminino", "Masculino", "Outros"]}
                                    onChange={e => {setGenero(e)}}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={e => {setCPF(e.target.value)}} value={cpf} className="validate" type="text"  id="cpf"></input>
                                <label className="active">CPF:</label>
                            </div>
                        </div>
                            <h5>Telefones: </h5>
                            {telefones.map(telefone => {
                                return (
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <input value={telefone.ddd} className="validate" type="text" />
                                            <label className="active">DDD</label>
                                        </div>

                                        <div className="input-field col s5">
                                            <input value={telefone.numero} className="validate" type="text" />
                                            <label className="active">Telefone</label>
                                        </div>

                                        <div className="input-field col s2">
                                            <button  className="btn-small red white-text">Excluir telefone</button>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="row">
                                <h5>Adicionar Telefone</h5>
                                <div className="input-field col s5">
                                    <input className="validate" type="text" />
                                    <label className="active">DDD</label>
                                </div>

                                <div className="input-field col s5">
                                    <input className="validate" type="text" />
                                    <label className="active">Telefone</label>
                                </div>

                                <div className="input-field col s5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                        }}
                                        className="btn waves-effect transparent black-text btn-small" >Adicionar numero
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <button onClick={() => {
                                }
                                } className="btn waves-effect waves-light yellow lighten-1" type="button" name="action">Atualizar
                                    <i className="material-icons right  ">send</i>
                                </button>
                            </div>
                        </form>
                    </div >
            </div >
        </>
    );
}

export default EditarCliente;