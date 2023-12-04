import { Component, ReactNode, useState, useEffect } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import clientesService from "../services/clientes.service";
import { ClienteI } from "../interfaces/clientes";

function Cliente() {
    const [clientes, setClientes] = useState<ClienteI[]>([])

    function getClientes() {
        clientesService.findAll().then(resp => {
            console.log(resp.data)
            setClientes(resp.data)
        }).catch(erro => console.log(erro))
    }

    useEffect(() => {
        getClientes()
    }, [])

    return (
        <>
            <SideBar />

            <h1>Clientes</h1>
            <Link to={'/clientes/cadastro'}><button className="waves-effect waves-light btn-small black-text transparent">Cadastrar Cliente</button></Link>

            {clientes && (
                clientes.map(cliente => {
                    return (
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="card panel">

                                    <div className="card-content white-text">
                                        <span className="card-title black-text">{cliente.nome}</span>
                                        <p className="black-text">Nome Social: {cliente.nomeSocial} </p>
                                        <p className="black-text">Genero: {cliente.genero} </p>
                                        <p className="black-text">CPF: {cliente.cpf} </p>
                                        <p className="black-text">Quantidade de Produtos Consumidos: {cliente.quantidade_produtos_consumidos} </p>
                                        <p className="black-text">Quantidade de Serviços Consumidos: {cliente.quantidade_servicos_consumidos} </p>
                                        <p className="black-text">Total gasto em produtos : R$ {cliente.total_gasto_produto} </p>
                                        <p className="black-text">Total gasto em servicos : R$ {cliente.total_gasto_servico} </p>
                                        <p className="black-text">Total gasto: R$ {cliente.total_gasto} </p>
                                        <p className="black-text">RGs:{cliente.rgs.map((rg) => {
                                            return (<li>{rg.numero}</li>)
                                        })}</p>
                                        <p className="black-text">Telefones: {cliente.telefones.map(telefone => {
                                            return( <li>({telefone.ddd}) {telefone.numero}</li> )
                                        })}</p>
                                    </div>

  

                                    {/* <div className="card-action">
                                        <Link to={`/clientes/editar/${cliente.id}`}><button className="waves-effect waves-light btn-small white-text blue">Editar</button></Link>
                                        <button className="waves-effect waves-light btn-small white-text red">Excluir</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                }))}
        </>
    );
}
export default Cliente;