const divForm = document.getElementById("container-form");

const txtNombreTarjeta = document.getElementById("cardName");
const txtNumeroTarjeta = document.getElementById("cardNumber");
const txtMesTarjeta = document.getElementById("month");
const txtAnioTarjeta = document.getElementById("year");
const txtCVCTarjeta = document.getElementById("cvc");

function validaNumero(textoNumero, min, max, longitud) {
  // logica para validar el campo
  let valido = true;

  
  let numero = Number(textoNumero);

 
  if (!(min <= numero && numero <= max)) {
    console.log("numero fuera de rango");
    return false;
  }

  if (textoNumero.length !== longitud) {
    console.log("longitd invalidad");
    return false;
  }

  return valido;
}

txtCVCTarjeta.addEventListener("input", () => {
  let tx = txtCVCTarjeta.value;

  let isValidCVC = validaNumero(tx, 0, 999, 3);


  const msgErrorCVC = document.getElementById("errorCVC");
  isValidCVC
    ? (msgErrorCVC.style.visibility = "hidden")
    : (msgErrorCVC.style.visibility = "visible");

  console.log(txtCVCTarjeta.value);
  console.log(isValidCVC);


  document.getElementById("secCode").innerHTML = tx;
});

txtMesTarjeta.addEventListener("input", () => {
  let tx = txtMesTarjeta.value;

  let isValidCVC = validaNumero(tx, 1, 12, 2);


  const msgErrorCVC = document.getElementById("errorMes");
  isValidCVC
    ? (msgErrorCVC.style.visibility = "hidden")
    : (msgErrorCVC.style.visibility = "visible");

  console.log(txtCVCTarjeta.value);
  console.log(isValidCVC);


  document.getElementById("fechaMes").innerHTML = tx;
});

txtAnioTarjeta.addEventListener("input", () => {
  let tx = txtAnioTarjeta.value;

  let isValidCVC = validaNumero(tx, 22, 99, 2);


  const msgErrorCVC = document.getElementById("errorAnio");
  isValidCVC
    ? (msgErrorCVC.style.visibility = "hidden")
    : (msgErrorCVC.style.visibility = "visible");

  console.log(txtCVCTarjeta.value);
  console.log(isValidCVC);


  document.getElementById("fechaAnio").innerHTML = tx;
});

divForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!txtCVCTarjeta.validity.valid) {
  
    console.log("formulario invlido CVX");
  } else {
    enviar();
  }

  return false;
});

function enviar() {
  divForm.style.display = "none";
  const modalGracias = document.getElementById("div-gracias");
  modalGracias.style.display = "flex";

  console.log("enviando");
}
