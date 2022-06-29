const anoNovo = '1 Jan 2023'

const diasEl = document.getElementById('dias')
const horasEl = document.getElementById('horas')
const minEl = document.getElementById('minutos')
const segEl = document.getElementById('segundos')

function countdown() {
    const dataAnoNovo = new Date(anoNovo)
    const dataAtual = new Date()

    const segundosTotais = (dataAnoNovo - dataAtual) / 1000

    const dias = Math.floor(segundosTotais / 3600 / 24)
    const horas = Math.floor(segundosTotais / 3600) % 24
    const minutos = Math.floor(segundosTotais / 60) % 60
    const segundos = Math.floor(segundosTotais) % 60

    console.log(dias)
    diasEl.innerHTML = dias 
    horasEl.innerHTML = formatTime(horas) 
    minEl.innerHTML = formatTime(minutos) 
    segEl.innerHTML = formatTime(segundos)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown, 1000)