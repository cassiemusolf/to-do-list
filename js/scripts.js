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

    var allTasks= ["new-task1", "new-task2", "new-task3", "new-task4", "new-task5"];

  // $("#list").append(List);

    allTasks.forEach(function(task) {
      var userInput = $("input#" + task).val();
      $("#toDoList").append("<li class='striker'>" + userInput + "</li>");
    });

    allTasks.forEach(function(task) {
      var userInput = $("input#" + task).val();
      $(".striker").click(function() {
      $(this).wrap("<strike>");
    });
  });


  $("input#new-task1").val("");
  $("input#new-task2").val("");
  $("input#new-task3").val("");
  $("input#new-task4").val("");
  $("input#new-task5").val("");
    //
    // $(".new-task1").click(function() {
    //   $(".new-task1").wrap("<strike>");
    // });
    // $(".second-task").click(function() {
    //   $(".second-task").hide();
    // });
    // $(".third-task").click(function() {
    //   $(".third-task").hide();
    // });
    // $(".fourth-task").click(function() {
    //   $(".fourth-task").hide();
    // });
    // $(".fifth-task").click(function() {
    //   $(".fifth-task").hide();
    // });

  });
});
