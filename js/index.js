var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  prevNextButtons: false,
  pageDots: false
});
// elements
var cellsButtonGroup = document.querySelector('.button-group--cells');
var cellsButtons = utils.makeArray( cellsButtonGroup.children );

// update buttons on select
flkty.on( 'select', function() {
  var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
  var selectedButton = cellsButtonGroup.children[ flkty.selectedIndex ];
  previousSelectedButton.classList.remove('is-selected');
  selectedButton.classList.add('is-selected');
});

// cell select
cellsButtonGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = cellsButtons.indexOf( event.target );
  flkty.select( index );
});
// previous
var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});
// next
var nextButton = document.querySelector('.button--next');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});
