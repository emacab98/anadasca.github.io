function sendData() {
    var params = new URL(document.location).searchParams;
    var code = params.get("id");
    var request = new XMLHttpRequest();
    var obj = {id: code};
    var data = JSON.stringify(obj); 
    var path =
      "https://calm-shore-44304.herokuapp.com/post_oauth" ;
    request.open("POST", path, false);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
          alert("E' andato tutto bene! " );
          /*alert("Risposta senza parse: " + this.response);
        var risposta = JSON.parse(this.response);
        //localStorage.setItem("username", risposta.username);
  
        alert(
          "You have successfully signed in with Google!\nPlease take notes of these credentials as you might need to use them:\nYour nickname: " +
            risposta + 
            "\nYour password: " +
            risposta 
        ) */;
      } else {
        alert("Something went wrong! Try again!\nMessage: " + this.responseText);
        //window.location.href = "Home.html";
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
        alert("Came from google!")
      sendData();
    }
  });
  
