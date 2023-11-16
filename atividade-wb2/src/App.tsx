import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Vendas } from './pages/vendas';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { TelaProduto } from './pages/produtos';
import { TelaServico } from './pages/servicos';
import { CadastroProduto } from './pages/cadastrarProduto';
import { CadastroServico } from './pages/cadastrarServico';
import { EditarProduto } from './pages/editarProduto';
import { EditarServico } from './pages/editarServico';
import 'react-widgets/styles.css';
import { ClientRequest } from 'http';
import { Cliente } from './pages/clientes';
import { CadastroCliente } from './pages/cadastrarCliente';
import { EditarCliente } from './pages/editarCliente';

class App extends React.Component {
  componentDidMount() {
    // Inicialize Materialize CSS
    M.AutoInit();
  }

  render() {

    return (
      <>
        <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </head>
        <Routes>
          <Route path='/' element={<Vendas />} />
          <Route path='/produtos' element={<TelaProduto />} />
          <Route path='/servicos' element={<TelaServico />} />
          <Route path='/clientes' element={<Cliente/>}/>
          <Route path='/produtos/cadastro' element={<CadastroProduto/>}/>
          <Route path='/servicos/cadastro' element={<CadastroServico/>}/>
          <Route path='/clientes/cadastro' element={<CadastroCliente/>}/>
          <Route path='/produtos/Editar' element={<EditarProduto/>}/>
          <Route path='/servicos/Editar' element={<EditarServico/>}/>
          <Route path='/clientes/Editar' element={<EditarCliente/>}/>
        </Routes >
      </>
    );
  }
}

export default App;
