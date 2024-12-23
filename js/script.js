const usuarios = [
    ["usuario1", "cont1"],
    ["usuario2", "cont2"],
    ["usuario3", "cont3"],
];


function cambiarColor(btn) {
    setTimeout(function () { btn.style.backgroundColor = 'orange'; }, 0);
}


$(document).ready(function(){
    var progressBar = $('.progress-bar');
    var width = 0;
    var interval = setInterval(function(){
      width += 5; 
      progressBar.css('width', width + '%').attr('aria-valuenow', width);

      if(width >= 100){
        clearInterval(interval);
      }
    }, 500); 
  });


  document.getElementById('nav-titulo').addEventListener('click', function() {
    window.location.href = './index.html';
  });