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
