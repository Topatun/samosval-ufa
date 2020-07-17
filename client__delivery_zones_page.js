
////////////////////////////////////////	VARS




/////////////////////////////////////////	FUNCTIONS

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};


////////////////////////////////////////// EXECUTION


	window.onload = async function(){


		var body = document.querySelector('body'),
			menu = document.querySelector('.header__menu'),
			burger = document.querySelector('.header__burger');

		burger.addEventListener('click', function(e){
			burger.classList.toggle('active');
			menu.classList.toggle('active');
			body.classList.toggle('locked');
		})



		// var sub_menu = document.querySelector('.header__sub_list'),
			// arrow = document.querySelector('.header__arrow');
		var arrows = document.querySelectorAll('.header__arrow');


		if(isMobile.any()){
			body.classList.add('touch')

			for (var i =0; i< arrows.length; i++){
				arrows[i].addEventListener('click',function (e) {
					let sub_menu = e.target.nextElementSibling
					e.target.classList.toggle('active')
					sub_menu.classList.toggle('active')
				})
			}

		}else{
			body.classList.add('desktop')
		}			
}



///////////////////////////////////////// listeners
