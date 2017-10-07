function validate(register) {
   var Uname = document.register.username.value;
   var Email = document.register.email.value;
   var Password = document.register.password.value;
   var Pword = document.register.pword.value;
   if (Uname === "" || Uname === null) {
      alert ("Please enter your username");
   }
   else if (Email === "" || Email === null) {
      alert ("Please enter your Email");
   }
   else if (Password === "" || Password === null) {
      alert ("Please enter your Password");
   }
   else if (Pword !== Password) {
      alert ("Your passwords do not match");
   }
}
function validate(login){
   var username = document.login.username.value;
   var password = document.login.password.value;
   if ( username == "bucket" && password == "1234"){
   alert ("Login successfully");
   window.location = "bucketlist.html";
   return false;
   }
}  
function main(){
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.view').on('click', function(){
    /*$(this).next().toggle();*/
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
    $(this).next().slideToggle(400);
    
  });
}
$(document).ready(main);