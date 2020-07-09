//Aula 1 - Requisições AJAX

//var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/Rafael30s');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// Aula 2- Promise

//var minhaPromise = function() {
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/Rafael30s');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 } else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     })
// }

// minhaPromise()
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.warn(error);
// });


//Aula3 -Utilizando Axios
axios.get('https://api.github.com/users/Rafael30s')
.then(function(response){
    console.log(response.data.avatar_url);
})
.catch(function(error){
    console.warn(error);
});