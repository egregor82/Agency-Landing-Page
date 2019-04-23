$(() => {

	$('#menu-btn').on('click', ()=> {
		$(this).toggleClass('active');
		$('.dropdown-menu').toggleClass('display-menu');
		$('.burger').toggleClass('slim');
	})

	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	  });

	  $('.filters-link-group').on( 'click', 'a', function(e) {
		e.preventDefault();
		var filterValue = $( this ).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });
	  // change active class on links
	  $('.link-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'a', function() {
		  $buttonGroup.find('.active-link').removeClass('active-link');
		  $( this ).addClass('active-link');
		});
	  });
});