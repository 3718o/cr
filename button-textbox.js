//Text on text

function s() {
	 if(document.getElementById("n").value==="") { 
            document.getElementById('close').disabled = true; 
        } else { 
            document.getElementById('close').disabled = false;
        }
    }

//Button and text

var $input = $('input[type="text"]');
var $button = $('input[type="button"]');

setInterval(function(){
    if($input.val().length > 0){
        $button.attr('disabled', false);
    }else{
        $button.attr('disabled', true);
    }
}, 100);

//Popup code

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
          document.querySelector(".popup").style.display = "block";
          document.querySelector(".overlay").style.display = "block";
        },
        20
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

//
