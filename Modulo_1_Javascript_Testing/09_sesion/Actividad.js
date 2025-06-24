export function sumar(a,b){    
    return a+b;

}
//Aplicando algoritmo de resta sin usar operador de resta
export function restar(a,b){
    let value;
    if(!(a>b)){
        value = a;
        a = b;
        b = value;
    }
    value = 0
    while(a>b){
        b++;
        value++;
    }
    return value;

}

//Aplicando algoritmo de multiplicacion sin usar operador de multiplicacion
export function multiplicar(a,b){
    let value = 0;    
    
    while(a){
        value += b;
        a--;
    }

    return value;
}
export function dividir(a,b){
    let value = 0;
    if(a<b || (a===0) || (b===0)){
        return 0;
    }else if(a===b){
        return 1;
    } else if(b===0){
        return "No se puede dividir entre 0";
    }
    while(a>=b){
        a-=b;
        value++;
    }
    return value;
}
//Aplicando algoritmo de potencia sin usar operador de potencia
//Mutilplicamos el numero en value por si mismo tantas veces como el exponente value toma el valor princi
export function potencia(a,b){
    let value = 1;
    while (b){
        value *= a;
        b--;
    }
    return value;
}