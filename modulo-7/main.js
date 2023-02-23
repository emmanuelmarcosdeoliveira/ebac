const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEValido = false;

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de <strong>${valorDeposito.value}</strong> depositado para o cliente <strong>${nomeBeneficiario.value}</strong> - conta: <strong> ${numeroContaBeneficiario.value}</strong>`;
  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    nomeBeneficiario.value = " ";
    numeroContaBeneficiario.value = " ";
    valorDeposito.value = " ";
  } else {
    nomeBeneficiario.style.border = "2px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
});
nomeBeneficiario.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    nomeBeneficiario.classList.add("error");
    document.querySelector(".error-message").style.display = "block";
  } else {
    nomeBeneficiario.classList.remove("error");
    document.querySelector(".error-message").style.display = "none";
  }
});
