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

const arr =[1, 3, 4, 5, 8,9];
const newArr= arr.map(function(item, index){
   return item+ index; 
});

console.log(newArr);

const sum= arr.reduce(function(total,next){
    return total+ next;
})

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 ===0;
});

console.log(filter);

const find = arr.find(function(item){
    return item ===4;
});

console.log(find);