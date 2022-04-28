const getMovie = () => {
    fetch (`http://www.omdbapi.com/?apikey=${apiKey}&`)
    .then(response => {
        return response.json();
        console.log(response);
    }) 
    .then((dataUsage) => {
        console.log(dataUsage)
    })
    .catch((error) =>{
        console.error('Response error:', error.message);
    });
};


let movie = "lord"
loadingApiData(movie)


// ACITVER la cle API pour charger les films concernes par inputs
async function loadingApiData(i) {
    const URL = `http://www.omdbapi.com/?s=${i}&apikey=[ta clé api]`
    const response = await fetch(`${URL}`)
    const data = await response.json()
    if(data.Response == "True") {
        displayMovies(data.Search)
    }
}