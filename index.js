
$(function () {
  //Var declarations
  let turns = 0;
  let cell1 = $("#1");
  let cell2 = $("#2");
  let cell3 = $("#3");
  let cell4 = $("#4");
  let cell5 = $("#5");
  let cell6 = $("#6");
  let cell7 = $("#7");
  let cell8 = $("#8");
  let cell9 = $("#9");
  let button = $("#reset");

  $(button).on("click", clearBoard);

  function clearBoard() {
    $(".cell").text("");
    $(".cell").removeClass("o");
    $(".cell").removeClass("x");
    $("#winner").addClass("hide");
    $("#player").text("Player One Turn");
    turns = 0;
  }

  //Game Start
  $(".cell").on("click", function () {
    turns++;
    if (turns % 2 !== 0) {
      $(this).text("o");
      $(this).addClass("o");
      $("#player").text("Player Two Turn");
    } else {
      $(this).text("x");
      $(this).addClass("x");
      $("#player").text("Player One Turn");
    }

    //Declare winner of the game
    if (
      (cell1.hasClass("o") && cell2.hasClass("o") && cell3.hasClass("o")) ||
      (cell4.hasClass("o") && cell5.hasClass("o") && cell6.hasClass("o")) ||
      (cell7.hasClass("o") && cell8.hasClass("o") && cell9.hasClass("o")) ||
      (cell1.hasClass("o") && cell4.hasClass("o") && cell7.hasClass("o")) ||
      (cell2.hasClass("o") && cell5.hasClass("o") && cell8.hasClass("o")) ||
      (cell3.hasClass("o") && cell6.hasClass("o") && cell9.hasClass("o")) ||
      (cell1.hasClass("o") && cell5.hasClass("o") && cell9.hasClass("o")) ||
      (cell3.hasClass("o") && cell5.hasClass("o") && cell7.hasClass("o"))
    ) {
      $("#player").text("");
      $("#winner").removeClass("hide");
      $("#winner").text("O is the Winner!");
      turns = 0;

    } else if (
      (cell1.hasClass("x") && cell2.hasClass("x") && cell3.hasClass("x")) ||
      (cell4.hasClass("x") && cell5.hasClass("x") && cell6.hasClass("x")) ||
      (cell7.hasClass("x") && cell8.hasClass("x") && cell9.hasClass("x")) ||
      (cell1.hasClass("x") && cell4.hasClass("x") && cell7.hasClass("x")) ||
      (cell2.hasClass("x") && cell5.hasClass("x") && cell8.hasClass("x")) ||
      (cell3.hasClass("x") && cell6.hasClass("x") && cell9.hasClass("x")) ||
      (cell1.hasClass("x") && cell5.hasClass("x") && cell9.hasClass("x")) ||
      (cell3.hasClass("x") && cell5.hasClass("x") && cell7.hasClass("x"))
    ) {
      $("#player").text("");
      $("#winner").removeClass("hide");
      $("#winner").text("X is the Winner!");
      turns = 0;

      //Tie Game Mode
    } else {
      if (turns === 9) {
        $("#player").text("");
        $("#winner").removeClass("hide");
        $("#winner").text("Tie Game");
      }
    }
  });
});