/**
 *  Ejemplos  usando   asyn awit  ,  promises
 *  con la api de github
 *  https://developer.github.com/v3/
 */

// funcion tradicional  -- con error

 function getUserFromGithuhV1(username) {
    console.log("iniciando");
    let url = "https://api.github.com/users/" + username;
    const  respuesta  = fetch(url);
    let datos_resp =  respuesta.json();
    console.log(datos_resp);
    console.log("termino")
    return datos_resp;
}

getUserFromGithuhV1("andreshash");

//asyn await
async function getUserFromGithuhV2(username) {
    console.log("iniciando");
     let url = "https://api.github.com/users/" + username;
     const  respuesta  = await fetch(url);
     let datos_resp = await respuesta.json();
     console.log(datos_resp);
     console.log("termino")
     return datos_resp;
}

getUserFromGithuhV2("andreshash");

// async await  como una promesa

async function getUserFromGithuhV3(username) {
    console.log("iniciando");
    let url = "https://api.github.com/users/" + username;
    const  respuesta  = await fetch(url);
    let datos_resp = await respuesta.json();
    console.log("termino");
    return datos_resp;
}

let consultaPromise = getUserFromGithuhV3();
consultaPromise.then( function (respuesta) {
  console.log("en la respuesta de la promesa :");
  console.log(respuesta);
});

// consulta  como promesa vs  una async function

function getUserFromGithuhV3(username) {
    let url = "https://api.github.com/users/" + username;
    return fetch(url)
        .then(response => response.text())
        .then(text => {
            console.log(text);
        }).catch(error => {
            console.log("ha ocurrido un error " + error)
        })
}

getUserFromGithuhV3("andreshash");


async function getUserFromGithuhV4(username) {
    try {
        let url = "https://api.github.com/users/" + username;
        const  respuesta  = await fetch(url);
        console.log( await respuesta.text());
    } catch (e) {
        console.log("ha ocurrido un error " + e)

    }
}

getUserFromGithuhV4("andreshash");

