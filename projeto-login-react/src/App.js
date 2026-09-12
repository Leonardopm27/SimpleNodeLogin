import React, { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function validarLogin() {

    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
      setSucesso(true);
    } else {
      setMensagem('Usuário ou senha incorretos!');
      setSucesso(false);
    }

  }

  return (
    <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>

      <div className="container py-5 h-100">

        <div className="row d-flex justify-content-center align-items-center h-100">

          <div className="col-12 col-md-8 col-lg-6 col-xl-5">

            <div
              className="card shadow"
              style={{ borderRadius: '1rem' }}
            >

              <div className="card-body p-5 text-center">

                <h3 className="mb-5">
                  Login
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="E-mail"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Senha"
                    value={senha}
                    onChange={(evento) => setSenha(evento.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg w-100"
                  onClick={validarLogin}
                >
                  Acessar
                </button>

                {mensagem && (
                  <div
                    className={
                      sucesso
                        ? 'alert alert-success mt-4'
                        : 'alert alert-danger mt-4'
                    }
                  >
                    {mensagem}
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default App;
