const MathModule = (function(){
    //variables privadas
    const PI = 3.1416;

    //funcion Privada
    function cuadrado(x){
        return x*x;        
    }

    return{
        areaCirculo(radio){
            return PI * cuadrado(radio);
        },
        suma(a,b){
            return a+b;
        }
    }
})();

console.log(MathModule.areaCirculo(2));
console.log(MathModule.suma(4,9));

