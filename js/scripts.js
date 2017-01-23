//business logic
function List(task1, task2, task3, task4, task5) {
  this.firstTask = task1;
  this.secondTask = task2;
  this.thirdTask = task3;
  this.fourthTask = task4;
  this.fifthTask = task5;
}

List.prototype.fullList = function() {
  return this.firstTask + " " + this.secondTask + " " + this.thirdTask + " " + this.fourthTask + " " + this.fifthTask;
}

//user interface logic
$(document).ready(function() {
  $("form#taskList").submit(function(event){
    event.preventDefault();

    var inputtedFirstTask = $("input#new-task1").val();
    var inputtedSecondTask = $("input#new-task2").val();
    var inputtedThirdTask = $("input#new-task3").val();
    var inputtedFourthTask = $("input#new-task4").val();
    var inputtedFifthTask = $("input#new-task5").val();

    var newList = new List(inputtedFirstTask, inputtedSecondTask, inputtedThirdTask, inputtedFourthTask, inputtedFifthTask);

    // $("ul#toDoList").append("<li><span class='show'>" + newList.fullList() + "</span></li>");

    // $(".show").last().click(function() {
    $(".first-task").text(newList.firstTask);
    $(".second-task").text(newList.secondTask);
    $(".third-task").text(newList.thirdTask);
    $(".fourth-task").text(newList.fourthTask);
    $(".fifth-task").text(newList.fifthTask);

    $(".first-task").click(function() {
      $(".first-task").hide();
    });
    $(".second-task").click(function() {
      $(".second-task").hide();
    });
    $(".third-task").click(function() {
      $(".third-task").hide();
    });
    $(".fourth-task").click(function() {
      $(".fourth-task").hide();
    });
    $(".fifth-task").click(function() {
      $(".fifth-task").hide();
    });
    // });

    $("input#new-task1").val("");
    $("input#new-task2").val("");
    $("input#new-task3").val("");
    $("input#new-task4").val("");
    $("input#new-task5").val("");
  });
});
