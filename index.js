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

/*  
    var pessoa = {
        nome: "João Wolf",
        idade: 20,
    }


function exercicio4(objetoPessoa, arraycomidas, objetoMelhorAmigo){
    var novoObjeto = {...objetoPessoa, comidasPreferidas: arraycomidas, melhorAmigo: objetoMelhorAmigo};

    console.log(`O nome da pessaoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasPreferidas[0]}, ${novoObjeto.comidasPreferidas[1]}, ${novoObjeto.comidasPreferidas[2]}.O nome do seu amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos. `);
}
exercicio4(pessoa, ["Xis", "Churrasco", "Lasanha"], {nome: "Cássio", idade:20});*/



/* let condicao1 = true;
    if (condicao1){
        //como o valor da condição é true, o código desse bloco é executado 
        console.log('Entrei no if 1!');
        }

let condicao2 = false;

    if (condicao2){
        //como o valor da condição é falsa, o codigo desse bloco NÃO é executado
        console.log('entrei no if 2!');
        } */



/* function comparaDoisNumeros(num1, num2){
    if(num1 === num2){
        console.log("sucesso");
    } 
}
comparaDoisNumeros(prompt("digite num 1"), prompt("digite num 2"));
 */


/* function podeDirigir(nome, idade){
    if(idade >= 18){
        console.log(nome ,', você pode dirigir');
    }
} 
    podeDirigir(prompt("digite seu nome"), prompt("digite sua idade")); */



/* let condicao = false

if (condicao){
    console.log('entrei no if!')
} else {
    console.log("entrei no else")
}
 */


/* function comparaDoisNumeros(num1, num2){
    if(num1 === num2){
        console.log("Números iguais");
    } else {
        console.log("Números Diferentes")
    } 
}
comparaDoisNumeros(prompt("digite num 1"), prompt("digite num 2")); */
 

/* let condicao1 = true 
let condicao2 = false

if (condicao1){
    console.log('entrei no if 1!')
} else {

    if (condicao2){ 
        console.log("entri no if 2!")
    }
}
 */

/* function numerosIguais(num1, num2){
    if(num1 > num2){
        console.log("num1 é maior que num2 ");

    }   else if (num1 < num2){
            console.log("num1 é menor que num2 ");

        }   else{
            console.log("num1 é igual que num2 ");
        }
    
}
        numerosIguais(prompt("digite num 1"), prompt("digite num 2"));  */
        
/* let paisDeOrigem
if (paisDeOrigem === 'brasil'){
    console.log("brasileiro");
}   else if (paisDeOrigem === 'EUA'){
            console.log("Norte Americano");
}   else if (paisDeOrigem === 'Inglaterra'){
            console.log('inglês');
}   else if (paisDeOrigem === 'França'){
            console.log('francês');
}   else if(paisDeOrigem === 'Itália'){
            console.log('italiano');
}   else if (paisDeOrigem === 'canadá'){
            console.log('canadense');
}   else {
        console.log ('nacionalidade não encontrada');
}
 */


/* let paisDeOrigem
switch (paisDeOrigem) {
    case 'brasil':
        console.log('brasileiro')
        break;
    case 'EUA':
        console.log('Norte americano')
        break;
    case 'Inglaterra':
        console.log('Inglês')
        break
    default:
        console.log('nacionalidade não encontrada')
        break
}
 */


/* function pokemonSelecionar(pokemon){
switch (pokemon) {
    case 'Bulbasauro':
        console.log('Bulbasauro \nplanta e veneno')
        break;
    case 'Charmander':
        console.log('Charmander \nFogo')
        break;
    case 'Squirtle':
        console.log('Squirtle \n Água')
        break
    default:
        console.log('Nenhum pokémon foi encontrado')
        break
    }
}
    console.log(pokemonSelecionar(prompt('escolha um POKÉMON \n Bulbasauro \n Charmander \n Squirtle ' )));
 */



/* let condicao1 = true
let condicao2 = false 

if (condicao1 && condicao2){
    //Entra aqui se ambas forem true
}

if (!condicao1){
    //Entra aqui se condicao1 for false 
}
 */

/* var nome = prompt('Qual seu nome')
var idade = prompt('qual sua idade')
var ensinoMedio = prompt('Você tem Ensino médio completo')
var faculdade = prompt('voce esta cursando alguma outra faculdade')


    if ((idade >= 18) && (ensinoMedio === 'sim' && 'SIM' && 'Sim') && (faculdade === 'nao' && 'NAO' && 'Não' && 'Nao' )){
        console.log('Você pode entrar na nossa faculdade')
    } else {
        console.log('voce nao tem algum requisito para ingressar na nossa faculdade ')
    }
 
        console.log('Nome: ', nome,'\nIdade: ', idade,' anos', '\nJa terminou Ensino Médio: ', ensinoMedio,'\nEsta fazendo alguma outra facildade: ' ,faculdade) */

/* function podeEntrarNaFaculdade(ensinoMedio,idade,faculdade){
    if(ensinoMedio === "sim" || ensinoMedio === sim){ensinoMedio = true}else{ensinoMedio = false}

    if(faculdade === "sim" || faculdade === "nao"){faculdade = true}else{faculdade = false}

    if (idade >= 18 && ensinoMedio && !faculdade){
        return "você pode entrar na faculdade"}
        else{return "você não pode entrar na faculdade"}
}
console.log(podeEntrarNaFaculdade(prompt ("você concluiu o ensino medio?"), number(prompt("qual sua idade?")), prompt("você ja estuda em uma faculdade?")))
 */


/*Calculadora Simples; Crie uma função calculadora que recebe dois
números e uma operação (soma, subtração, multiplicação ou divisão)
como argumentos e retorna o resultado da operação. */


 
/* function calculadora(num1, num2 ){
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 / num2);
    console.log(num1 * num2);
}
    console.log(calculadora(prompt('escreva num1 '), prompt(' escreva num2'))); */



//explicação return
/* function calculaArea(base, altura){
    return base * altura;
}

function calculaAreaTotal(valores=[]){
    var resultado = valores[0] + valores[1] + valores[2] + valores[3];
    return resultado;
}
function calculaValores(valores = []) {
    valores = [0] = number (valores[0])
    valores = [1] = number (valores[1])

    var areaCalculada = calculaArea(valores[0], valores[1])
}
    var areatotal = calculaAreaTotal([areaCalculada,areaCalculada,areaCalculada,areaCalculada])
    
    return areatotal;

function pegaParametros() {
    return calculaValores((prompt("digite a base"), prompt("digite a altura")));
}
 */




























    
