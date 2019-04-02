$(document).ready(function(){
  $("#quiz").submit(function(event){
    var dog = parseInt($("input:radio[name=pall]:checked").val());
    var myCat = parseInt($("input:radio[name=palTwo]:checked").val());
    var myCamel = parseInt($("input:radio[name=palThree]:checked").val());
    var myPeople = parseInt($("input:radio[name=palFour]:checked").val());
    var myWorld = parseInt($("input:radio[name=palFive]:checked").val());
var show = parseInt(dog + myCat + myCamel + myPeople + myWorld);
event.preventDefault();
        $("#death").slideDown();
        $("#results").text("your score is" + show + "%");

    });

  });
