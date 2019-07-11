const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === alphabet[index]) {
      index++;

      if (index === alphabet.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }

}


const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.


// This is the function that would be invoked by the event listener.
