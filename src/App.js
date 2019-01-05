import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/freelancer.css';

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Portfolio from './componentes/Portfolio'
import Sobre from './componentes/Sobre'
import Contato from './componentes/Contato'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Portfolio />
          <Sobre />
          <Contato />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
