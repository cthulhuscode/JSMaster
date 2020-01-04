let bicycle = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    maxSpeed: '60 km/h',
    cambiaColor: function(color){
        this.color = color;
    }
};

console.log(bicycle);
bicycle.cambiaColor('Azul');

