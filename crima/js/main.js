window.onload = function () {
  

  
  const cidade       = document.querySelector('#busca')
  
 
 
 
  const btn           = document.querySelector('#btn-search')

  const modal         = document.querySelector('.teste')
  const information   = document.querySelector('.informacoes')
  
  btn.addEventListener('click',()=>{
     const city            = cidade.value;
     dados(city)
      
     
     modal.classList.add('show')
     information.classList.add('show1')
  })
}
const key            = "fd6cf2e59529bcef020b089f6027e56c"

async function dados(city){



  const nome         = document.querySelector('.cd')
  const temp         = document.querySelector('.p1')
  const previsao     = document.querySelector('.p2')

  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lag=pt-br`)
  .then(result => result.json());

  console.log(result)
 
   
 
    //cidades-informaçoes
    nome.textContent      = result.name
    temp.textContent      = result.main.temp
    previsao.textContent  = " gay "
}