
bindEvent();


function bindEvent(){
	$("nav a").click(function(e){onNavClick(e);});
	$("#submit").click(function(e){sendEmail(e);});
	$("#name,#email,#message").blur(function(e){checkValidation(e);});
	$("#name,#email,#message").focus(function(e){removeErrorClass(e);});
	$(".openMenu").click(function(){openMenu();})
}

var onNavClick = function(e){
    var elementClicked = $(e.target).attr("href");
    console.log(elementClicked);
    var destination = $(elementClicked).offset().top;
    console.log(destination-60);
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-60}, 500,function(){});
    return false;
};

var sendEmail = function(e){
	
	var name=$("#name").val();
	var email=$("#email").val();
    var message=$("#message").val();
    if(name === ""){
    	$("#name").focus();
    }
    else if(email === ""){
    	$("#email").focus();
    }
    else if(message === ""){
    	$("#message").focus();
    }
    else{
    	var varData="name="+name+"&email="+email+"&message="+message;
    
	    var errorArr = $(".isFaulty");
	    if(errorArr.length >0){
	    	errorArr[0].focus();
	    }else{
	    	$.ajax({
		 		type:'POST',
		 		url:'send-mail.php',
		 		data: varData,
				success:function(){
					$("#thankumessage").show();
		 		}
			});
	    }
    }
}

var checkValidation = function(e){
	var id = e.target.id;
	var value = $("#"+id).val();
	var message = validateData(id,value);

	if(!message.valid){
		addErrorClass(e);
	}else{
		removeErrorClass(e);
	}
}

var validateData = function(key,value){
	data = Validation[key](value);		
	return {
		valid: data.value,
		error: data.errorMessage
	};
}

var removeErrorClass = function(e){
	var id = e.target.id;
	var errorChild = $("#"+id).parent().children()[1];
	$("#"+id).removeClass("isFaulty");
	$(errorChild).css("visibility","hidden");
}

var addErrorClass = function(e){
	var id = e.target.id;
	var errorChild = $("#"+id).parent().children()[1];
	$("#"+id).addClass("isFaulty");
	$(errorChild).css("visibility","visible");
}

var openMenu = function(){
	$("#overflowMenu").slideToggle();
}