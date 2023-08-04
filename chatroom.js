$(document).ready(function() {
  cometApi.start({ node: "app.comet-server.ru", dev_id: 15 })

  cometApi.subscription("simplechat.newMessage", function(event) {
    $("#web_chat").append('<b>' + HtmlEncode(event.data.name + (((new Date().getHours() - 1) % 12) + 1) + ":" + ((new Date().getMinutes()) < 10 ? "0" : "") + new Date().getMinutes() + ":" + ((new Date().getSeconds()) < 10 ? "0" : "") + new Date().getSeconds()) + ((new Date().getHours()) > 11 ? " PM" : " AM") + '</b>')
    $("#web_chat").append('<pre>' + HtmlEncode(event.data.text) + '</pre>')
    $("#web_chat").append('<br>')
  })
})

function HtmlEncode(s) {
  var el = document.createElement("div");
  el.innerText = el.textContent = s;
  s = el.innerHTML;
  return s;
}




document.body.onkeydown = function(event){
   event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if(keycode === 13){
        send();
    }
}

function send() {
  var name = $('#n').val(); 
  var text = $('#t').val();

  $.ajax({
    url: "https://comet-server.com/doc/CppComet/chat-example/chat.php",
    type: "POST",
    data: "text=" + encodeURIComponent(text) + "&name=" + " 👤 " + encodeURIComponent(name) + " - " 
  });
  document.getElementById("t").value = "";
}
