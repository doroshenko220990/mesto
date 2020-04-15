
let popup = document.querySelector('.popup'),
    popupToggle = document.querySelector('.profile__edit-button'),
    popupClose = document.querySelector('.popup__closed'),
    popupName = document.querySelector('.popup__input-name'),
    popupProfession = document.querySelector('.popup__input-profession'),
    popupSubmit = document.querySelector('.popup__submit-btn');
    
let popupTitle = document.querySelector('.profile__title'),   
    popupSubtitle = document.querySelector('.profile__subtitle');
  

    function openPopup() {
        popup.classList.add('popup_opened');
        popupName.value = popupTitle.textContent;
        popupProfession.value = popupSubtitle.textContent;
    };

    popupToggle.addEventListener('click', openPopup);

   function closePopup() {
        popup.classList.remove('popup_opened');
       
    };

    popupClose.addEventListener('click', closePopup);

let popupForm = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    popupTitle.textContent = popupName.value;
    popupSubtitle.textContent = popupProfession.value;
    popup.classList.remove('popup_opened');
}


popupSubmit.addEventListener('click', formSubmitHandler);

popupSubmit.addEventListener('submit', formSubmitHandler);





 