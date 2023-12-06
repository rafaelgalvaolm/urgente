import React, { useEffect } from 'react';
import './login.css';

const Login: React.FC = () => {

    useEffect(() => {
        document.body.classList.add('login-page')
    }, []);

  return (
    <div className="container">
        <div className="card_login">
            <div className="container_logo">
                <img className="logo" src="%PUBLIC_URL%/assets/img/SMKAS.png" alt="logo" />
            </div>
            <div className="container_inputs">
                <div className="input_login">
                    <input type="text" placeholder="usuario" id="Usuario" />
                </div>
                <div className="input_senha">
                    <input type="password" placeholder="senha" id="Senha" />
                </div>
            </div>
            <div className="container_botao">
                <button className="botao_login">Entrar</button>
            </div>
        </div>
    </div>
  );
};

export default Login;
