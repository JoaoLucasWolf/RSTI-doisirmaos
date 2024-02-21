// silence is golden


/*
var nome = prompt("escreva seu nome");
var cor = prompt("escreva sua cor preferida");

var frase = "A cor favorita de " + nome + " é " + cor + "."

console.log(frase);
*/


/*
        exercicio 1
var frase2 = prompt("escreva uma frase");
    console.log(frase2.toLocaleUpperCase());
    console.log(frase2.replaceAll("o", "i"));
    console.log(frase2.length);*/



/*
const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2] //Tomate
*/


/*
        exercicio 2
var listaDeCachorros = ["Border Collie","Rottweiler","Pastor Alemão","Dogue Alemão","Golden Retriever"];
var escolha = prompt("escolha um numero de 0 a 4");

    console.log(listaDeCachorros[escolha]);
*/


/*
            exercicio 3
 var array = ["a", "b", "c", "d", "e", "f", "g", "h"];
//            [0,   1,   2,   3,   4,   5,   6,   7];

    array.splice(3,1);
    console.log(array);
*/

//exercicio 4 

/*
const array = ["0", "1", "2", "3", "4", "5", "6"];

    console.log(array.length)
    console.log(array.push("7"));
    console.log(array.splice(3,2));
    console.log(array);
    */


/*    
    const altura = 2 ;
    const largura = 3;
    const area = altura * largura;
    console.log(area); //6 
*/


/*
function calculaArea(altura, largura){
    const area = altura * largura 
    console.log(area)
    }
    calculaArea(2,3)
*/

/*
function impreimirOlaMundo(){
        console.log("Ola Mundo");
}
    impreimirOlaMundo(); // <--função sendo chamada 
*/

/*
function funcaoNome(nome){
    
    console.log(`Ola ${nome}`);
    }
    
funcaoNome("nome"); // <--função sendo chamada
funcaoNome("joao");
funcaoNome("Ana");
funcaoNome("Gabriel");
*/

//FUNÇÕES 2
/*
const a = 1;

function imprimevariavel(){
    const b = 2;
    console.log('variavel a', a);
    console.log('variavel b', b);
    }

    imprimevariavel()

    console.log('variavel a', a);
    console.log('variavel b', b);
*/

/*
function calculaArea(altura, largura){
    const area= altura * largura;
        return area;
        } 

const areaCalculada= calculaArea(2,3);
    console.log(calculaArea(2,3));
*/

/*
function calculoSoma(soma1, soma2){
    const soma = soma1 + soma2;
        return soma;
        }

const somaCalculada= calculoSoma(5, 9);
        console.log(calculoSoma(5, 9));
        */


/*        
function recebeArray(arrayDeNumeros = []){
    return [(arrayDeNumeros.length)/2, (arrayDeNumeros[0])/2];
    }

console.log(recebeArray([1,2,3,4,5,6,7,8,9]));
*/

const nomePessoa = function funcaoNome(nome){
    
   return nome 
    }
    
console.log(nomePessoa("nome")); // <--função sendo chamada
console.log(nomePessoa("joao"));
console.log(nomePessoa("Ana"));
console.log(nomePessoa("Gabriel"));



  











