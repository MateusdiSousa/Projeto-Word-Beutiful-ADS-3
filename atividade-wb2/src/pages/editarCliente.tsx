import { Sidenav } from "materialize-css";
import { Component } from "react";
import SideBar from "../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import Combobox from "react-widgets/Combobox"
import DataPicker from "react-widgets/DatePicker"


export class EditarCliente extends Component {
    render() {
        return (
            <>
                <SideBar />
                <div className="container">
                    <h2>Editar Cliente</h2>
                    <div className="row">
                        <Link to={'/clientes'} className="btn-floating btn-small waves-effect waves-light transparent"><i className="material-icons black-text">arrow_back</i></Link>


                        <form action="">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input  id="first_name" type="text" className="validate"></input>
                                    <label >Nome do Cliente</label>
                                </div>
                            </div>
                            <div className="row">
                                <div>
                                    <div className="input-field col s10">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label>Endereço</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s10">
                                    <input id="CPF" type="number" className="validate"></input>
                                    <label >CPF</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="">
                                    <div className="input-field col s2">
                                        <Combobox placeholder="Gênero" data={['Feminino','Masculino', 'Outro']}/>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="input-field col s2 ">
                                        <DataPicker placeholder="Data de nascimento"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <button className="btn waves-effect waves-light yellow lighten-1" type="submit" name="action">Cadastrar
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