'use strict'

window.addEventListener('load', ()=>{
    //TIMERS: setTimeOut: Ejecutar 1 vez. setInterval: Ejecutarse cada cierto tiemppo
    function interval(){
        let time = setInterval(function(){//Ejecutar cierto código, cada x segundos
            console.log('Set interval executed')
    
            let h1 = document.querySelector('h1')
            if(h1.style.fontSize == '50px')
                h1.style.fontSize = '20px'
            else
            h1.style.fontSize = '50px'
        }, 1000); //Parámetro del intervalo

        return time;
    }    

    let time = interval()
    
    //Stop button
    let stop = document.querySelector('#stop');
    stop.addEventListener('click', ()=>{
        clearInterval(time)
        console.log('Intervalo parado')
    })

    //Start button
    let start = document.querySelector('#start')
    start.addEventListener('click', ()=>{
        time = interval()
        console.log('Se ha inicidado el Timer')
    })
})
