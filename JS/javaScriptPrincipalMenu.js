function view(divID)
{
    var variables=new Array("home","addCountry","updateCountry","diableCountry","enableCountry");

    for (i=0;i<variables.length;i++){
        if(divID==i+1){
            document.getElementById(variables[i]).style.display = 'block';
        }
        else{
            document.getElementById(variables[i]).style.display = 'none';
        }
    }
}


function loadConfederations(categoria){
	$(document).ready(function(){
		var categorias = new Array("CAF","CONCACAF","CONMEBOL","OFC","AFC","UEFA");
		var categoriaID = $(categoria);
		$.each(categorias, function(index, value){
			categoriaID.append($("<option>", {text : value
			}));
		});
	});
}
