const form = document.getElementById("myForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const numA = Number(document.getElementById("numA").value);
  const numB = Number(document.getElementById("numB").value);

  if (numB > numA) {
    messageDiv.textContent = "O Formulário é válido!";
    messageDiv.style.color = "green";
  } else {
    messageDiv.textContent = "O número B deve ser maior que o número A";
    messageDiv.style.color = "red";
  }
});
