//difeine Timer
var num=0;
var timecount=setInterval(function(){
  document.getElementById('timer').innerText=num++},1000);
/*
var images = document.querySelectorAll('.image, .img1, .img2');

    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            event.target.style.display = 'none';
            console.log('Image hidden');
        });
    });
*/

//define hint
function hint(){
  var image = document.querySelector('.image');
  image.style.display = 'block';
  setTimeout(function () {
      image.style.display = 'none';
  }, 1000);
}
let hint_btn=document.getElementById("hint");
hint_btn.onclick=hint;

//randam the diagram
function reset_image_container(){
  diagram_list=["image1.jpeg","image2.jpeg"];
  var img1 = document.querySelector('.img1');
  var img2 = document.querySelector('.img2');
  var j=Math.floor(Math.random()*diagram_list.length)
  img1.src=diagram_list[j];
  diagram_list.splice(j,1);
  img2.src=diagram_list[0];
}
reset_image_container();
//define reset
function reset() {
    var image = document.querySelector('.image');
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var container1 = document.querySelector('.container1');
    var container2 = document.querySelector('.container2');

        reset_image_container();
        image.style.display = 'none';
        img1.style.display = 'flex';
        img2.style.display = 'flex';
        container1.src="";
        container2.src="";
        num=0;
        console.log('reset success');
    }
let btn_reset=document.getElementById('reset');
btn_reset.onclick=reset

//drag the diagram
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

//check the game is over
  function check() {
      var container1 = document.querySelector('.container1');
      var container2 = document.querySelector('.container2');

      if (container1 && container2) {
          if (container1.src.includes("image1.jpeg")&&container2.src.includes("image2.jpeg")) {
              alert("congratulation! You win! You have spent "+num+" seconds for it.");
              reset();
          }
      }
  }
