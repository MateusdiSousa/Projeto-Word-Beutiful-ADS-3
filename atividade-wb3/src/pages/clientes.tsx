import { Component, ReactNode } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

function Cliente() {
    return (
        <>
            <SideBar />
            <h1>Clientes</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Gênero</th>
                        <th>Data de Nascimento</th>
                        <th>Compras de Produtos</th>
                        <th>Compras de Serviços</th>
                        <th>
                            <Link to={'/clientes/cadastro'} className="btn-small transparent black-text">Cadastrar Cliente</Link>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Claudia de Carlos Braga</td>
                        <td>222.222.222-22</td>
                        <td>Feminino</td>
                        <td>07/02/1981</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/clientes/Editar'}><button>Editar</button></Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Mateus de Sousa Raimundo</td>
                        <td>333.333.333-33</td>
                        <td>Masculino</td>
                        <td>09/06/2004</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/clientes/Editar'}><button>Editar</button></Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Sergio álvaro de Almeida</td>
                        <td>444.444.444-44</td>
                        <td>Masculino</td>
                        <td>17/05/1998</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/clientes/Editar'}><button>Editar</button></Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Raissa Martins de Oliveira</td>
                        <td>555.555.555-55</td>
                        <td>Feminino</td>
                        <td>22/03/2003</td>
                        <td>$0.00</td>
                        <td>$0.00</td>
                        <td>
                            <Link to={'/clientes/Editar'}><button>Editar</button></Link>
                            <button onClick={() => alert('Deletado com sucesso')}>Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Cliente;