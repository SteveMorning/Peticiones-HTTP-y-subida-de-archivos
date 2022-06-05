import { obtenerChiste } from "./http-provider";

const body = document.body;
//const btnOtro , olList; // Hay que reemplazar const pot let. por que hay esperar que se cree el objeto
let btnOtro, olList;

const crearChistesHtml = () => {

    const html = `
   
   <h1 class="mt-5">Chistes</h1>
   <hr>
   <button class="btn btn-primary">Otro Chistes</button>
   <ol class="mt-2 list-group">
        <li class="list-group-item"> Estructura html de los chistes </li>
   </ol>

   `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);


}


const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    //OPCION 1 CREANDO CONSTANTE CHISTE
    // btnOtro.addEventListener('click', async () => {
    //     console.log('btn Click');
    //     const chiste = await obtenerChiste();
    //     dibujarChistes(chiste);
    // });


    //OPCION 2 PASANDO EL RESULTADO DE OBTENER DIRECTAMENTEA DIBUJAR
    btnOtro.addEventListener('click', async () => {
        //console.log('btn Click');
        btnOtro.disabled = true;
        dibujarChistes(await obtenerChiste());
        btnOtro.disabled = false;

    });

};


// se espera Id y Value
const dibujarChistes = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = ` <b> ${chiste.id} </b>: ${chiste.value} `;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}


export const init = () => {
    crearChistesHtml();
    eventos();
}