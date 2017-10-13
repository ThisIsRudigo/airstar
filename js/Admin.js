
$("document").ready(function () {
    
  
  //business registration
    $("#submit").click(function (e) {

      // this prevent the form from cancelling
        e.preventDefault();

          
          //passing value to the id
          var name = $('#name');
          var email = $('#email');
          var password = $('#password');
           var business = $('#businessType');


           
              // calling the object
             var register = {
              name: name.val(),
              email: email.val(),
              password: password.val(),
              businessType: business.val(),
             }

              //calling the API through the post request
            $.ajax({
               type: 'POST',
               url: 'http://18.220.175.109/account/register/business',
               data: register,
               dataType: 'JSON',
               
               success: function(status){
                alert('successful registeration');
               },
               error: function(status){
                alert('error occured');
               }
            });
                
             });

           

           //student registration
            $("#signin").click(function (e) {

      // this prevent the form from cancelling
        e.preventDefault();

          
          //passing value to the id
          var name = $('#name');
          var email = $('#email');
          var password = $('#password');
           var account = $('#accountType');


           
              // calling the object
             var register = {
              name: name.val(),
              email: email.val(),
              password: password.val(),
              accountType: account.val(),
             }

              //calling the API through the post request
            $.ajax({
               type: 'POST',
               url: 'http://18.220.175.109/account/register/admin',
               data: register,
               dataType: 'JSON',
               
               success: function(status){
                alert('successful registeration');
               },
               error: function(status){
                alert('error occured');
               }
            });
                
             });



    //business login
    $("#bus").click(function(e){

      e.preventDefault();

      var email = $('#email');
      var password = $('#password');

        //object
      var login = {
        email: email.val(),
        password: password.val(),
      }
       

              //calling the API through the post request
            $.ajax({
               type: 'POST',
               url: 'http://18.220.175.109/account/login',
               data: login,
               dataType: 'JSON',
               
               success: function(status){
                alert('successful login');
                alert(response);
               },
               error: function(status){
                alert('error occured' + status.responseText);
               }
            });

    });
        


 



          // student logic
      $("login").click(function(e){
       
       
        // this prevent the form from cancelling
        e.preventDefault();
              
         //passing value to the id
          
          var email = $('#email');
          var password = $('#password');
          

             // calling the object
             var login = {
              
              email: email.val(),
              password: password.val(),
              
             }

             
              //calling the API through the post request
            $.ajax({
               type: 'POST',
               url: 'http://18.220.175.109/account/login',
               
               data: login,
               dataType: 'JSON',
              
               success: function(status){
                alert('successful login');
               },
               error: function(status){
                alert('error occured');
               }
            });

      }); 

  });




    