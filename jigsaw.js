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
  diagram_list=["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg","image6.jpeg","image7.jpeg","image8.jpeg","image9.jpeg","image10.jpeg","image11.jpeg","image12.jpeg","image13.jpeg","image14.jpeg","image15.jpeg","image16.jpeg"];
  var imgall = document.querySelectorAll('.image-container img');
  for(var i=0;i<16;i++){
  var j=Math.floor(Math.random()*diagram_list.length);
  imgall[i].src=diagram_list[j];
  diagram_list.splice(j,1);
}};

reset_image_container();
//define reset
function reset() {
    var containerall = document.querySelectorAll('.image-container img');
    var jigsawall = document.querySelectorAll('.image-jigsaw img');
    containerall.forEach(function(container){
      container.style.display = 'grid';
    });
    jigsawall.forEach(function(jigsaw){
      jigsaw.src = 'none.jpeg';
    });
    reset_image_container();
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
diagram_list=["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg","image6.jpeg","image7.jpeg","image8.jpeg","image9.jpeg","image10.jpeg","image11.jpeg","image12.jpeg","image13.jpeg","image14.jpeg","image15.jpeg","image16.jpeg"];
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Image");
    if(document.getElementById(data).src.includes("none.jpeg")){
      return;
    }
    else if(ev.target.src.includes("none.jpeg")){
    ev.target.src = document.getElementById(data).src;
    ev.target.alt = document.getElementById(data).alt;
    ev.target.width = document.getElementById(data).width;
    ev.target.height = document.getElementById(data).height;
    document.getElementById(data).src="none.jpeg";
    setTimeout(function() {
    check();}, 500);
}}

//check the game is over
  function check() {
    var jigsawall = document.querySelectorAll('.image-jigsaw img');
    var completetag = true;
    jigsawall.forEach(function (jigsaw) {
        if (jigsaw.src.includes('none.jpeg')) {
            completetag = false;
        }
    });

    if (completetag) {
        var machtag = true;
        jigsawall.forEach(function (jigsaw) {
            if (!jigsaw.src.includes(jigsaw.id)) {
                console.log(jigsaw.src+"---"+jigsaw.id);
                machtag = false;
            }
        });

        if (machtag) {
            alert("Congratulations! You win! You have spent " + num + " seconds for it.");
            reset();
        }
    }
    console.log("completetag:"+completetag);
    console.log("machtag:"+machtag);
}
