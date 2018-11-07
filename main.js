$(document).ready(function(){      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });






//test gallery
var bigImg = document.getElementById("big");
var subImg = document.getElementById('sub').getElementsByTagName('img');
var currentImg = 0;


for (var i = 0; i < subImg.length; i++) {
    (function(i) {
        subImg[i].addEventListener("click", function() {
            var imgSrc = this.getAttribute("src");
            bigImg.innerHTML = "<img src=" + imgSrc + ">";
            currentImg = i;
        });
    })(i);
}



document.getElementById("my-button-next").addEventListener("click", nextImage);
document.getElementById("my-button-prev").addEventListener("click", prevImage);

function nextImage() {
    currentImg++;

    if(currentImg > subImg.length-1) {
        currentImg=0;
    }
    var imgSrc = subImg[currentImg].getAttribute("src");
    bigImg.innerHTML = "<img src=" + imgSrc + ">";
}

function prevImage() {
    currentImg--;

    if(currentImg < 0) {
        currentImg=subImg.length-1;
    }
    var imgSrc = subImg[currentImg].getAttribute("src");
    bigImg.innerHTML = "<img src=" + imgSrc + ">";
}