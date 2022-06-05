
const jokeUrl = 'https://api.chucknorris.io/jokes/random#';

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



export { obtenerChiste }
