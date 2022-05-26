const popups = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_type_profile')
const popupAddCard = document.querySelector('.popup_type_add-card')
const popupCardImage = document.querySelector('.popup_type_card-image')
const popupActiveClass = 'popup_active'
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

const openPopup = (popup) => {
  popup.classList.add(popupActiveClass)

  clearValidationError(popup)

  document.addEventListener('keydown', (evt) => closePopupWithEsc(evt, popup))

  disableSubmitButton(popup.querySelector('.popup__button'), 'popup__button_disabled')
}

const closePopup = (popup) => {
  popup.classList.remove(popupActiveClass)
}

const closePopupWithEsc = (evt, popup) => {
  if (evt.key === 'Escape') {
    closePopup(popup)
  }
}

const closePopupClickOnOverlay = (popup, overlayClass) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains(overlayClass)) {
      closePopup(popup)
    }
  })
}

const openEditProfile = () => {
  openPopup(popupEditProfile)
  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
}

const editProfile = (event) => {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value
  closePopup(popupEditProfile)
}

const openAddCardPopup = () => {
  openPopup(popupAddCard)
}

const addCard = (event) => {
  event.preventDefault()
  const name = inputPlaceName.value
  const link = inputPlaceLink.value
  const alt = inputPlaceName.value

  renderCard(elementsWrapper, createCard(link, alt, name))
  closePopup(popupAddCard)
  addCardPopupForm.reset()
}

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

closePopupClickOnOverlay(popupAddCard, popupOverlayClass)
closePopupClickOnOverlay(popupCardImage, popupOverlayClass)
closePopupClickOnOverlay(popupEditProfile, popupOverlayClass)

const createCard = (src, alt, name) => {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true)
  const imageElement = cardElement.querySelector('.element__image')
  const nameElement = cardElement.querySelector('.element__name')
  const popupImage = popupCardImage.querySelector('.popup__card-image')
  const popupCardTitle = popupCardImage.querySelector('.popup__card-title')

  imageElement.src = src
  imageElement.alt = alt
  nameElement.textContent = name

  cardElement.querySelector('.element__like').addEventListener('click', (e) => {
    e.target.classList.toggle('element__like_active')
  })

  cardElement.querySelector('.element__delete').addEventListener('click', (e) => {
    e.target.closest('.element').remove()
  })

  imageElement.addEventListener('click', (e) => {
    popupImage.src = src
    popupImage.alt = alt
    popupCardTitle.textContent = name
    openPopup(popupCardImage)
  })

  return cardElement
}

const renderCard = (parrent, element) => {
  parrent.prepend(element)
}

initialCards.forEach((item) => {
  renderCard(elementsWrapper, createCard(item.link, item.name, item.name))
})
