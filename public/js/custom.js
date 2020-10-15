console.log('TEST.');

function new_element(){				
				var comment = $.trim($("#comment").val());
				if(comment != "")
				{
					$("	#comment").val("")
					$("#header ul").append('<li class="list-group-item"><img src="images/success.png"style="width:18px;height:18px;padding-bottom:1px;">&nbsp;&nbsp;'+comment+'<button type="button" class="ui red basic button mini del_btn" onclick="remove_element(this)" >Remove</button></li>');	
				}
			}
function remove_element(el){
       el.parentNode.parentNode.removeChild(el.parentNode);
}			