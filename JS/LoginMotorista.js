
function validateUser(){
		var us = $("#Identificacao").val();
		
		if (us == "")
		{
			$('.erro-user').html("* Campo obrigatório")
		}
		else if (!(us == ""))
		{
			$('.user-form input[type="button"]').click(function(){
			$('form').animate({height: "toggle", opacity: "toggle"}, "slow");});
		}
}

function validateSenha(){
		var senha = $("#Senha").val();
		
		if (senha == "")
		{
			$('.erro-senha').html("* Campo obrigatório")
		}
		
		else if (!(senha == ""))
		{
		   document.write("ok");
		}
}

