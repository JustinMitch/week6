function nospacealphavalidate( str ) {
				var nospacealpha = /^[a-zA-Z]+$/;
				return nospacealpha.test(str);			
			}
			
			function spacealphavalidate(str){
			var spacealpha = /^[a-zA-Z ]+$/;
			return spacealpha.test(str);
			}
		
function emailvalidate (str){
			var emailval=/^[a-zA-Z]+[@]+[a-zA-Z]+(.[com]+)/;
			return emailval.test(str);
		}
			
function submitForm() {
		var email = document.getElementById('email');
		var err_email = document.getElementById('err_email');
		
		var first = document.getElementById('first');
		var err_first = document.getElementById('err_first');
	
		
		//First Name ERRORS
			var hasErrors = false;
			
			if ( first.value == "")
			{
				err_first.innerHTML = "<em>*</em>";
				first.className = "bad";
				hasErrors = true;
			} else if ( nospacealphavalidate( first.value ) == false ) {
					err_first.innerHTML = "<em>only alpha letters</em>";
					first.className = "bad";
					hasErrors = true;
			
					console.log("First needs Alpha chars");
			} 
			else {
				err_first.innerHTML = "";
				first.className = "good";
			}
			
			
			//last Name ERRORS
			var last = document.getElementById('last');
			var err_last = document.getElementById('err_last');
	
		
			var hasErrors = false;
			
			if ( last.value == "")
			{
					err_last.innerHTML = "<em>*</em>";
					last.className = "bad";
					hasErrors = true;
			} else if ( spacealphavalidate( last.value ) == false ) {
					err_last.innerHTML = "<em>only alpha letters</em>";
					last.className = "bad";
					hasErrors = true;
			
					console.log("last needs Alpha chars");
			} 
				else {
						err_last.innerHTML = "";
						last.className = "good";
					}
			
			//comment ERRORS
			
			var comment = document.getElementById('comment');
			var err_comment = document.getElementById('err_comment');
	
		
		
			var hasErrors = false;
			
			if ( comment.value == "")
				{
						err_comment.innerHTML = "<em>*</em>";
						comment.className = "*bad";
						hasErrors = true;
				} 
				else {
					err_comment.innerHTML = "";
					comment.className = "good";
			}
			
			//EMAIL ERRORS
			
		var hasErrors = false;
			//email.value ==""
		if ( !email.value.length ) 
			{
				err_email.innerHTML = "<em>please enter vaild email</em>";
				email.className = "bad";
				hasErrors = true;
			} 
			else if ( emailvalidate( email.value ) == false ) {
					err_email.innerHTML = "<em>ex:test@test.com</em>";
					email.className = "bad";
					hasErrors = true;
			
					console.log("Email needs @ and .com");
			}
				else {
					err_email.innerHTML = "";
					email.className = "good";
			}
		
		if ( hasErrors ) 
		{
			alert("Email is no good");
		} 
		else 
		{
			alert("Email is good");
		}		
}
