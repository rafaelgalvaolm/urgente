import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/login/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={
            <div className="container-geral" >
              <div className='container-esquerdo'>
                <div className="container-logo">
                  <img className="logo" src="%PUBLIC_URL%/assets/img/SMKAS.png" alt="logo" />
                </div>
                <div className='container-relogio'>
                  <div className='aprensentacao'>
                    <h1>Olá, '{'nome'}'</h1>
                  </div>
                  <div className='relogio'>
                    <div className='borda'>
                      <div className='relogio'>
                        <h1>00:00</h1>
                      </div>
                      <div className='container-input'>
                        <div className='input-senha-diaria'>
                          <input type='text' className='input-senha' />
                        </div>
                        <div className='botao-senha'>
                          <button className='enviar-senha'>Enviar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='status-emp'>
                    <div className='status-internet'>
                      <h3>status: '{'Online'}'</h3>
                    </div>
                    <div className='empreendimento'>
                      <h3>'{'empreendimento'}'</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container-direito'>
                <div className='container-ocorrencia'>
                  <div className='ocorrencia'>
                    <h3>Últimas Ocorrências</h3>
                  </div>
                  <div className='borda'>
                    <div className='central-ocorrencia'>
                      <h2>Aqui ficarão as ocorrencias</h2>
                    </div>
                  </div>
                </div>
                <div className='container-posicionamento'>
                  <div className='posicionamento'>
                    <h3>Último Posicionamento</h3>
                  </div>
                  <div className='borda'>
                    <div className='central-posicionamento'>
                      <h2>Aqui ficarão os posicionamentos</h2>
                    </div>
                  </div>
                </div>
                <div className='container-botao'>
                  <button className='botao-sair'>Sair</button>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
