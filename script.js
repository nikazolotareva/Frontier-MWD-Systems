'use strict';
window.onload = ()=> {
    //сброс положения на сайте после обновления страницы
    document.body.scrollTop = "0";

    //плавный скролл
    window.scrollTo(0, 999, {
        behavior: 'smooth'
    });

   //скрыть/показать меню по нажатию кнопки
   let nav   = document.getElementsByClassName('nav');
   let btn1 = document.querySelector('.menubtn');
   let btn2 = document.querySelector('.menubtn2');

    function clck (){
        //изменить цвет первого блока
        nav[0].classList.toggle('nav-hidden');
        //скрыть второй блок
    };

    function clck2 (){
        //изменить цвет первого блока
        nav[1].classList.toggle('nav-hidden');
        //скрыть второй блок
    };

    //щелчок по кнопке
    btn1.addEventListener('click', clck);
    btn2.addEventListener('click', clck2);

};

