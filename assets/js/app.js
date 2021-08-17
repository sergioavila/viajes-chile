$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#menu').addClass('active');
    } else {
       $('#menu').removeClass('active');
    }
});
var exampleEl = document.getElementById('logo')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})
