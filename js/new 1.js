$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
start = function() {
	$('.radial-progress').attr('data-progress',100);
}
setTimeout(start,1);
$('.radial-progress').click(start);

// Read more here: https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9