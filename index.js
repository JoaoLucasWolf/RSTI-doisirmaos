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

/*
const nomePessoa = function funcaoNome(nome){
    
    return nome 
    }
console.log(nomePessoa("nome")); // <--função sendo chamada
console.log(nomePessoa("joao"));
console.log(nomePessoa("Ana"));
console.log(nomePessoa("Gabriel"));
*/

/*
const professor ={
    nome: 'vitor',
    idade: 27,
    tarefas:['Dar aula', 'Responder dúvidas'],
    contarPiada: function(){
        console.log('É pa vê ou pa comê?')
    }
}
   console.log(professor.idade)
   */

   /*
const professor = {
    nome: "vitor",
    idade: 27,
    email: 'vitor@gmail.com'
}
    console.log(professor ['email']) 
    */

/*
    const professor ={
        nome: 'vitor',
        idade: 27,
        tarefas:['Dar aula', 'Responder dúvidas'],
        contarPiada: function(){
            console.log('É pa vê ou pa comê?')
        }
    }
        console.log(professor.nome);
        console.log(professor.idade);
            professor.nome = "João";""
            console.log(professor.nome);
            */

/*
const filme = {
    nome: "hohanna" , 
    elenco: "joel, " + "junior, " + "cleiton " ,
    direcao: "ademar, " + "claudia " ,
    lancamento: '27/12/2025' ,
    viuFilme: true 
}
        console.log(filme.nome);
        console.log(filme.direcao);
        console.log(filme.elenco);
        console.log(filme.lancamento);
        console.log(filme.viuFilme);
        */

/* var pessoa = {
    nome: "João Wolf",
    idade: 20,
    generoMusical: "funk",
}
    
        console.log("O nome da pessoa é", pessoa.nome, ", ele tem", pessoa.idade, "anos e gosta muito de", pessoa.generoMusical, "." )
     */


/* const donoDoPet ={
    nome: "vitor Hugo",
    pet:{
        nomeDoPet:"wanda",
        raca: "vira-lata", 
        idade: 1 
        }
    }
        console.log(donoDoPet.pet.nomeDoPet); */


/*
const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
}
        console.log(curso.linguagens[0]);
        */

/* const professores =[
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3},
]
        console.log(professores[1].nome) */

/* const curso ={
    nome: "frontend",
    linguagens: ["JS", "CSS", "HTML"]
}

        curso.numeroEstudantes=50
        console.log(curso.numeroEstudantes)
 */

/* var listaFilme =[
    {nome:"Joel/nerd", modulo: 1},
    {nome:"junior/professor", modulo: 2},
    {nome:"Cleiton/vendedor", modulo: 2},

]

        console.log(listaFilme[0].nome);
        console.log(listaFilme[1].nome);
        console.log(listaFilme[2].nome);
        listaFilme[0].nome="Xuxa";
        console.log(listaFilme[0].nome); */


/* const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade:'São Paulo'
    }
     
const novoUsuario = {
    ...usuario,
    nome: 'joão',
    idade: 28
    } */
   
/* const listaDeNomes = ["Mika","Paula", "Vitor"]

const copiaListaDeNomes =[...listaDeNomes]

    console.log(copiaListaDeNomes) */



    
