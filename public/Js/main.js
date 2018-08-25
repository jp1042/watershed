// $(document).ready(function() {
//     console.log( "ready!" );
//     MagicScroll.play("mainScroll", 2000);
// });

$(document).click(function () {
    var myVideo = document.getElementById("dzVideo");
    myVideo.play();
});

AOS.init({
    duration: 1200,
});