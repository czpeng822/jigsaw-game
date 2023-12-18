document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image, .img1, .img2');

    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            event.target.style.display = 'none';
            console.log('Image hidden');
        });
    });

    function reset() {
        var image = document.querySelector('.image');
        var img1 = document.querySelector('.img1');
        var img2 = document.querySelector('.img2');

        image.style.display = 'block';
        img1.style.display = 'flex';
        img2.style.display = 'flex';
        console.log('reset success');
    }
let btn=document.getElementById('reset')
btn.onclick=reset;
})
