function sendData() {
    var params = new URL(document.location).searchParams;
    var code = params.get("id");
    var request = new XMLHttpRequest();
    var obj = {id: code};
    var data = JSON.stringify(obj); 
    var path =
      "https://calm-shore-44304.herokuapp.com/post_oauth" ;
    request.open("POST", path, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
          
        var risposta = JSON.parse(this.response);
        localStorage.setItem("username", risposta.username);
        alert(" Please take notes of these credentials as you might need to use them:\nYour nickname: " +
        risposta.username + 
        "\nYour password: " +
        risposta.password );
        document.getElementById("username").innerHTML = "Hi " + risposta.username;
      } else {
        alert("Something went wrong! Try again!\nMessage: " + this.responseText);
        
      }
    };
    request.setRequestHeader("Content-type", "text/plain");
    request.send(data);
  }
  //fine

  
  $(document).ready(function () {
    var url = window.location.href;
    var find = /\?/;
    if (find.test(String(url).toLowerCase()) == true) {
        //alert("Came from google or github!")
      sendData();
    }
    else{
      document.getElementById("username").innerHTML = "Hi " + localStorage.getItem("username");}
    

  });
  
  function start(){
    var image = $("input[type='radio'][name='avatar']:checked").val();
  var img_src = "";
    
    if(image == "Uncle Vernon") img_src = "../Images/Avatars_images/vern1.jpg";
  else if(image == "Aunt Petunia") img_src = "../Images/Avatars_images/pet1.jpg" ;
  else if(image == "Jacob Kowalski") img_src = "../Images/Avatars_images/kowalski2.JPG";
  else img_src ="../Images/Avatars_images/marge1.jpg";
  var request = new XMLHttpRequest();
  //alert("You selected: " + img_src);
  var obj = {username :  localStorage.username , avatar: img_src};
  var data = JSON.stringify(obj); 

  
  
  request.open('POST', 'https://calm-shore-44304.herokuapp.com/user/set_avatar' , true)
  request.onload = function() {
  // Begin accessing JSON data here
  if (request.status >= 200 && request.status < 400) {
      
      alert("You have successfully completed the sign up!");
      //memorizzazione
      localStorage.setItem("avatar", img_src);
       //Reindirizzamento
        window.location.href = "..\Profile\Profile.html";
       
       } 
  else {
      
      alert("Something went wrong! Please try again :)");
      } 
}
request.setRequestHeader("Content-type", "text/plain");
request.send(data); 

  }