//1°
//Calculate the sum of all resistors connected in series.
/*El método reduce es una función que nos ayuda a reducir una matriz a UN SOLO VALOR, los suma */

let resistencias = [1, 5, 6, 3]; 

let suma = resistencias.reduce((acumulador, resistencia) =>{return acumulador + resistencia;
}, 0); //El acumulador inicial será cero, de ahí parte para ir sumando progresivamente cada resistencia
console.log(`La suma de las resistencias es: ${suma} ohms!!`);

//2°
//Given a number, return the number divided into its halves in an array.

let numero = 21; //Defino el número 
let halves = [numero/2, numero/2]; //Divido el número en dos mitades y lo almaceno en un array [.,.]
console.log(`El número dividido en sus mitades es: [${halves}]`);//imprimo el resultado en pantalla

//3°
//Find the name of a secret society based on the first letter of each member's name.

let secretName = ["Bárbara", "Gabriela", "Emilio", "Angélica", "Gabriel"];

let sociedadSecreta = secretName.reduce((acumulador, nombre) => {//Se itera sobre cada nombre del array y en cada iteración se arranca la primera letra de cada nombre y se va agregando al acumulador (cadena vacia)
    return acumulador + nombre[0];
}, "");//inicializo con una cadena VACIA

console.log(`El nombre de la sociedad secreta es: ${sociedadSecreta}`);//Imprimo el resultado*/

//4°
//Display online status for a list of users.

function conectados(usuarios) { //defino mi función
    const cantidadUsuarios = usuarios.length; //Calculamos cuántos usuarios están en línea contando los elementos del array "users"
    if (cantidadUsuarios === 0) { 
        return 'Nadie está en línea.'; //si mi array está vacío
    } else if (cantidadUsuarios === 1) {
        return `${usuarios[0]} está en línea.`;//si tengo un elemento en un array
    } else if (cantidadUsuarios === 2) {
        return `${usuarios[0]} y ${usuarios[1]} están en línea.`;//Si cuento con dos elementos, muestros xnombre and x2nombre estan en línea"
     } else {
            return `${usuarios[0]}, ${usuarios[1]} y ${cantidadUsuarios - 2} más están en línea.`;// muestra hasta 3 nombres y la CANTIDAD de usuarios restantes.
    }
}

console.log(conectados(['user1', 'user2', 'user3', 'user4']));

//5°
//Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.


function multiplesofnumber(number, length) { //número al que obtendré los múltiplos y la longitud del array
    
    let multiples = []; //array vacío donde se almacenará los valores 
    for (let i = 1; i <= length; i++) { //Comenzamos con i igual a 1, i es una variable que utilizamos para contar las iteraciones del bucle.//El contador va a parar hasta llegar al límite de lenght
        multiples.push(number * i);// En cada iteración, multiplicamos number por i. 
    }
    return multiples;
}
console.log(multiplesofnumber(40, 10)); 

//6°
//Write a function to determine if an array is positively dominant. An array is positively dominant when the majority of its elements are positive.

function positivamenteDominante(valores) { 
    let cantidadPositiva = 0; //esta variable se usará para contar cuántos elementos en el array son positivos.
    for (let i = 0; i < valores.length; i++) { //se inicializa la variable en 0//El bucle seguirá ejecutándose mientras i sea menor que la longitud del array
        if (valores[i] > 0) { //se verifica si el npumero es positivo
            cantidadPositiva++; 
        }
    }
    return cantidadPositiva > valores.length / 2; //Despés del bucle veo si más de la mitad de mi array tiene valores positivos o negativos y así determino si es positivamente dominante o no el array. 
}           

console.log(positivamenteDominante([-1, -2, -3, 4, 5])); 

//7°
/*Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.*/

function antipodalAverage(arr) {

    if (arr.length % 2 !== 0) { // Si la longitud  es impar eliminamos el elemento del medio
        arr.splice(Math.floor(arr.length / 2), 1); //Al dividir la longitud del array por 2, obtenemos el punto medio del array.
    }//Math.floor() es una función que redondea el número y devuelve el mayor entero menor o igual a un número dado.
    let half = arr.length / 2;//calculamos la mitad del tamaño del array
    let firstPart = arr.slice(0, half);//hacemos la primera parte del array
    let secondPart = arr.slice(half).reverse();// hacemos la segunda parte del array y la invertimos
    let result = firstPart.map((num, index) => (num + secondPart[index]) / 2);//suma de las partes y se divide entre 2//map se usa para combinar y promediar los elementos de los arrays resultantes
    return result;
}
console.log(antipodalAverage([1, 2, 3, 4, 5]));






