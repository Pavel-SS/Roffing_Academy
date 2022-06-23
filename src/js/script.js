// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
//Cross
window.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.roof__aside'),
    cross = document.querySelector('.cross');

    cross.addEventListener('click', () => {
        aside.classList.toggle('roof_active');
    });
})

//Modal
$('[data-modal = call]').on('click', function(){
    $('.overlay, #modal').fadeIn('slow');
})
$('.modal__close').on('click', function(){
    $('.overlay, #modal, #thanks').fadeOut('slow');
})

$('#modal form').validate({
    rules: {
          phone:{
          required: true,
          minlength: 9
          }
      },
      messages: {
        name: "Введите Ваш номер телефона",
        phone: {
          required: "Необходим Ваш номер телефона",
          minlength: "Номер должен содержать не менее 9 цифр"
        }
      }
});


const checked = document.querySelector('#checked');
const callBtn = document.querySelector('#callBtn');

checked.addEventListener('change', () => {
    if(checked.checked){
        callBtn.disabled = false;
    }else{
        callBtn.disabled = true;
    }
})
