// объявление переменных:

var BottomPosition = 0; // положение страницы
var BottomFlag = false; // флаг для отображения кнопки GO TO BOTTOM
var AnimateFlag = false;// Флаг для выполнения анимации
	
	$(document).ready(function() {
		$('.inTop').click(function() {  // клик по кнопке GO TO TOP/GO TO BOTTOM
			if(BottomFlag) { // если нажата кнопка GO TO BOTTOM...
			AnimateFlag = true; // выполняется анимация
				$("body.html").animate({"scrollTop":BottomPosition}, 200, function() { // ...происходит возврат в нужное место страницы со скоростью 200
					AnimateFlag = false; // закончилось выполнение анимации
				});
			BottomFlag = false; // заменяем кнопку
			$('.inTop').html('');//GO TO TOP
			}
			else { // если нажата кнопка GO TO TOP...
				$("body,html").animate({"scrollTop":0}, 200, function() { // ...происходит возврат в начало страницы со скоростью 200
					AnimateFlag = false;
				});
				BottomPosition = $(window).scrollTop();  // запоминаем, до какой позиции была прокручена страница
				BottomFlag = true; // показываем кнопку GO TO BOTTOM
				$('.inTop').html(''); //GO TO BOTTOM
			}
		});
	 
		// осуществляем проверку при прокручивании страницы:

		$(window).scroll(function(event) {
			var countScroll = $(window).scrollTop();
			if (countScroll > 700 && !AnimateFlag) { // если пользователь промотал более 200 пикселей...
				$('.inTop').show(); // ...показываем кнопку GO TO TOP
				if(BottomFlag) {
					BottomFlag = false;
					$('.inTop').html('');//GO TO TOP
				}
			}
			else {
				if(!BottomFlag) {
					$('.inTop').hide(); // в других случаях прячем кнопку, если только это не кнопка GO TO BOTTOM
				}
			}
		});
	});