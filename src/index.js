//import { init } from "./js/chistes-page";
//import { init } from "./js/usuarios-page";
//import { obtenerUsuarios } from "./js/http-provider";
import * as CRUD from './js/crud-provider';



// Para  chistes
//init();
//obtenerUsuarios().then(console.log);


// Para Usuarios
//init();
//obtenerUsuarios().then(console.log);


CRUD.getUsuario(2).then(console.log);