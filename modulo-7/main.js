const form = document.getElementById("form-deposito");
function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(" ");
  return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function (e) {
  let formEValido = false;
  e.preventDefault();
  const nomeBeneficiario = document.getElementById("nome-beneficiario");
  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de <strong>${valorDeposito.value}</strong> depositado para o cliente <strong>${nomeBeneficiario.value}</strong> - conta: <strong> ${numeroContaBeneficiario.value}</strong>`;
  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".sucess-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    nomeBeneficiario.value = " ";
    numeroContaBeneficiario.value = " ";
    valorDeposito.value = " ";
  } else {
    alert("O nome não está completo");
  }
});

console.log(form);
