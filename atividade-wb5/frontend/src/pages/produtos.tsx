import { Component, ReactNode, useEffect, useState } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import  EditarServico  from "./editarServico";
import { Produto } from "../interfaces/produtos";
import produtosService from "../services/produtos.service";

function TelaProduto() {
    const [produto, setProduto] = useState<Produto[]>()

    async function getProduto() {
        produtosService.findAll().then(resp => {
            setProduto(resp.data)
            console.log(resp.data)
        }).catch(erro => {
            console.log(erro)
        })
    }

    useEffect(() => { getProduto() }, [])

    return (
        <>
            <SideBar />
            <main>
                <h1>Produtos</h1>

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
                                <Link to={'/produtos/cadastro'} className="btn-small transparent black-text">
                                    Adicionar Produto
                                </Link>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {produto && (
                            produto.map((produto) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{produto.nome}</td>
                                            <td>{produto.descricao}</td>
                                            <td>${produto.preco.toFixed(2)}</td>
                                            <td>{produto.quantidade_vendas}</td>
                                            <td>${produto.valor_total_vendas}</td>
                                            <td>
                                                <Link to={'/produto/Editar'}>
                                                    <button>Editar</button>
                                                </Link>
                                                <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default TelaProduto;