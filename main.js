$(document).ready(function(){

	var timeline;
	var mytimeline;
	var update;
	var nmensajes = 0;
	var mynmensajes = 0;

	$('.window').click(function (e) {
	  $(this).tab('show')
	})

	$.getJSON( "json/timeline.json")
	.done(function(data){
		var inner = "";
		timeline = data;
		timeline.forEach(function(el,i){
			nmensajes += i;
			inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
				inner += "<img class='avatar' src='"+el.Avatar+"'></img></div>";
				inner += "<div class='col-md-7'><p> Autor: "+el.Autor+"</p>";
				inner += "<p> Titulo: "+el.Titulo+"</p></br>";
				inner += "<p> Fecha: "+el.Fecha+"</p></div>";
				inner += "<div class='col-md-2'></br><button type='button' data-toggle='collapse' data-target='#expandir"+nmensajes+"' class='btn btn-success'>";
				inner += "Expandir</button></div></div><div class='row'>";
				inner += "<div class='collapse' id='expandir"+nmensajes+"'><div class='well'>";
				inner += "<p class='contenido'>"+el.Contenido+"<p></div></div></div>";
			inner += "</div></div></div></br>";

		});
		$("#home").html(inner)
	});

	$.getJSON("json/update.json")
	.done(function(data){
		update = data;
		inner = "</br><div class='container divAct'><button id='actualizar' type='button' class='btn btn-success'>"+update.length+" Nuevos mensajes</br></div>"
		inner += $("#home").html()

		$("#home").html(inner);
	});

	$("body").on("click","#actualizar",function(){
		$(this).parent().remove();
		var inner2 = $("#home").html();
		var inner = "";
		$("#home").html("");
		nmensajes++;
		update.forEach(function(el,i){
			nmensajes +=i;
			inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
				inner += "<img class='avatar' src='"+el.Avatar+"'></img></div>";
				inner += "<div class='col-md-7'><p> Autor: "+el.Autor+"</p>";
				inner += "<p> Titulo: "+el.Titulo+"</p></br>";
				inner += "<p> Fecha: "+el.Fecha+"</p></div>";
				inner += "<div class='col-md-2'></br><button type='button' data-toggle='collapse' data-target='#expandir"+nmensajes+"' class='btn btn-success'>";
				inner += "Expandir</button></div></div><div class='row'>";
				inner += "<div class='collapse' id='expandir"+nmensajes+"'><div class='well'>";
				inner += "<p class='contenido'>"+el.Contenido+"<p></div></div></div>";
			inner += "</div></div></div></br>";
		});
		inner = inner+ inner2;
		$("#home").html(inner);
	});

	$("#myLineTab").click(function(){
		$.getJSON( "json/myline.json")
		.done(function(data){
			var inner = "";
			mytimeline = data;
			mytimeline.forEach(function(el,i){
				mynmensajes += i;
				inner += "<div class ='container'><div class='row'><div class='col-md-3'>";
					inner += "<img class='avatar' src='"+el.Avatar+"'></img></div>";
					inner += "<div class='col-md-7'><p> Autor: "+el.Autor+"</p>";
					inner += "<p> Titulo: "+el.Titulo+"</p></br>";
					inner += "<p> Fecha: "+el.Fecha+"</p></div>";
					inner += "<div class='col-md-2'></br><button type='button' data-toggle='collapse' data-target='#myexpandir"+mynmensajes+"' class='btn btn-success'>";
					inner += "Expandir</button></div></div><div class='row'>";
					inner += "<div class='collapse' id='myexpandir"+mynmensajes+"'><div class='well'>";
					inner += "<p class='contenido'>"+el.Contenido+"<p></div></div></div>";
				inner += "</div></div></div></br>";

			});
			$("#myLine").html(inner)
		});
	})

});
