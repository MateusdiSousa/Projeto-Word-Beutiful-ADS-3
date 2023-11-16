import { Component } from 'react'
import SideBar from '../components/sidebar/sidebar'
import Combobox from "react-widgets/Combobox"
import NumberPicker from 'react-widgets/NumberPicker'


export class Vendas extends Component {


    render() {
        return (
            <>
                <SideBar />
                <div className='container'>
                    <h4>Processo de Venda</h4>
                    <div className='row'>
                        <div className='col s4 m3'>
                            <Combobox
                                placeholder='Cliente'
                                data={["Claudia", "Mateus", "Alicea", "Gerson"]}
                            />
                            <button className='btn-small amber lighten-1'>selecionar</button>
                        </div>
                        <div className='col s4 m3'>
                            <Combobox
                                placeholder='Serviços'
                                data={["Depilaçao", "Massagem", "Limpeza de Pele", "Manicure"]}
                            />
                            <button className='btn-small amber lighten-1'>adicionar</button>
                        </div>
                        <div className='col s4 m3'>
                            <Combobox
                                placeholder='Produtos'
                                data={["Hidratante", "Condicionador", "Shampoo", ""]}
                            />
                            <button className='btn-small amber lighten-1'>adicionar</button>
                        </div>
                    </div>


                    <div className='content-venda row'>
                        <h5>Produtos/Serviços</h5>

                        <table className='responsive-table striped'>
                            <thead>
                                <tr>
                                    <th>Nome do Produto/Serviço</th>
                                    <th>Quantidade</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>

                            <tbody >
                                <tr>
                                    <td>Massagem</td>
                                    <td ><NumberPicker defaultValue={1} className='col s2' /></td>
                                    <td>$90.87</td>
                                </tr>
                                <tr>
                                    <td>Creme de Barbear</td>
                                    <td><NumberPicker defaultValue={1} className='col s2' /></td>
                                    <td>$15.45</td>
                                </tr>
                                <tr>
                                    <td>Shampoo</td>
                                    <td><NumberPicker defaultValue={1} className='col s2 '  /></td>
                                    <td>$8.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='finalizar'>
                        <div className='preco-total'>
                            <h5>Preço Total: xxxx,xx</h5>
                        </div>

                        <button onClick={() => alert('Venda realizaada')} className='waves-effect waves-light btn yellow lighten-1 '>Finalizar Venda</button>
                    </div>

                </div>
            </>
        )
    }
}