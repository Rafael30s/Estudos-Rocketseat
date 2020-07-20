// aula 1- Classes 
//class Matematica{
//     static soma(a,b){
//         return a+b;
//     }
// }
// console.log(Matematica.soma(1,2));
// class List {
//     constructor(){
//         this.data=[];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = 'Rafael';
//     }
//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }
// Aula 2- Const-Let
// const usuario ={nome: 'Rafael'}; // não pode ter seu valor reatribuido
// usuario.nome = 'Cleiton'; // mutação em const é possivel
// function teste(x){
//     let y=2;
//     if(x>5){
//         console.log(x,y);
//     }
// }
// teste(10);
// Aula 3- Operações em array
// Aula 4- Arrow Function
// const arr =[1, 3, 4, 5, 8,9];
// const newArr= arr.map((item, index)=>{
//    return item+ index; 
// });
// console.log(newArr);
// const sum= arr.reduce(function(total,next){
//     return total+ next;
// })
// console.log(sum);
// const filter = arr.filter(function(item){
//     return item % 2 ===0;
// });
// console.log(filter);
// const find = arr.find(function(item){
//     return item ===4;
// });
// console.log(find);
// Aula 5- Valores padrão na função
// function soma(a=3,b=6){
//     return a +b;
// }
// console.log(soma(1));
// console.log(soma());
// Aula 5 - Desestruturação
// const usuario = {
//     nome: 'Rafael',
//     idade: 19,
//     endereco: {
//         cidade:'São Paulo',
//         estado: 'SP'
//     }
// };
// const {nome, idade, endereco: {cidade}}=usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// Desestruturação em função
// function mostraNome({nome,idade}){
//     console.log(nome, idade);
// }
// mostraNome(usuario);
// Operadores rest/spread
//REST -pega o resto
// const usuario={
//     nome:'Rafael',
//     idade:19,
//     faculdade: 'Bandtec'
// }
// const {nome, ...resto} = usuario;
// console.log(nome);
// console.log(resto);
// const arr= [1,2,3,4];
// const [a,b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(a,b,...params){
//         return params;
//     }
// console.log(soma(1,3,4,4,5,6,7));
// SPREAD - Ele repassa as informações para outra estutura de dados
// const arr1= [1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1, arr2];
// console.log(arr3);
// const usuario1 = {
//     nome: 'Rafael',
//     idade: 19,
//     faculdade: 'Bandtec'
// };
//const usuario2 = {...usuario1, nome: 'Gabriel'};
//console.log(usuario2);
// Template Literals - Interpolação
// const nome='Rafael';
// const idade=19;
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
// Object Short Syntax
// const usuario={
//     nome,
//     idade,
//     faculdade: 'Bandtec'
// };
// console.log(usuario);
