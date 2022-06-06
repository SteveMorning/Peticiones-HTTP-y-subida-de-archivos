
const jokeUrl = 'https://api.chucknorris.io/jokes/random#';
const urlUsuarios = 'https://reqres.in/api/users?page=2#'

// Cloudinary
const cloudPreset = 'i9jknpgl';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dgpjm6rwo/upload';


const obtenerChiste = async () => {
    // ################# A esto le vamos a agregar un TRY y CATCH
    // const resp = await fetch(jokeUrl);
    // if (!resp.ok) return alert('No se pudo realizar la peticion');
    // const chiste = await resp.json();
    // return chiste;

    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se pudo realizar la peticion';
        // const chiste = await resp.json();
        // return chiste;

        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
        //return  {a:icon_url , b:id ,c:value};

    }
    catch (err) {
        throw err;
    }

}


const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);

    //Aca se deberia hacer el TRY CATCH

    //const data = await resp.json();  //Modo estructurado
    const { data: usuarios } = await resp.json();
    //console.log(usuarios);
    return usuarios;
}


// Usar por cada elemento a subir
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();  //Objeto en JS con formato para subir
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp.secure_url);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }


    }
    catch (err) {
        throw err;
    }

}


export { obtenerChiste, obtenerUsuarios, subirImagen }