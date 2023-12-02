import SideBar from "../components/sidebar/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Servico } from "../interfaces/servicos";
import servicosService from "../services/servicos.service";

function CadastroServico() {
    const [nome, setNome] = useState<string>()
    const [desc, setDesc] = useState<string>()
    const [preco, setPreco] = useState<number>()

    const nav = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const servico: Servico = {
            nome: nome,
            descricao: desc,
            preco: preco,
            quantidade_vendas: 0,
            quantidade_vendas_masculino: 0,
            quantidade_vendas_feminino: 0,
            valor_total_vendas: 0
        }

        servicosService.post(servico).then( resp => {
            console.log(resp.data)
            nav('/servicos')
        })
    }

    return (
        <>
            <SideBar />
            <div className="container">
                <h2>Cadastro de Serviço</h2>
                <div className="row">
                    <Link to={'/servicos'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>

                    <form action="">
                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={(e) => setNome(e.target.value)} id="first_name" type="text" className="validate"></input>
                                <label >Nome do Serviço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <div className="input-field col s10">
                                    <textarea onChange={(e) => setDesc(e.target.value)} id="textarea1" className="materialize-textarea"></textarea>
                                    <label >Descrição do Serviço</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10">
                                <input onChange={(e) => setPreco(parseFloat(e.target.value))} id="preco" type="number" className="validate"></input>
                                <label >Preço do Serviço</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={(e) => handleSubmit(e)} className="btn waves-effect waves-light yellow lighten-1" type="submit" name="action">Cadastrar
                                <i className="material-icons right  ">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadastroServico;