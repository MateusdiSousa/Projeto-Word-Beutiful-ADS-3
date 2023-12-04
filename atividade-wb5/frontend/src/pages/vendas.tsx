import { Component } from 'react'
import SideBar from '../components/sidebar/sidebar'
import Combobox from "react-widgets/Combobox"
import NumberPicker from 'react-widgets/NumberPicker'
import { ServicoI, ServicoVenda } from '../interfaces/servicos'
import { useState } from 'react'
import { ProdutoI, ProdutoVenda } from '../interfaces/produtos'
import servicosService from '../services/servicos.service'
import produtosService from '../services/produtos.service'
import { useEffect } from 'react'
import { ClienteI } from '../interfaces/clientes'
import clientesService from '../services/clientes.service'
import serviceVendaProduto from '../services/venda.service'
import { resourceUsage } from 'process'


function Vendas() {
    const [clientesCombo, setClientesCombo] = useState<ClienteI[]>()
    const [servicosCombo, setServicoCombo] = useState<ServicoI[]>()
    const [produtosCombo, setProdutoCombo] = useState<ProdutoI[]>()

    const [servicoSelect, setServicoSelect] = useState<ServicoI>()
    const [produtoSelect, setProdutoSelect] = useState<ProdutoI>()
    const [clienteSelect, setClienteSelect] = useState<ClienteI>()

    const [produtos, setProduto] = useState<ProdutoVenda[]>([])
    const [servicos, setServico] = useState<ServicoVenda[]>([])
    const [valorTotal, setValorTotal] = useState<number>(0)



    async function addServicos() {
        const servico: ServicoVenda = {
            servico: servicoSelect,
            quantidade: 0,
            valor_total: 0,
            id: 0,
            cliente: undefined
        }
        if (servicos.some(item => item.servico.id == servico.servico.id)) {
            alert('Item já está na lista de compras')
        } else {
            setServico([...servicos, servico])
        }
    }

    async function addProdutos() {
        const produto: ProdutoVenda = {
            produto: produtoSelect,
            quantidade: 0,
            valor_total: 0,
            id: 0,
            cliente: undefined
        }
        if (produtos.some(item => item.produto.id == produto.produto.id)) {
            alert('Item já está na lista de compras')
        } else {
            setProduto([...produtos, produto])
        }
    }

    async function setValues() {
        await servicosService.findAll().then((resp) => {
            setServicoCombo(resp.data)
            console.log(resp.data)
        }).catch(erro => console.log(erro))

        await produtosService.findAll().then((resp) => {
            setProdutoCombo(resp.data)
            console.log(resp.data)
        }).catch(erro => console.log(erro))

        await clientesService.findAll().then((resp) => {
            setClientesCombo(resp.data)
            console.log(resp.data)
        }).catch(erro => console.log(erro))
    }

    async function venda() {
        if (produtos.length !== 0) {
            produtos.forEach(async venda => {
                const newVenda = venda
                newVenda.cliente = clienteSelect
                console.log(newVenda)
                await serviceVendaProduto.createProduto(newVenda).then(resp => {
                }).catch(erro => console.log(erro))
            });
        }
        if (servicos.length !== 0) {
            servicos.forEach(async venda => {
                const newVenda = venda
                newVenda.cliente = clienteSelect
                await serviceVendaProduto.createServico(newVenda).then(resp => {
                    console.log(resp.data)
                }).catch(erro => console.log(erro))
            });
        }

    }

    async function ComboBoxChangeServico(value) {
        const objeto = servicosCombo.find((item: ServicoI) => item.id === value.id)
        setServicoSelect(objeto)
    }

    async function ComboBoxChangeProduto(value) {
        const objeto = produtosCombo.find((item: ProdutoI) => item.id === value.id)
        setProdutoSelect(objeto)
    }

    async function ComboBoxChangeCliente(value) {
        const objeto = clientesCombo.find((item: ClienteI) => item.id === value.id)
        setClienteSelect(objeto)
    }

    async function ChangeValorTotalServico(idServico: string | undefined, value) {
        const newLista = servicos.map((data: ServicoVenda) => {
            if (data.servico.id == idServico) {
                console.log(value)
                return { ...data, quantidade: value, valor_total: data.servico.preco * value }
            }
            return data
        })
        console.log(newLista)
        setServico(newLista)

        ChangeValorTotal(newLista, produtos)
    }

    async function ChangeValorTotalProduto(idProduto: string | undefined, value) {
        const newLista = produtos.map((produto) => {
            if (produto.produto.id === idProduto) {
                console.log(value)
                return { ...produto, quantidade: value, valor_total: produto.produto.preco * value }
            }
            return produto
        })
        console.log(newLista)
        setProduto(newLista)

        ChangeValorTotal(servicos, newLista)
    }

    async function ChangeValorTotal(servicos: ServicoVenda[], produtos: ProdutoVenda[]) {
        const valorServicos = servicos.reduce((acumulador, servico) => {
            console.log(`${servico.servico.nome}: ${servico.valor_total}`)
            return acumulador + servico.valor_total
        }, 0)

        const valorProdutos = produtos.reduce((acumulador, produto) => {
            return acumulador + produto.valor_total
        }, 0)

        console.log(valorServicos)

        setValorTotal(valorProdutos + valorServicos)
    }

    useEffect(() => {
        setValues()
    }, [])

    return (
        <>
            <SideBar />
            <div className='container'>
                <h4>Processo de Venda</h4>
                <div className='row'>
                    <div className='col s4 m3'>
                        <Combobox
                            placeholder='Cliente'
                            data={clientesCombo}
                            textField={'nome'}
                            dataKey={'id'}
                            onChange={valor => ComboBoxChangeCliente(valor)}
                        />
                    </div>
                    <div className='col s4 m3'>
                        <Combobox
                            placeholder='Serviços'
                            data={servicosCombo}
                            textField={'nome'}
                            dataKey={'id'}
                            onChange={valor => ComboBoxChangeServico(valor)}
                        />
                        <button onClick={() => addServicos()} className='btn-small amber lighten-1'>adicionar</button>
                    </div>
                    <div className='col s4 m3'>
                        <Combobox
                            placeholder='Produtos'
                            data={produtosCombo}
                            textField={'nome'}
                            dataKey={'id'}
                            onChange={valor => ComboBoxChangeProduto(valor)}
                        />
                        <button onClick={() => addProdutos()} className='btn-small amber lighten-1'>adicionar</button>
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

                            {servicos && (
                                servicos.map(servico => {
                                    return (
                                        <tr>
                                            <td>{servico.servico.nome}</td>
                                            <td><NumberPicker
                                                onChange={(value) => {
                                                    ChangeValorTotalServico(servico.servico.id, value)
                                                }}
                                                min={0}
                                                className='col s2 ' /></td>
                                            <td>R$ {servico.servico.preco.toFixed(2)}</td>
                                        </tr>
                                    )
                                })
                            )}

                            {produtos && (
                                produtos.map(produto => {
                                    return (
                                        <tr>
                                            <td>{produto.produto.nome}</td>
                                            <td><NumberPicker
                                                onChange={(value) => {
                                                    ChangeValorTotalProduto(produto.produto.id, value)
                                                }}
                                                min={0}
                                                defaultValue={0} className='col s2 ' /></td>
                                            <td>R$ {produto.produto.preco.toFixed(2)}</td>
                                        </tr>
                                    )
                                })
                            )}
                            {/* <tr>
                                <td>Shampoo</td>
                                <td><NumberPicker defaultValue={1} className='col s2 '  /></td>
                                <td>$8.00</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

                <div className='finalizar'>
                    <div className='preco-total'>
                        <h5>Preço Total: R$ {valorTotal.toFixed(2)}</h5>
                    </div>

                    <button onClick={() => venda()} className='waves-effect waves-light btn yellow lighten-1 '>Finalizar Venda</button>
                </div>

            </div>
        </>
    );
}

export default Vendas;