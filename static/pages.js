function show_page(name) {
  $('#' + name).fadeIn(500);
}
function hide_page(name) {
  $('#' + name).fadeOut(500);
}

    
$(function() {
	$('#layout').svg({});
	
	var svg = $('#logo').svg();
	svg.load('static/logo.svg', { 
	addTo: false,
	changeSize: false,
	});
});   
