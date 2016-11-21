$(document).ready(function(){

    $(".fa-arrow-left").click(function(){
       
        window.location.replace("home.html");
    });

	$.ajax({
	           url: localStorage.getItem("ip")+"/eztrack/GetAccountDetails.jsp",
	            type:"GET",
	            data:{
	            	u_id: localStorage.getItem("u_id")      
	        	},
	            success: function(result){
	                       res = JSON.parse(result);
	                       if(res.name == "null"){
	                       		window.location.replace("index.html");
	                       }
	                       else{
	                       		$("#UserFullName").text(res.name);
	                       }

	                    },
	            error: function(e){
	                        alert("error" +e);
	                        window.location.replace("index.html");
	                    }
	});
});
