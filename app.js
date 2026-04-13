let inpCelsius = document.getElementById("inpCelsius");
let btnConvertir = document.getElementById("btnConvertir");
let spanCelsius = document.getElementById("spanCelsius");
let spanFahrenheit = document.getElementById("spanFahrenheit");
let spanKelvin = document.getElementById("spanKelvin");

btnConvertir.addEventListener("click", function () {
  let valorCelsius = Number(inpCelsius.value);

  if (inpCelsius.value.trim() === "") {
    alert("El campo Celsius no tiene ningún valor");
    inpCelsius.value = "";
  } else {
    if (isNaN(valorCelsius)) {
      alert("El dato ingresado no es un número. Ingrese un número.");
    } else {
      fahrenheit = valorCelsius * 1.8 + 32;
      kelvin = valorCelsius + 273.15;
      // alert(kelvin) ya comprobé que funciona
      spanCelsius.textContent = valorCelsius;
      //   console.log(`este es el valor de ${valorCelsius}`); ahora compruebo que el cambio span funciona
      spanFahrenheit.textContent = fahrenheit;
      spanKelvin.textContent = kelvin;
      inpCelsius.value = "";
    }
  }
});
