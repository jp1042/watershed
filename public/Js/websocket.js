
  $(function () {
    var socket = io("/test");
    // $('form').submit(function(){
    //   socket.emit('chat message', $('#m').val());
    //   $('#m').val('');
    //   return false;
    // });
    socket.on('input', function(msg){
        alert("recieved" + msg)
    });
  });