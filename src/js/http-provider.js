
const jokeUrl = 'https://api.chucknorris.io/jokes/random#';
const urlUsuarios = 'https://reqres.in/api/users?page=2#'

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


export { obtenerChiste, obtenerUsuarios }