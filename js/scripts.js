$(document).ready(function(){
    $(".slider ul").bxSlider({
        auto:true,
		slideWidth : 1540,
        //mode:'fade',  forma de trasição
       // speed: 100,  velocidade da transição
        pager: false, // sem a paginação (bolinhas)
    });

    $('.plus').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			// verticalFit: true,
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			// }
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
  });


 /* $(document).ready(function(){
	$(".slider ul").bxSlider({
	adaptiveHeight: true,
	slideWidth : 1540,
	pager: false,
	auto:true,
  });
});*/


$(document).ready(function(){
	$(".slid_galeri ul").bxSlider({
		minSlides: 9,
		maxSlides: 9,
		slideWidth: 170,
		pager: false,
		auto:true
  });
});
