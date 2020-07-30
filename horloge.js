//OCLOCK//

//HORLOGE//

$(document).ready(function(){


//Action de cliquer sur le bouton "horloge"
$("#horloge").click(function(){
  $("h1").html("Horloge");
  $(".bloc").empty();
  
  //creation de la div heure
  var div = document.createElement("div");
  div.className = 'heures';
  document.querySelector(".bloc").appendChild(div);

  var show_heures = function(){
  //declaration var qui seront use pour l'affichage
    var today,heures,minutes,secondes,deux_chiffres;

    today = new Date();

    //affichage h,m,s avec deux chiffres
    deux_chiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        }
        else{
            return element;
        }
    }
    heures =deux_chiffres(today.getHours());
    minutes =deux_chiffres(today.getMinutes());
    secondes =deux_chiffres(today.getSeconds());
    
    //insert in HTLM
    var text='<p>'+heures + ":" + minutes + ":" + secondes+'</p>';
    $(".heures").html(text);
    //ou bien j'aurait pu la mettre dans une function "refresh" et y faire appel ici
    setTimeout(show_heures, 1000);
}

//lancer la fonction
show_heures();

});

});
