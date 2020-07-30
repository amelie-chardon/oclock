//OCLOCK//

//CHRONO//
$(document).ready(function(){


//Action de cliquer sur le bouton "chrono"
$("#chrono").click(function(){
  $("h1").html("Chronometre");
  $(".bloc").empty();

  //Ajout chrono
  $(".bloc").append("<div id='chronometre'></div>");
   $(".bloc").append("<div id='table'><table id='chrono_table'></table></div>");
  var formchrono = '<input type="text" id="chronotime" value="0:00:00:00"/><button type="submit" id="startstop">Start/Pause</button><button type="submit" id="reset">Reset</><button type="submit" id="lap">Lap</button>';
  $("#chronometre").html(formchrono);
  $('#chrono_table').before("<h2>Temps au tour</h2>");
  $('#chrono_table').append('<tr><th>N°</th><th>Temps cumulé</th></tr><br/>');

  //Initialisation du chrono
  var on = false;
  var reset = true;


  //Fonction chrono
  function chrono(){
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours()-1;
    if (min < 10){
      min = "0" + min
    }
    if (sec < 10){
      sec = "0" + sec
    }
    if(msec < 10){
      msec = "00" +msec
    }
    else if(msec < 100){
      msec = "0" +msec
    }
  
    time=hr + ":" + min + ":" + sec + ":" + msec;
    document.getElementById("chronotime").value=time;
  }



$("#startstop").click(function(){
  if(on===false){
    if(reset===true)
    {
    start = new Date();
    timerID = setInterval(chrono, 10);
      on = true;
      reset=false;
    }
    else
    {
      restart=new Date();
      pause=restart-diff;
      start=new Date(pause);
      timerID = setInterval(chrono, 10);
      on = true;
      reset=false;
    }
  }
  else
  {
    clearInterval(timerID);
    on = false;
  }
});


$("#reset").click(function(){
    clearInterval(timerID);
    document.getElementById("chronotime").value='0:00:00:00';
    reset = true;
});

var tTime=[]; //tableau des temps intermédiaires (lap)
var nTime=0; //compteur des temps intermédiaires
$("#lap").click(function(){
  

   //Affichage des temps au tour
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours()-1;
    if (min < 10){
      min = "0" + min
    }
    if (sec < 10){
      sec = "0" + sec
    }
    if(msec < 10){
      msec = "00" +msec
    }
    else if(msec < 100){
      msec = "0" +msec
    }
  
    time=hr + ":" + min + ":" + sec + ":" + msec;
    tTime[nTime]=time;
    nTime++;

    $('#chrono_table').append('<tr><td>' + nTime + '</td><td>' + tTime[nTime-1] +'ms </td></tr>');
  });
});

});