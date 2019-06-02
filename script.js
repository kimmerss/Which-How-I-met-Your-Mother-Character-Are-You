$("button").click(function(){
    var Month= $(".first").val();
    var favColor= $(".second").val();
        if( Month >= 6 &&  favColor ==="yellow"){
            $(".message").html("You are Ted Mosby");
        }
        else if ( Month >= 6 && favColor ==="blue"){
            $(".message").html("You are Marshall Eriksen");
        }
        else if( Month < 6 && favColor ==="yellow"){
            $(".message").html("You are Robin Charles Scherbatsky");
        }
        else if( Month < 6 && favColor ==="blue"){
            $(".message").html("You are Barney Stinson");
        }
        else{
            $(".message").html("Oops! There appears to be an error, please make sure you answered the questions correctly. :");
        }
});
            
            
    