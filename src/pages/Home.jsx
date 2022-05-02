import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/global.css'

function Home() {
  const navigate = useNavigate()
  const [buttonDisabled, setButtondDisabled] = React.useState(true)

  React.useEffect(() => {
    const configDefined = localStorage.getItem("config")
    if (configDefined) setButtondDisabled(false)
  }, [])

  return (
    <main id="home">
      <header className="headerBar">
          <img width="85px" src="/assets/logo-header.png"/>
        </header>
      <div className="diaProgresso">
        <h2>Hoje</h2>
        <button className="buttonDiaProgresso" disabled={buttonDisabled} onClick={()=>window.location.href = ('/dia')}>Falta muito para matar minha sede? <img src="/assets/seta-direita.svg"/> </button>
        <h3 id="barraProgresso">Progresso</h3>
      </div>
      <div className="diaProgresso">
        <h2>Ontem</h2>
        <button className="buttonDiaProgresso" disabled={buttonDisabled} onClick={()=>navigate('/dia')}>Quanto eu bebi? <img src="/assets/seta-direita.svg"/></button>
      </div>
      <div className="semanaProgresso">
        <h2>Semana</h2>
        <button onClick={()=>navigate('/dia')} disabled>"Calendário"</button>
      </div>
      <footer className="configBar">
      <button onClick={()=>navigate('/config')}>Configurações</button>
      </footer>;
    </main>
  );
}

export default Home;