'use strict'
//BOM: Browser Object Model
//Conocer características del navegador, ventanta, etc.
//Todo lo que hace el navegador web, se puede hacer desde Javascript
function getSize(){
    console.log('window: '+window.innerHeight)
    console.log('window: '+window.innerWidth)
    console.log('screen: '+screen.height) //Tamaño total
    console.log('screen: '+screen.width)
    console.log(window.location) //Obtener todo lo de la url
    console.log(window.location.href)

}

function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url, '', 'width=400,height=300')
}

getSize();
//redirect('http://google.com')
