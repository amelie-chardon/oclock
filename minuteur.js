//OCLOCK//

//MINUTEUR//
$(document).ready(function(){


//Action de cliquer sur le bouton "minuteur"
$("#minuteur").click(function(){
  $("h1").html("Minuteur");
  $(".bloc").empty();

  //Formulaire minuteur
  $(".bloc").append("<div id='minuteur'></div>");
  var desc="<div id='minuteur_text'><h2>Heures</h2><h2>Minutes</h2><h2>Secondes</h2></div>"
  var formminuteur = '<div id="minuteur_form"><input type="number" name="heure" id="heure" min="0" max="24" step="1" value="0" placeholder="Heure(s)"><input type="number" name="minute" id="minute" min="0" max="59" step="1" value="0" placeholder="Minute(s)"><input type="number" name="seconde" id="seconde" min="0" max="59" step="1" value="0" placeholder="Seconde(s)"><button type="submit" name="minuteur_start" id="minuteur_start">Valider</button></div>';
  
  $("#minuteur").html(desc+formminuteur);
  
    //Action de cliquer sur le bouton "minuteur"
    $("#minuteur_start").click(function(){

      //On crée la div du compteur
      $("#count").remove();
      $("#minuteur").after("<div id='count'></div>");


      const current_date = new Date();
      var h=current_date.getHours();
      var m=current_date.getMinutes();
      var s=current_date.getSeconds();


      //On récupère les valeurs du formulaire et on les convertir en int avec parseInt
      var h_input=parseInt($("#heure").val());
      var m_input=parseInt($("#minute").val());
      var s_input=parseInt($("#seconde").val());

      //On définit la date du minuteur
      var count_date = new Date();
      count_date.setHours(current_date.getHours()+h_input);
      count_date.setMinutes(m+m_input);
      count_date.setSeconds(s+s_input+2);

      // Fonction qui met à jour le compte à rebours
      var x = setInterval(function() {

      //On transforme les dates en millisecondes pour les calculs
      var countdown=count_date.getTime();
      var now = new Date().getTime();

      //On définit le temps restant
      var distance = countdown - now;

      //Calcul des heures, minutes et secondes
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);
      if( h < 10 ){ h = '0' + h; }
      if( m < 10 ){ m = '0' + m; }
      if( s < 10 ){ s = '0' + s; }

      //Affichage du résultat
      var text = "<p>"+h + ":"+ m + ":" + s + "</p>"
      $("#count").html(text);

      //Si le compte à rebours est terminé
      if (distance < 0) {
        clearInterval(x);
        $("#count").html("<p>Expiré !</p>");
        }
      }, 1000);
    });
});

});