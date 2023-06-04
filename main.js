$(document).ready(function () {
  console.log(document.querySelector("header button"));
  console.log($("header button"));

  document
    .querySelector("header button")
    .addEventListener("click", function (e) {});

  $("header button").click(function () {
    alert("Expandir formulario");
  });

  $("form").on("submit", function (e) {
    console.log("submit");
    e.preventDefault();
  });
});
