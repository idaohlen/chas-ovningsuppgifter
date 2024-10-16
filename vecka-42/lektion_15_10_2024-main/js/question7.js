// Funktion att kovertera Celsius till Fahrenheit
function celsiusToFahrenheit(temp) {
  return (temp * 1.8) + 32 + "° F";
}

// Funktion att kovertera Fahrenheit till Celsius
function fahrenheitToCelsius(temp) {
  return (temp - 32) / 1.8 + "° C";
}

// Exampe
console.log(celsiusToFahrenheit(25));
