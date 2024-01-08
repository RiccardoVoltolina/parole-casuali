// Prendo l'elemento nel mio html con id random_word e con innerHTML ci stampo un valore
document.getElementById('random_world').innerHTML = 'ciao';

// cerco nel mio browser un elemento salvato con il nome ‘random_word’. Se esiste, restituisce il suo valore come una stringa. Se non esiste, restituisce null. Con JSON.parse prendo una stringa in formato JSON e la converto in un oggetto JavaScript

let random_word = JSON.parse(localStorage.getItem('random_word')) || [];

// Metto nel get l'url della chiamata
axios.get('https://flynn.boolean.careers/exercises/api/random/word')
  .then(function (response) {
    // Eseguo un console log per vedere la risposta
    console.log(response.data.response);
    let single_word = response.data.response;
    // inserisco la mia parola nell' array

    random_word.push(single_word);

    // salvo la stringa JSON nello storage locale del mio browser. I dati vengono salvati con la chiave 'random_word' con json.stringify converto l’array random_word in una stringa di testo in formato JSON.

    localStorage.setItem('random_word', JSON.stringify(random_word));

    console.log(random_word); 
  })
  .catch(function (error) {
    // Eseguo un console log per vedere gli errori
    console.log(error);
  });
