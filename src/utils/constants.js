const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  inputErrorSelector: '.popup__input-error',
}

const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'b68ec8e8-fa4a-49bc-9d89-b437a1d32c40',
    'Content-Type': 'application/json',
  },
}

const popupEditProfile = document.querySelector('.popup_type_profile')
const popupAddCard = document.querySelector('.popup_type_add-card')

const profileEditButton = document.querySelector('.profile__edit-icon')
const buttonAddCard = document.querySelector('.profile__add-button')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')

const profileAvatar = document.querySelector('.profile__avatar')

export {
  initialCards,
  validationConfig,
  popupEditProfile,
  popupAddCard,
  profileEditButton,
  buttonAddCard,
  profileName,
  profileDescription,
  inputName,
  inputDescription,
  apiConfig,
  profileAvatar,
}
