$(document).ready(function () {

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 100){
            $('header').addClass('header-fixed');
        } else{
            $('header').removeClass('header-fixed');
        }

    });

    /* btn scroll */

    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
            // удалим у кнопки класс btn-up_hide
            this.el.classList.remove('btn-up_hide');
        },
        hide() {
            // добавим к кнопке класс btn-up_hide
            this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
            // при прокрутке содержимого страницы
            window.addEventListener('scroll', () => {
                // определяем величину прокрутки
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                scrollY > 400 ? this.show() : this.hide();
            });
            // при нажатии на кнопку .btn-up
            document.querySelector('.btn-up').onclick = () => {
                // переместим в начало страницы
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }

    btnUp.addEventListener();

    /* slider Manufacture */

    const swiper = new Swiper(".mySwiperManufacture", {
        slidesPerView: 5,
        spaceBetween: 30,
        effect: "slide",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            780: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1370: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            1440: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });

})