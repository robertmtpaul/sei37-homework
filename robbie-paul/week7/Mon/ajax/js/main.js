// let globalData;

$(document).ready(function () {
  // This code runs only after DOM
  // has loaded.

  $("#lookupMovie").on("click", function () {
    // This code runs when the button is clicked
    // const query = $('#movieQuery').val();
    console.log("Search clicked!");

    // XMLHttpRequest
    // AJAX: Asynchronous Javascript and XML
    // XML: eXtensible Markup Language
    //      structured data exchange format
    //      for networking
    // JSON: JS Object Notation

    const xhr = new XMLHttpRequest();

    // This is the ancient way of defining a callback function in JS:
    // Set some '.on____' property of a library object to be a function,
    // which it will run for you in response to the relevant event triggering.
    // xhr.onreadystatechange = function(){
    //   // console.log('Ready state changed: ', xhr.readyState);
    //   if( xhr.readyState === 4 ){
    //     console.log('Response: ', xhr.response );
    //   }
    //
    // };

    xhr.onload = function () {
      // turn the JSON string of the response into structured data:
      let data = JSON.parse(xhr.response);
      console.log("Response: ", data);
      // globalData = data;
      // $('#results').append(`<p>${ data.results[0] }</p>`);

      
        const movie = data.results[i];
        const $img = $(
          `<img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}", id="${movie.id}">`);
          
        $("#results").append($img);

        $(`${movie.id}`).on("click"),
          function () {
            const id = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=24d863d54c86392e6e1df55b9a328755`;
            xhr.open('GET', url);
            xhr.send();
            $('#results').html(`${id}`)
          };

        const url = `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${query}`;
        xhr.open("GET", url);
        xhr.send();
      } // movie.id click handler.

      // const url = `http://numbersapi.com/${query}/trivia?json`;
    };
  }); // button handler
}); // $(document).ready()
