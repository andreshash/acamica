
//  https://jsonplaceholder.typicode.com/
// https://dev.to/devamaz/using-fetch-api-to-get-and-post--1g7d
var formulario  = document.getElementById('postData');
var botonTraerDatos = document.getElementById('getAPI');



// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
formulario.addEventListener('submit', postData);
botonTraerDatos.addEventListener('click', getAPI);

/**
 * envia los datos para crear un post
 * @param event
 */
function postData(event){
    event.preventDefault();

    let tittle = document.getElementById('tittle').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({tittle:tittle, body:body})
    }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
}

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = `<h2> Random User Info From Jsonplaceholder API</h2>`;
            data.forEach((user) => {
                const { id, name, email, address: { city, street } } = user
                result +=
                    `<div>
                     <h5> User ID: ${id} </h5>
                         <ul class="w3-ul">
                             <li> User Full Name : ${name}</li>
                             <li> User Email : ${email} </li>
                             <li> User Address : ${city}, ${street} </li>
                         </ul>
                      </div>`;
                document.getElementById('result').innerHTML = result;
            });
        })
}




function createGist(opts) {
    console.log('Posting request to GitHub API...');
    fetch('https://api.github.com/gists', {
        method: 'post',
        body: JSON.stringify(opts)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log('Created Gist:', data.html_url);
    });
}

function main() {
    createGist({
        description: 'Fetch API Post example',
        public: true,
        files: {
            'test.js': {
                content: " hola "
            }
        }
    });
}
