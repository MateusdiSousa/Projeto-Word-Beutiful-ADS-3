import { Sidenav } from "materialize-css";
import { Component } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";

export class EditarServico extends Component {
    render() {
        return (
            <>
                <SideBar />
                <div className="container">
                    <h2>Editar Servico</h2>
                    <div className="row">
                        <Link to={'/servicos'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>


                        <form action="">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input id="first_name" type="text" className="validate"></input>
                                    <label >Nome do Serviço</label>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <div className="input-field col s10">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label >Descrição do Serviço</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10">
                                    <input id="first_name" type="number" className="validate"></input>
                                    <label >Preço do Serviço</label>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn waves-effect waves-light yellow lighten-1" type="submit" name="action">Salvar
                                    <i className="material-icons right  ">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}