import { obtenerChiste } from "./js/http-provider";


//const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

// fetch(jokeUrl).then(resp => {
//     console.log(resp);
//     // ####### Opcion Estructurada #######
//     resp.json().then(data => {
//         console.log(data);
//         console.log(data.id);
//         console.log(data.value);
//     });

//     // ####### Opcion Desectructurarda #######
//     resp.json().then(({ id, value }) => {
//         console.log({ id, value });
//     });

// });


// ####### Pro Tips Promesas en cadenas #######

//####### pcion Estructurada #######
// fetch(jokeUrl)
// .then(resp => resp.json())
// .then( console.log );

//####### Opcion Desestructurada #######
// fetch(jokeUrl)
// .then(resp => resp.json())
// .then(( {id,value}) => {
//     console.log({id,value});
// });


obtenerChiste().then(console.log);