let sum = 0, i = 0, num = 0;

do{
    num = parseInt(prompt('Ingresa un número: '))
    if(isNaN(num))
        num = 0;
    else if(num >= 0){
        sum += num;
        i++;    
    }        
}while(num >= 0);

console.log('Suma = ' + sum)
console.log('Media = ' + (sum/i))