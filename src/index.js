//import { init } from "./js/chistes-page";
//import { init } from "./js/usuarios-page";
//import { obtenerUsuarios } from "./js/http-provider";
import { init } from './js/archivos-page';
import * as CRUD from './js/crud-provider';



// Para  chistes
//init();
//obtenerUsuarios().then(console.log);


// Para Usuarios
//init();
//obtenerUsuarios().then(console.log);


CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name:'Fernando',
    job:'Carpintero'
}).then(console.log);



CRUD.actualizarUsuario(1,{
name:'Melisa',
job:'Developer'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);




init();