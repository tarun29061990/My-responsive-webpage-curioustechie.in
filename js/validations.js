
Validation = new function(){
	
	var value = "";
	var errorMessage = "";

	this.email = function(email){
		// regular expression

		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		value =  regex.test(email);
		errorMessage = "Please enter a valid email id";

		return {
			value : value,
			errorMessage : errorMessage
		};		
	}

	this.name = function(name){
		var regex = /^[A-Za-z .'-]+$/;
		value = regex.test(name);
		errorMessage = "Please enter a valid name";

		return {
			value : value,
			errorMessage : errorMessage
		};
	}

	this.message = function(message){
		var messageFlag = false;
		if(!message || /^\s*$/.test(message))
			messageFlag = false;
		else
			messageFlag = true;

		value =  messageFlag;
		errorMessage = "Please enter address";
		return {
			value : value,
			errorMessage : errorMessage
		};
	}
}();
