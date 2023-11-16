import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Vendas } from '../../pages/vendas';

class SideBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="nav-wrapper yellow lighten-1">
                        <a href="/" className="brand-logo">World Beautiful</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to={'/'}>Venda</Link></li>
                            <li><Link to={'/servicos'}>Servicos</Link></li>
                            <li><Link to={'/produtos'}>Produtos</Link></li>
                            <li><Link to={'/clientes'}>Clientes</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
};

export default SideBar;