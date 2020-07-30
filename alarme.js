//OCLOCK//

//ALARME//

$(document).ready(function(){


//Action de cliquer sur le bouton "alarme"
$("#alarme").click(function(){
  $("h1").html("Alarme");
  $(".bloc").empty();

   //Formulaire alarme
   $(".bloc").append("<div id='alarme'></div>");
   $(".bloc").append("<div id='table'><table id='alarm_table'></table></div>");
   $('#alarm_table').before("<h2>Alarme enregistrée</h2>");
   $('#alarm_table').append('<tr><th>Heure</th><th>Description</th></tr><br/>');
   var formalarme = '<div id="minuteur_form"><input type="time" name="time" id="time"><input type="desc" name="desc" id="desc"><button type="submit" name="alarm_set" id="alarm_set">Valider</button></div>';
   $("#alarme").html(formalarme);
   
 
  function alarm(target,desc){
  
    var today = new Date();

    deux_chiffres = function(element){
      if(element < 10){
        return element = "0" + element;
      }
      else{
        return element;
      }
    }

    //Pour l'affichage de la variable "rendu"
    var h =deux_chiffres(today.getHours());
    var m =deux_chiffres(today.getMinutes());
    var s =deux_chiffres(today.getSeconds());
    var rendu = h + ":" + m + ":" + s;

    //Si l'heure actuelle est égale à celle de l'alarme
    if(target === rendu){
      alert(desc);
      return "1";
    }
  }

  //Quand on définit une alarme
  $("#alarm_set").click(function (){

  //On récupère les données du formulaire
  //Par défaut, on ajoute 00 pour les secondes
  var time = $('#time').val()+":00";
  var desc = $('#desc').val();

  //Appel de la fonction qui définit l'alamre
  const timer=setInterval(() => {
    const sonnerie=alarm(time,desc);
    //Quand l'alarme sonne 
    if(sonnerie==="1")
    {
      //On arrête l'alarme
      clearInterval(timer);
      //On supprime l'alarme du tableau
      var alarme=$('tr').children().attr("innerHTML",time);

      alarme.remove();
    }
  }, 500);


  //On enregistre l'alarme dans un tableau
  var array=[];
  array.push([time,desc]);

  //On vide le tableau puis on le réemplit
  $('#alarm_table').empty();


  $.each(array, function (index, value) 
    {
      $('#alarm_table').append('<tr id=_'+index+'><td>' + value[0] + '</td><td>' + value[1] +'</td></tr>');
    });
  });

});

});

