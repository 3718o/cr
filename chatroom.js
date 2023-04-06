            $(document).ready(function () {
              cometApi.start({node: "app.comet-server.ru", dev_id: 15})

              cometApi.subscription("simplechat.newMessage", function (event) {
                $("#web_chat").append('<b>' + HtmlEncode(event.data.name) + '</b>')
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
            function send() {
              var name = $('#n').val();
              var text = $('#t').val();
               

              $.ajax({
                url: "https://comet-server.com/doc/CppComet/chat-example/chat.php",
                type: "POST",
               data: "text=" + encodeURIComponent(text) + "&name=" + " 👤 " + encodeURIComponent(name) + " - " + new Date().toLocaleTimeString()
              });
              document.getElementById("t").value = "";
            }
            
