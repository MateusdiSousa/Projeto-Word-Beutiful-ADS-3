import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, redirect, redirectDocument, useNavigate, useParams } from "react-router-dom";
import Combobox from "react-widgets/Combobox";
import DataPicker from "react-widgets/DatePicker";
import axios from "axios"
import { ClienteI } from "../interfaces/clientes";
import { Telefone, TelefoneI } from "../interfaces/telefones";

interface clienteId {
    id: number
}
interface addTelefone {
    ddd: string
    numero: string
}

function EditarCliente() {
    const [cliente, setCliente] = useState<ClienteI>()
    const [ddd, setDDD] = useState<string>('')
    const [telefoneNumero, setTelefoneNumero] = useState<string>('')
    const { id } = useParams()
    const navigate = useNavigate()

    const getClienteId = () => {
        fetch(`http://localhost:32832/cliente/${id}`).then(resp => resp.json())
            .then(data => {
                setCliente(data)
                console.log('cliente')
                console.log(data)
            }).catch(erro => {
                console.log(erro)
            })
    }

    const removeTelefone = (telefoneRemovido, event) => {
        event.preventDefault();

        const index = cliente.telefones.indexOf(telefoneRemovido)

        console.log(index)

        const newTelefones = [...cliente.telefones]

        newTelefones.splice(index, 1)

        console.log(newTelefones)

        setCliente({ ...cliente, telefones: newTelefones })
    }

    const adicionaNumero = () => {
        const newTelefone: TelefoneI = {
            id: null,
            ddd: ddd,
            numero: telefoneNumero,
        }


        const novosTelefones = [...cliente.telefones, newTelefone]
        console.log(novosTelefones)
        setCliente({ ...cliente, telefones: novosTelefones })
    }

    const atualizarCliente = () => {
        fetch('http://localhost:32832/cliente/atualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then((resp) => console.log(resp))
        navigate('/clientes')
        window.location.reload();
    }

    useEffect(
        () => getClienteId()
        , []
    )


    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Editar Cliente</h2>
                {cliente && (
                    <div className="row">
                        <Link to={'/clientes'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>

                        <form action="">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input
                                        value={cliente.nome}
                                        placeholder="PlaceHolder"
                                        id="first_name"
                                        type="text"
                                        className="validate"
                                        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}>
                                    </input>
                                    <label className="active">Nome do Cliente</label>
                                </div>
                            </div>



                            <h5>Telefones: </h5>
                            {cliente.telefones.map(telefone => {
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
                                            <button onClick={(e) => removeTelefone(telefone, e)} className="btn-small red white-text">Excluir telefone</button>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="row">
                                <h5>Adicionar Telefone</h5>
                                <div className="input-field col s5">
                                    <input onChange={(e) => setDDD(e.target.value)} className="validate" type="text" />
                                    <label className="active">DDD</label>
                                </div>

                                <div className="input-field col s5">
                                    <input onChange={(e) => setTelefoneNumero(e.target.value)} className="validate" type="text" />
                                    <label className="active">Telefone</label>
                                </div>

                                <div className="input-field col s5">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            adicionaNumero()
                                            console.log(cliente.telefones)
                                            alert('número adicionado')
                                        }}
                                        className="btn waves-effect transparent black-text btn-small" >Adicionar numero
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <button onClick={() => {
                                    atualizarCliente()
                                }
                                } className="btn waves-effect waves-light yellow lighten-1" type="button" name="action">Atualizar
                                    <i className="material-icons right  ">send</i>
                                </button>
                            </div>
                        </form>
                    </div >
                )}
            </div >
        </>
    );
}

export default EditarCliente;