import React from 'react';
import '../styles/paginaDia.css'

function Dia() {
  const [cupQuantity, setCupQuantity] = React.useState(0)
  const [drinkedQuantity, setDrinkedQuantity] = React.useState(0)
  
  function less() {
    setDrinkedQuantity(prev => prev > 0 ? prev - 1: 0)
  }

  function plus() {
    setDrinkedQuantity(prev => prev >= 0 && prev < cupQuantity ? prev + 1: 0)
  }

  React.useEffect(() => {
    const configDefined = localStorage.getItem("config")
    if (configDefined){
      const config = JSON.parse(configDefined)
      setCupQuantity(+config.cupsNumber)
    }
  }, [])
  
  return <main id="dia"><header className="headerBar">
        <button onClick={() => window.history.back()} className="botaoVoltar"><img src="/assets/botao-voltar.svg"/></button>
        <img width="85px" src="/assets/logo-header.png"/>
      </header>
      <h1>Hoje</h1>
      <p>Faltam tomar <span id="cupsNumber">{cupQuantity-drinkedQuantity}</span> copos hoje:</p>
      <div className="allCups">
        <ul id="fullCups">
          {(new Array(cupQuantity-drinkedQuantity).fill(cupQuantity)).map(item => <img src="./assets/copo-cheio.svg" />)}
        </ul>
      </div>
      <p>Você já tomou <span id="cupsNumber">{drinkedQuantity}</span> copos hoje:</p>
      <div className="allCups">
        <CupsList id="emptyCups" quantity={drinkedQuantity}  />
      <ul id="emptyCups">
        {(new Array(drinkedQuantity).fill(drinkedQuantity)).map(item => <img src="./assets/copo-vazio.svg" />)}
      </ul>
      </div>
      <div id="buttonDiv">
        <button onClick={less} id="lessButton" disabled={drinkedQuantity === 0}>-</button>
        <span>{drinkedQuantity}</span>
        <button onClick={plus} id="plusButton" disabled={+cupQuantity === +drinkedQuantity}>+</button>
      </div>
   </main>
}

export default Dia;