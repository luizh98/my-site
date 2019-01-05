import React from 'react';
import { Link } from 'react-router-dom'

const Cabecalho = props => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to='/'>Inicio</Link>
                <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                            <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/portfolio' >Portfolio</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/sobre'>Sobre</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/contato'>Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Cabecalho