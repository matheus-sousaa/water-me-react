window.addEventListener('load', () => {
  const configDefined = localStorage.getItem("config")
  if (configDefined){
    const config = JSON.parse(configDefined)
    document.getElementById("cupsNumber").innerHTML = `${config.cupsNumber}`
    const fullCupList = document.querySelector("ul#fullCups")
    for (let i=0; i < config.cupsNumber; i++) {
      const cupElement = document.createElement("li")
      cupElement.innerHTML = `
      <img src="assets/copo-cheio.svg">
      `
      fullCupList.appendChild(cupElement)
    }
    const span = document.querySelector("div span")
    const plusButton = document.querySelector("div button#plusButton")
    const lessButton = document.querySelector("div button#lessButton")
    const emptyCupList = document.querySelector("ul#emptyCups")
    span.addEventListener("onchange", console.log)
    
    window.less = () => {
      span.innerHTML = +span.innerHTML > 0 ? +span.innerHTML - 1 : 0;
      
      if (+span.innerHTML === 0) {
        lessButton.setAttribute("disabled", true)
      }
      
      plusButton.removeAttribute("disabled", true)
      emptyCupList.removeChild(emptyCupList.firstChild)

      const cupElement = document.createElement("li")
      cupElement.innerHTML = `
      <img src="assets/copo-cheio.svg">
      `
      fullCupList.appendChild(cupElement)
    }
    
    window.plus = () => {
      span.innerHTML = +span.innerHTML >= 0 && +span.innerHTML < config.cupsNumber ? +span.innerHTML + 1 : 0;
      lessButton.removeAttribute("disabled", true)
      
        if (+span.innerHTML === +config.cupsNumber) {
        plusButton.setAttribute("disabled", true)
      }   
      
      const cupElement = document.createElement("li")
      cupElement.innerHTML = `
      <img src="assets/copo-vazio.svg">
      `
      emptyCupList.appendChild(cupElement)
      fullCupList.removeChild(fullCupList.firstChild)
    }

    function saveOnLocalStorage () {
      localStorage.setItem("drinkedCups", span.innerHTML)
      config.cupsNumber += 1
      localStorage.setItem("config", configDefined)
    }
  }
})