import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { Servico, ServicoI } from "../interfaces/servicos";
import servicosService from "../services/servicos.service";

function TelaServico() {
    const [servicos, setServico] = useState<ServicoI[]>()
    const nav = useNavigate()

    async function getServicos() {
        servicosService.findAll().then(resp => {
            setServico(resp.data)
            console.log(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }

    useEffect(() => { getServicos() }, [])

    const redirectoEdit = (servico) => {
        nav("/servicos/Editar", { state: { key: servico } })
    }

    async function deleteServico(id: string | undefined) {

        await servicosService.delete(id).then(resp => {
            getServicos()
        }).catch(erro => {
            console.log(erro)
        })

    }
    return (
        <>
            <SideBar />
            <h1>Serviços</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade vendida</th>
                        <th>Valor total em vendas</th>
                        <th>Opções</th>
                        <th>
                            <Link to={'/servicos/cadastro'} className="btn-small transparent black-text">
                                Adicionar Serviço
                            </Link>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {servicos && (
                        servicos.map((servico) => {
                            return (
                                <>
                                    <tr>
                                        <td>{servico.nome}</td>
                                        <td>{servico.descricao}</td>
                                        <td>${servico.preco.toFixed(2)}</td>
                                        <td>{servico.quantidade_vendas}</td>
                                        <td>${servico.valor_total_vendas}</td>
                                        <td>
                                            <button onClick={() => { redirectoEdit(servico) }}>Editar</button>
                                            <button onClick={() => {
                                                let confi = window.confirm('Você deseja realmente deletar esse servico')
                                                if (confi) {
                                                    deleteServico(servico.id)
                                                }
                                            }
                                            }>Deletar</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    )}


                </tbody>
            </table>
        </>
    );
}

export default TelaServico;