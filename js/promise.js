// https://github.com/frenchita/acamica/tree/master/js/promesas

// promise
promesa  = new Promise( function (resolve,  reject) {
   if(!true) {
       resolve("la promesa finalizo")
   } else {
       reject("la promesa fallo")
   }
});

promesa.then(function (response) {
   console.log("respuesta  : " + response);
}).catch(function (error) {
    console.log("respuesta  : " + error);
});

// promise asyn
promesa  = new Promise( function (resolve,  reject) {
     console.log("iniciando  promise")
     setTimeout(function () {
         if(true) {
             resolve("la promesa finalizo")
         } else {
             reject("la promesa fallo")
         }
     }, 3000)
});

promesa.then(function (response) {
    console.log("respuesta  : " + response);
}).catch(function (error) {
    console.log("respuesta  : " + error);
});

// promise all

promesa1  = new  Promise ( function (resolve, reject) {
   resolve("uno")
});

promesa2  = new  Promise ( function (resolve, reject) {
    resolve("dos")
});

promesa3  = new  Promise ( function (resolve, reject) {
    resolve("tres")
});

Promise.all([promesa1, promesa2 , promesa3]).then(function (response) {
   console.log("se cumplen todas las promise  " + response)
}).catch(function (error) {
    console.log("una promesa fallo  " + error)
});

// promise  raice

promesa4  = new  Promise ( function (resolve, reject) {
    setTimeout(function () {
        resolve("uno")
    }, 7000)
});

promesa5  = new  Promise ( function (resolve, reject) {
    setTimeout(function () {
        resolve("dos")
    }, 7000)
});

promesa6  = new  Promise ( function (resolve, reject) {
    setTimeout(function () {
        resolve("tres")
    }, 7000)
});

Promise.race([promesa4, promesa5 , promesa6]).then(function (response) {
    console.log("primero en ser resulto    " + response)
}).catch(function (error) {
    console.log("primera promesa en fallar  " + error)
});



// promesas encadenadas
promesa7 =  new Promise((resolve, reject) => {
    resolve("uno")
})
promesa8 =  new Promise((resolve, reject) => {
    resolve("dos")
})
promesa9 =  new Promise((resolve, reject) => {
    resolve("tres")
})


promesa7.then(function (primera) {
    console.log(primera);
    return promesa8;
}).then(function (segunda) {
    console.log(segunda);
    return promesa9;
}).then(function (tercera) {
    console.log(tercera)
}).catch(function (error) {
    console.log("fallos :" + error)
})

