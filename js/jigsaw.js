var images = document.querySelectorAll('.image, .img1, .img2');

    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            event.target.style.display = 'none';
            console.log('Image hidden');
        });
    });

/*for (var i=0;i<3;i++){
    images[i].addEventListener('click', function(event) {
        event.target.style.display = 'none';
        console.log('Image hidden');
    });
}*/

function reset() {
    var image = document.querySelector('.image');
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var container1 = document.querySelector('.container1');
    var container2 = document.querySelector('.container2');


        image.style.display = 'block';
        img1.style.display = 'flex';
        img2.style.display = 'flex';
        container1.src="";
        container2.src="";

        console.log('reset success');
    }
let btn=document.getElementById('reset');
btn.onclick=reset

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("Image",ev.target.id);
}

function drop(ev)
{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Image");
    ev.target.src = document.getElementById(data).src;
    ev.target.alt = document.getElementById(data).alt;
    ev.target.width = document.getElementById(data).width;
    ev.target.height = document.getElementById(data).height;
    document.getElementById(data).style.display='none';
    setTimeout(function() {
    check();}, 500);
}

  function check() {
      var container1 = document.querySelector('.container1');
      var container2 = document.querySelector('.container2');

      if (container1 && container2) {
          if (container1.src.includes("image1.jpeg")&&container2.src.includes("image2.jpeg")) {
              alert("Game over, you win!");
              reset();
          }
      }
  }
