const cuadrados = document.querySelectorAll('.cuadrado')
const topos = document.querySelector('.topo')
const tiempoDisponible = document.querySelector('#tiempoRestante')
const puntaje = document.querySelector('#puntaje')

let resultado = 0
let posicionGolpeo
let tiempoActual = 60
let tiempoId = null

function cuadradoAzar(){
    cuadrados.forEach(cuadradito => {
        cuadradito.classList.remove('topo')
    })

    let posicionAzar = cuadrados[Math.floor(Math.random()*16)]
    posicionAzar.classList.add('topo')
    posicionGolpeo = posicionAzar.id
}

cuadrados.forEach(cuadradito => {
    cuadradito.addEventListener('mousedown', () => {
        if(cuadradito.id == posicionGolpeo){
            resultado++
            puntaje.textContent = resultado
            posicionGolpeo = null
        }
    })
})

function cuentaRegresiva(){
    tiempoActual--
    tiempoDisponible.textContent = tiempoActual

    if(tiempoActual == 0){
        clearInterval(cuentaRegresivaCronometroId)
        clearInterval(tiempoId)
        alert('Fin del juego se acabo el tiempo, su puntaje fue de: ' + resultado)        
    }
}

function moverTopo(){
    tiempoId = setInterval(cuadradoAzar, 600)
}

moverTopo()

let cuentaRegresivaCronometroId = setInterval(cuentaRegresiva, 1000)