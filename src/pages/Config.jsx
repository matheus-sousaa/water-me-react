import React from 'react';
import '../styles/config.css'
import { toast } from 'react-toastify';

function Config() {
  const formRef = React.useRef()
  
  function handlerSubmit() {
    event.preventDefault()
    console.log(event)
    const cupsNumber = event.target[0].value
    const cupsMl = event.target[1].value
    const periodNotification = event.target[2].value
    const config = {
      cupsNumber:cupsNumber,
      cupsMl:cupsMl,
      periodNotification:periodNotification
    }
    localStorage.setItem("config", JSON.stringify(config))
    formRef.current.reset()
    toast.success("Configurações salvas com sucesso!")
  }
  
  return <main id="config"> <header className="headerBar">
        <button onClick={() => window.history.back()} className="botaoVoltar"><img src="/assets/botao-voltar.svg"/></button>
        <img width="85px" src="/assets/logo-header.png"/>
      </header>
      <h1>Configurações</h1>
      <form onSubmit={handlerSubmit} ref={formRef}>
        <div id="configCopos">
          <p className="textoCopos">Quantos copos deseja tomar por dia?</p>
          <input required className="inputCopos" type="number" min="0" max="20"/>
          <p className="textoCopos">Quantos mililitros(ml) tem cada copo?</p>
          <input required className="inputCopos" type="number" min="0" max="5000" />
        </div>
        <h2>Notificações</h2>
        <p>Escolha em quais momentos do dia deseja receber lembretes para beber água:</p>
        <select required name="opcoesNotificacoe" id="notificacoes">
          <option value="Manhã">Manhã</option>
          <option value="Manhã, Tarde">Manhã, Tarde</option>
          <option value="Manhã, Tarde, Noite">Manhã, Tarde, Noite</option>
          <option value="Tarde">Tarde</option>
          <option value="Tarde, Noite">Tarde, Noit</option>
          <option value="Noite">Noite</option>
        </select>
        <footer className="configBar">
          <button type="submit">Salvar Configurações</button>
        </footer>
      </form>
    </main>
}

export default Config;