
  $(function () {
    var socket = io("/test");
    $('body').click(function(){
       if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      do_something(position.coords.latitude, position.coords.longitude);
      socket.emit('input', position.coords.latitude, position.coords.longitude);
    });
  } else {
    /* geolocation IS NOT available */
  }
      
      return false;
    });
  });

 