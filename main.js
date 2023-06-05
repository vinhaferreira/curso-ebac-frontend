$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const tarefaNova = $("#tarefa-nova").val();
    $(`<li>${tarefaNova}</li>`).appendTo("ul");

    $("li").click(function () {
      $(this).css("text-decoration", "line-through");
    });
    $("#tarefa-nova").val("");
  });
});
