function createXHR() {
    // Créez une instance de XMLHttpRequest
    xhr = new XMLHttpRequest();
    console.log(xhr);
}
function createXML() {
    // Créez une instance de XMLHttpRequest
    xml = new XMLHttpRequest();
    console.log(xml);
}

// Appelez la fonction pour créer l'instance XHR
createXHR();
createXML();

function sendGetRequest(){
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = ()=> {
        const data = xhr.response;
        console.log(data);
    }
}

sendGetRequest();

/* EXo 3 */

 function handleRequestStates() {
     xhr.onreadystatechange = function () {
         console.log('readyState:' , xhr.readyState);
        }
    }
    
handleRequestStates();
    
/* EXo 4 et 5 */

function sendPostRequest () {
xml.open("POST", "https://jsonplaceholder.typicode.com/posts");
xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
xml.onload = () => {
  if (xml.readyState == 4 && xml.status == 201) {
    console.log(JSON.parse(xml.responseText));
  } else {
    console.log(`Error: ${xml.status}`);
  }
};
xml.send(body);
}

sendPostRequest();

/* exo 6 */

function cancelRequest() {
    xhr.abort();
    console.log("la requete xhr à été annulé");
}

cancelRequest();