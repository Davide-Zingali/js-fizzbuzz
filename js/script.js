// FizzBuzz
// ciclo for che stampa i numeri da 1 a 100

for (var i = 1; i < 101; i++) {
  var multiplo3 = i % 3
  var multiplo5 = i % 5

  // condizioni per mostrare fizz e buzz
  if ((multiplo3 == 0) && (multiplo5 == 0)) {
    console.log("FizzBuzz");
  } else if (multiplo3 == 0) {
    console.log("Fizz");
  } else if (multiplo5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
