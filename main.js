document.getElementById('random_world').innerHTML = 'ciao';



// metto nel get l'url della chiamata
axios.get('https://flynn.boolean.careers/exercises/api/random/word')
  .then(function (response) {
    // eseguo un consolle log per vedere la risposta
    console.log(response);
  })
  .catch(function (error) {
    // eseguo un consolle log per vedere gli errori
    console.log(error);
  })
  .finally(function () {
    // always executed
  });