function checkForm(){     

    var request = new XMLHttpRequest();
   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username==""|| password==""){
      alert("Please fill al the information!");
      return;
    }
    var obj = {username :  username , password : password };
    var data = JSON.stringify(obj); 
   
    request.open('POST', 'https://calm-shore-44304.herokuapp.com/signin', true)
    request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
        var risposta = JSON.parse(this.response);
          
          //memorizzazione
          localStorage.setItem("username", risposta.nickname);
         //Reindirizzamento
         alert("Ok!")
          //window.location.href = "..\Feed\Feed.html";
  
         } 
    else {
        
        alert("Wrong combination of username and password!");
        } 
  }
  request.setRequestHeader("Content-type", "text/plain");
  request.send(data); 
   }
  
   function googleSignIn(){
    window.location.href='https://calm-shore-44304.herokuapp.com/auth/google_oauth2'


  
  } 
  
  function githubSignIn(){
      window.location.href='https://calm-shore-44304.herokuapp.com/auth/github'; }
