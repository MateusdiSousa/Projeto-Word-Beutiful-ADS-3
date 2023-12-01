import SideBar from "../components/sidebar/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import servicosService from "../services/servicos.service";
import { ServicoI } from "../interfaces/servicos";

function EditarServico() {
    const location = useLocation();
    const nav = useNavigate();
    const [nome, setNome] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [preco, setPreco] = useState<number>()
    const [servicoDTO, setServico] = useState<ServicoI>()

    useEffect(() => {
        const servico = location.state.key
        const setValues = () => {
            setNome(servico.nome)
            setDesc(servico.descricao)
            setPreco(servico.preco)
            setServico(servico)
        }

        setValues()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const novoObjeto : ServicoI = {
            id: servicoDTO.id,
            nome: nome,
            descricao: desc,
            preco: preco,
            quantidade_vendas: servicoDTO.quantidade_vendas,
            quantidade_vendas_masculino: servicoDTO.quantidade_vendas_masculino,
            quantidade_vendas_feminino: servicoDTO.quantidade_vendas_feminino,
            valor_total_vendas: servicoDTO.valor_total_vendas
        }

        await servicosService.update(novoObjeto).then( resp => {
            console.log(resp.data)
            nav('/servicos')
        })
        .catch( erro => console.log(erro))
    }
    console.log(servicoDTO)

    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Editar Serviço</h2>
                <div className="row">
                    <Link to={'/servicos'} className="btn-floating btn-small waves-effect waves-light transparent">
                        <i className="material-icons black-text">arrow_back</i>
                    </Link>

                    <form action="">
                        <div className="row">
                            <div className="input-field col s10">
                                <input value={nome} onChange={e => setNome(e.target.value)} id="first_name" type="text" className="validate"></input>
                                <label className="active" >Nome do Serviço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <div className="input-field col s10 ">
                                    <textarea value={desc} onChange={e => setDesc(e.target.value)} id="textarea1" className="materialize-textarea"></textarea>
                                    <label className="active" >Descrição do Serviço</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <input value={preco} onChange={e => setPreco(Number(e.target.value))} id="first_name" type="number" className="validate"></input>
                                <label className="active" >Preço do Serviço</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={(e) => handleSubmit(e)} className="btn waves-effect waves-light yellow lighten-1" type="submit" name="action">
                                Salvar
                                <i className="material-icons right  ">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditarServico;