import { initialCards, validationConfig } from './constants.js'
import Card from './Card.js'
import FormValidator from './FormValidator.js'

const popupEditProfile = document.querySelector('.popup_type_profile')
const popupAddCard = document.querySelector('.popup_type_add-card')
const popupCardImage = document.querySelector('.popup_type_card-image')
const popupActiveClass = 'popup_active'
const popupActiveSelector = '.popup_active'
const popupCloseButtonSelector = '.popup__close'
const popupOverlayClass = 'overlay'

const profileEditButton = document.querySelector('.profile__edit-icon')
const buttonAddCard = document.querySelector('.profile__add-button')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')

const inputPlaceName = document.querySelector('#place-name')
const inputPlaceLink = document.querySelector('#place-link')

const popupFormProfile = document.querySelector('.popup__form_type_profile')
const addCardPopupForm = document.querySelector('.popup__form_type_add-card')

const elementsWrapper = document.querySelector('.elements')

const cardTemplate = document.querySelector('#card-template')

//=====================
//NOTE: Открывает модальное окно карточки
//=====================
export const openPopup = (popup) => {
  popup.classList.add(popupActiveClass)
  document.addEventListener('keydown', closePopupWithEsc)
}

const openEditProfile = () => {
  openPopup(popupEditProfile)

  validationEditProfule.cleanUpForm()

  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
}

const openAddCardPopup = () => {
  openPopup(popupAddCard)

  valadationAddCard.cleanUpForm()
}
/* ************************************** */

//=====================
//NOTE: Закрывает модальное окно карточки
//=====================
const closePopup = (popup) => {
  popup.classList.remove(popupActiveClass)
  document.removeEventListener('keydown', closePopupWithEsc)
}

const closePopupWithEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(popupActiveSelector)
    closePopup(popup)
  }
}

const closePopupWithClickOnOverlay = (evt) => {
  if (evt.target.classList.contains(popupOverlayClass)) {
    const popup = document.querySelector(popupActiveSelector)
    closePopup(popup)
  }
}
/* ************************************** */

const editProfile = (event) => {
  event.preventDefault()

  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value

  closePopup(popupEditProfile)
}

//=====================
//NOTE: Добавление карточки через форму
//=====================
const addCard = (event) => {
  event.preventDefault()
  const data = {}
  data.name = inputPlaceName.value
  data.link = inputPlaceLink.value

  renderCard(elementsWrapper, data, '#card-template')

  closePopup(popupAddCard)
  addCardPopupForm.reset()
}

//=====================
//NOTE: Создает и активирует экземпляры валидаций
//=====================
const valadationAddCard = new FormValidator(validationConfig, popupAddCard)
valadationAddCard.enableValidation()

const validationEditProfule = new FormValidator(validationConfig, popupEditProfile)
validationEditProfule.enableValidation()

//=====================
//NOTE: Слушатели событий
//=====================

addCardPopupForm.addEventListener('submit', addCard)

profileEditButton.addEventListener('click', openEditProfile)

buttonAddCard.addEventListener('click', openAddCardPopup)

popupFormProfile.addEventListener('submit', editProfile)

popupEditProfile.querySelector(popupCloseButtonSelector).addEventListener('click', () => {
  closePopup(popupEditProfile)
})

popupCardImage.querySelector(popupCloseButtonSelector).addEventListener('click', () => {
  closePopup(popupCardImage)
})

popupAddCard.querySelector(popupCloseButtonSelector).addEventListener('click', () => {
  closePopup(popupAddCard)
})

popupAddCard.addEventListener('click', closePopupWithClickOnOverlay)
popupEditProfile.addEventListener('click', closePopupWithClickOnOverlay)
popupCardImage.addEventListener('click', closePopupWithClickOnOverlay)

//=====================
//NOTE: Функция рендера карточек
//=====================
const renderCard = (parrent, data, cardSelector) => {
  const card = new Card(data, cardSelector)
  const cardElement = card.generateCard()
  parrent.prepend(cardElement)
}

//=====================
//NOTE: Генерируем карточки с данными из массива и рендерим их
//=====================
initialCards.forEach((item) => {
  renderCard(elementsWrapper, item, '#card-template')
})
