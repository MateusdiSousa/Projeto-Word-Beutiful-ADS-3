import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vendas from './pages/vendas';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import TelaProduto from './pages/produtos';
import TelaServico from './pages/servicos';
import CadastroProduto from './pages/cadastrarProduto';
import CadastroServico from './pages/cadastrarServico';
import EditarProduto from './pages/editarProduto';
import EditarServico from './pages/editarServico';
import 'react-widgets/styles.css';
import Cliente from './pages/clientes';
import CadastroCliente from './pages/cadastrarCliente';
import EditarCliente from './pages/editarCliente';

function App() {
  useEffect(() => {
    // Inicialize Materialize CSS
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vendas />} />
        <Route path='/produtos' element={<TelaProduto />} />
        <Route path='/servicos' element={<TelaServico />} />
        <Route path='/clientes' element={<Cliente />} />
        <Route path='/produtos/cadastro' element={<CadastroProduto />} />
        <Route path='/servicos/cadastro' element={<CadastroServico />} />
        <Route path='/clientes/cadastro' element={<CadastroCliente />} />
        <Route path='/produtos/Editar' element={<EditarProduto />} />
        <Route path='/servicos/Editar' element={<EditarServico />} />
        <Route path='/clientes/Editar' element={<EditarCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
