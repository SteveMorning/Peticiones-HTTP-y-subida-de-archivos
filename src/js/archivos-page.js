
const body = document.body;
let inputFile, imgFoto;



const crearInputFileHtml = () => {

    const html = `

                    <h1 class="mt-5">Subir Archivos</h1>
                    <hr>

                    <label>Selecciona una fotografia</label>

                    <label>Selecciona una fotografia:</label>
                    <input type="file" accept="image/png">

                    <img id="foto" class="imf-thumbnail" src="" alt="">

                    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

}


const eventos = () =>{

inputFile.addEventListener('change' , (event) => {

    console.log(event);

    const file = event.target.files[0];
    console.log(file);

});

}


export const init = () => {
    crearInputFileHtml();
    eventos();
}