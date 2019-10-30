$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    var usersNum = parseInt($("input#userNumber").val());
    var userNumArr=[];
      console.log(usersNum)
    var numberSplit = function(){
      console.log("test")
      var usersnumcahnge = usersNum
      for(i=1; i <= usersNum; i++){
        userNumArr.push(usersnumcahnge);
        usersnumcahnge -= 1;

        }
        // var usersnumcahnge = usersNum
        // userNumArr.push(usersnumcahnge)
        // var usersnumcahnge = usersnumcahnge - 1;
      };
      console.log(numberSplit())
      console.log(userNumArr)
    });



});
