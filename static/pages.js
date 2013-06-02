function show_page(name) {
    $('#logo').fadeOut(500);
    $('#' + name).fadeIn(500);
}
function hide_page(name) {
    $('#' + name).fadeOut(500);
    $('#logo').fadeIn(500);
}
    
$(function() {
	var svg = $('#logo').svg();
	svg.load('static/logo.svg', { 
        addTo: false,
        changeSize: false,
	});
}); 
