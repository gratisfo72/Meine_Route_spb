const placesElement = document.querySelector('.places');
const cardTemplate = document.querySelector('.card-template');

function handleLikeButton (e) {
  e.target.classList.toggle('place__like-button_active');
}

function handleDeleteButton (e) {
  e.target.closest('.place').remove();
}

function initialLoad (initialArray) {
  initialArray.forEach((item) => { 
    addCard(item);
  })
}

function createCard (cardData){
  const cardElement = cardTemplate.content.querySelector('.place').cloneNode(true);
  const elementPlaceImage = cardElement.querySelector('.place__image');
  elementPlaceImage.src = cardData.link;
  elementPlaceImage.alt = cardData.name;
  cardElement.querySelector('.place__title').textContent = cardData.name;
  cardElement.querySelector('.place__like-button').addEventListener('click', handleLikeButton);
  cardElement.querySelector('.place__delete-button').addEventListener('click', handleDeleteButton);
  elementPlaceImage.addEventListener('click', () => {
    photoPopupImage.src = cardData.link;
    photoPopupImage.alt = cardData.name;
    photoPopup.querySelector('.popup__signature').textContent = cardData.name;
    openPopup(photoPopup);
  });
  return cardElement;
}

initialLoad(initialCards);


function addCard (cardData){
  placesElement.prepend(createCard(cardData));
}


