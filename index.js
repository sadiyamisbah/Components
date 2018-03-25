
  $( document ).ready(function() {

    // this is selection using class
    $(".hiding1").css("display","none");
    $(".hiding2").css("display","none");
    $(".hiding3").css("display","none");

    // this is selecion using id 
    $("p").css({"color":"#6dc8ed","text-decoration":"underline","cursor":"pointer"});
  
	$("#expand1").click(() => {
    	if($(".hiding1").css("display") == "none")
    	
    		$(".hiding1").css("display","block")
    	
    	else
    		$(".hiding1").css("display","none")

       });

	$("#expand2").click(() => {
    	if($(".hiding2").css("display") == "none")
    	
    		$(".hiding2").css("display","block")
    	
    	else
    		$(".hiding2").css("display","none")

       });

	$("#expand3").click(() => {
    	if($(".hiding3").css("display") == "none")
    	
    		$(".hiding3").css("display","block")
    	
    	else
    		$(".hiding3").css("display","none")

       });

   });

  let myFunction = () => {
    let x = document.getElementById("myTopnav");

    console.log(x)
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



/*modal*/

$(".btn").click(() => {
    $(".modal").css("display","block")

});


$(".close").click(() => {
    $(".modal").css("display","none")

});

$(".close1").click(() => {
    $(".modal").css("display","none")

});



