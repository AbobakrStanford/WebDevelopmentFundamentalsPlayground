$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
});


$(document).ready(function(){
    $('#left').click(function(){
        $('#img').animate({left:'50px'});
    });
    $('#right').click(function(){
        $('#img').animate({left:'50px'});
    });
});