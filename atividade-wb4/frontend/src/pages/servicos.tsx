import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

function TelaServico() {
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
                    <tr>
                        <td>Depilação</td>
                        <td>Depilação muito boa</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Manicure</td>
                        <td>Manicure muito boa</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Limpeza de pele</td>
                        <td>Limpeza muito boa</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Pintura de Cabelo</td>
                        <td>Uma tinta muito boa</td>
                        <td>$80.25</td>
                        <td>0</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/servicos/Editar'}>
                                <button>Editar</button>
                            </Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default TelaServico;