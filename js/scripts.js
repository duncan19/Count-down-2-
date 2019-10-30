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
        userNumArr.push(usersnumcahnge)

        usersnumcahnge -= 1;
        }
        for (i = 0; i < userNumArr.length; i ++){
         if(userNumArr[i].toString().includes(3))
         {
           userNumArr[i] = 'Happy3';
         }
         else if (userNumArr[i].toString().includes(2))
         {
           userNumArr[i] = 'Happy2';
         }
         else if (userNumArr[i].toString().includes(1))
         {
           userNumArr[i] = 'Happy1';
         }

            // var usersnumcahnge = usersNum
            // userNumArr.push(usersnumcahnge)
        // var usersnumcahnge = usersnumcahnge - 1;
      };

      console.log(userNumArr)
      // userNumArr.forEach(function(){
      //   if(userNumArr === 3)
      //
      //
      // })
    };

    console.log(numberSplit())
});

});
