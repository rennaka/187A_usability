//Fancybox gallery with thumbnails
$(document).ready(function() {
		$(".gallery").fancybox({
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'inside'
				},
				overlay	: {
					opacity : 0.8,
					css : {
						'background-color' : '#000'
					}
				},
				thumbs	: {
					width	: 130,
					height	: 89,
				}
			}
		});
    });


