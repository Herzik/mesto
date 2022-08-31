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
const popupUpdateAvatar = document.querySelector('.popup_type_avatar') // добавить новый элемент аватара

const profileEditButton = document.querySelector('.profile__edit-icon')

const avatarEditButton = document.querySelector('.profile__avatar-wrapper')

const buttonAddCard = document.querySelector('.profile__add-button')

const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')

export {
  validationConfig,
  popupEditProfile,
  popupAddCard,
  popupUpdateAvatar,
  profileEditButton,
  avatarEditButton,
  buttonAddCard,
  inputName,
  inputDescription,
  apiConfig,
}
