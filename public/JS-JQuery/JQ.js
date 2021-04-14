$(function(){
   
    $(document).ready(function(){
        $("#idmouseenter").mouseenter(function(){           
            $('#mouseentereffect').hide();
        });
        $('#hoverefect').hide();
         $("#idhover").hover(function(){
             $('#hoverefect').show();
         });
         $("#idfadetoggle").on("dblclick", function(){
          $("#iddfadetoggle").fadeToggle();
        });
         
          $(".btn1").click(function(){
            $("#fadeouteffect").fadeOut();
          });
          $(".btn2").click(function(){
            $("#fadeouteffect").fadeIn();
          });

        
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray");
  });
    });
  
    $("h3").click(function(){
      $("h3").css({"font-size": "310%"});
      $("h3").css({"color": "brown"});
      $("h3").css({"background": "yellow"});
      $("h3").css({"border": "5px solid #ccc" });
  

    
      $( "h3" ).one( "click", function() {
        $( this ).css( "width", "+=200" );
        
      });

      var words = $( "p" ).first().text().split( /\s+/ );
      var text = words.join( "</span> <span>" );
      $( "p" ).first().html( "<span>" + text + "</span>" );
      $( "span" ).on( "click", function() {
        $( this ).css( "background-color", "yellow" );
      });

    });
    $(document).mousemove(function(event){
      $("span").text(event.pageX + ", " + event.pageY);
    });
    $("#cssss").css({'outline': '5px dotted green'});
    $("#csss").css({'outline-style': 'dotted'});
    $('h2').css('text-shadow','#6374AB 25px -15px 3px');
  });

