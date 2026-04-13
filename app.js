let inpCelsius = document.getElementById("inpCelsius");
let btnConvertir = document.getElementById("btnConvertir");
let spanCelsius = document.getElementById("spanCelsius");
let spanFahrenheit = document.getElementById("spanFahrenheit");
let spanKelvin = document.getElementById("spanKelvin");
let btnReset = document.getElementById("btnReset");
let historial = document.getElementById("historial");

btnConvertir.addEventListener("click", function () {
  let valorCelsius = Number(inpCelsius.value);

  if (inpCelsius.value.trim() === "") {
    alert("El campo Celsius no tiene ningún valor");
  } else if (isNaN(valorCelsius)) {
    alert("El dato ingresado no es un número. Ingrese un número.");
  } else {
    let fahrenheit = valorCelsius * 1.8 + 32;
    let kelvin = valorCelsius + 273.15;
    // alert(kelvin) ya comprobé que funciona
    spanCelsius.textContent = valorCelsius;
    //   console.log(`este es el valor de ${valorCelsius}`); ahora compruebo que el cambio span funciona
    spanFahrenheit.textContent = fahrenheit.toFixed(2);
    spanKelvin.textContent = kelvin.toFixed(2);
    inpCelsius.value = "";

    let registro = document.createElement("li");
    registro.textContent = `${valorCelsius}°C = ${fahrenheit} °F - ${kelvin} °K`;
    historial.appendChild(registro);
  }
});
btnReset.addEventListener("click", function () {
  spanCelsius.textContent = "0";
  spanFahrenheit.textContent = "0";
  spanKelvin.textContent = "0";
  inpCelsius.value = "";
});
