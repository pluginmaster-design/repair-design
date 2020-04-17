// ОСТАВЬТЕ ЗАЯВКУ 
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  var modalths = $('.modalths'),
      modalBtnThs = $('[data-toggle="modalths"]'),
      closeBtnThs = $('.modalths__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  modalBtnThs.on('click', function(){
    modalths.toggleClass('modalths--visible');
  });
  closeBtnThs.on('click', function(){
    modalths.toggleClass('modalths--visible');
  });        
  	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').removeClass('modal--visible');
		}
  });
    	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modalths').removeClass('modalths--visible');
		}
	});
	// Клик по фону, но не по окну.
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			$(this).toggleClass('modal--visible');			
		}
  });
  	// Клик по фону, но не по окну.
	$('.modalths').click(function(e) {
		if ($(e.target).closest('.modalths__dialog').length == 0) {
			$(this).toggleClass('modalths--visible');			
		}
  });
  // СЛАЙДЕР НА JQUERY
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var prev = $('.swiper-button-prev');
  var next = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);
  //Валидация формы MODAL FORM___________________________________________________________________MODAL
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      minlength: 10 + 7
      },
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: { 
        required: "Заполните поле",
        minlength: "Полностью введите номер телефона"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите email в формате name@domain.com"
      },
      policyCheckbox: {
        required: "Примите соглашение об обработке персональных данных",    
      }
    },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          // alert('Перезвоним через 10 минут');
          modal.removeClass('modal--visible');
          modalths.toggleClass('modalths--visible');
        }
      });
      }  
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    // _________________________________!!!______________________________
    //Валидация формы В ФУТЕРЕ_________________________________________________________FOOTER
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      minlength: 10 + 7
    },
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: { 
        required: "Заполните поле",
        minlength: "Полностью введите номер телефона",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите email в формате name@domain.com"
      },
      policyCheckbox: {
        required: "Примите соглашение об обработке персональных данных",    
      }
    }
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
 // _________________________________!!!______________________________
  //Валидация формы "ЭКОНОМИЯ"_________________________________________________________ECONOMY
  $('.action__form').validate({
  errorClass: "invalid",
  errorElement: "div",
  rules: {
    // строчное правило. simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
    minlength: 10 + 7
  },
    // правило-объект.  compound rule
    userEmail: {
      required: true,
      email: true
    },
    policyCheckbox: {
      required: true,
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух и не длиннее 15 букв",
      maxlength: "Имя не короче двух и не длиннее 15 букв"
    },
    userPhone: { 
      required: "Заполните поле",
      minlength: "Полностью введите номер телефона",
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите email в формате name@domain.com"
    },
    policyCheckbox: {
      required: "Примите соглашение об обработке персональных данных",    
    }
  } 
  });
  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  //_____________________________________!!!____________________________
                  //  форма в секции CONTROL
                  $('.control__form').validate({
                    errorClass: "invalid",
                    errorElement: "div",
                    rules: {
                      // строчное правило. simple rule, converted to {required:true}
                      userName: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                      },
                      userPhone: {
                        required: true,
                      minlength: 10 + 7
                    },
                    policyCheckbox: {
                      required: true,
                    }
                    },
                    messages: {
                      userName: {
                        required: "Заполните поле",
                        minlength: "Имя не короче двух и не длиннее 15 букв",
                        maxlength: "Имя не короче двух и не длиннее 15 букв"
                      },
                      userPhone: { 
                        required: "Заполните поле",
                        minlength: "Полностью введите номер телефона",
                      },
                      policyCheckbox: {
                        required: "Примите соглашение об обработке персональных данных",    
                      }
                    }
                  });
                    //маска для номера телефона
                    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    //КАРТЫ ЯНДЕКСА
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.751574, 37.573856],
              zoom: 9
          }, {
              searchControlProvider: 'yandex#search'
          }),
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Вход со двора'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/marker.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });  
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
          myMap.behaviors.disable('scrollZoom');
  });
});
//КНОПКА  НАВЕРХ
(function(jq) {
  jq.autoScroll = function(ops) {
    ops = ops || {};
    ops.styleClass = ops.styleClass || 'buttonup';
    var t = jq('<div class="'+ops.styleClass+'"></div>'),
   d = jq(ops.target || document);
   jq(ops.container || 'body').append(t);
  t.css({
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0
 }).on('click', function() {
	 jq('html,body').animate({
	    scrollTop: 0
   }, ops.scrollDuration || 1000);
 });
  d.scroll(function() {
    var sv = d.scrollTop();
    if (sv < 300) {
      t.clearQueue().fadeOut(ops.hideDuration || 200);
	 return;
  }
  t.css('display', '').clearQueue().animate({
   top: sv,
   opacity: 0.8
   }, ops.showDuration || 500);
  });
  };
})(jQuery);
$(document).ready(function(){
 $.autoScroll({
 scrollDuration: 600, 
 showDuration: 600, 
 hideDuration: 300
 });
});

new WOW().init();

// // HTML CSS JSResult
// // EDIT ON
// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages = document.querySelectorAll("img.lazy");    
//   var lazyloadThrottleTimeout;
  
//   function lazyload () {
//     if(lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }    
    
//     lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//     }, 20);
//   }
  
//   document.addEventListener("scroll", lazyload);
//   window.addEventListener("resize", lazyload);
//   window.addEventListener("orientationChange", lazyload);
// });