console.log('test')

const url = 
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=10&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes';

//Créer une requête
let request = new XMLHttpRequest(); //créer un objet
request.open('GET', url ); //Par1: GET/POST; Par2 : url
request.responseType = 'json'; // Nous attendons du JSON
request.send(); //Nous envoyons notre requête   

//Pour l'instant on ne récupère pas le résultat. Dès qu'on reçoit une réponse on éxécute une la fonction suivante :

request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) { //est-ce que l'état actuel de notre requête === done/accompli ?
        if(request.status === 200){ //si tout est ok code 200
            let response = request.response; // on stock la réponse 
            // console.log(response);
            let paramsBike = response.records[0].fields.name;
            document.querySelector('#price-label').textContent = paramsBike;
        } else {
            alert('Une erreur est survenue, merci de revenir plus tard')
        }
    }
}