$(document).ready(function(){      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });


var countDownDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var diff = countDownDate - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (diff < 0) {
        // countDownDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        document.getElementById("counter").innerHTML = "Offer expired";
    }
}, 1000);









