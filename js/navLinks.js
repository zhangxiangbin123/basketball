
$(function() {
    $('#galleryLink').click(function() {
      var x = document.getElementById("links");
      if(x.style.display === "block")
        x.style.display = "none"; 
      else
        $('#links').show();
        return false;
    });        
});

$(function() {
    $('#teamsLink').click(function() {
      var x = document.getElementById("teams");
      if(x.style.display === "block")
        x.style.display = "none"; 
      else
        $('#teams').show();
        return false;
    });        
});