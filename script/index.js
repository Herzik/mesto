const popups = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_type_profile')
const popupAddCard = document.querySelector('.popup_type_add-card')
const popupCardImage = document.querySelector('.popup_type_card-image')

const profileEditButton = document.querySelector('.profile__edit-icon')
const addCardButton = document.querySelector('.profile__add-button')

const popupActive = 'popup_active'

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')

const inputPlaceName = document.querySelector('#place-name')
const inputPlaceLink = document.querySelector('#place-link')

const popupFormProfile = document.querySelector('.popup__form_type_profile')
const popupFormAddCard = document.querySelector('.popup__form_type_add-card')

const elementsWrapper = document.querySelector('.elements')

const cardTemplate = document.querySelector('#card-template')

const openPopup = (popup) => {
  popup.classList.add(popupActive)
}

const closePopup = (popup) => {
  popup.classList.remove(popupActive)
}

const openEditProfile = () => {
  openPopup(popupEditProfile)
  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
  popupEditProfile.querySelector('.popup__close').addEventListener('click', () => {
    closePopup(popupEditProfile)
  })
}

const editProfile = (event) => {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value
  closePopup(popupEditProfile)
}

const openAddCardPopup = () => {
  openPopup(popupAddCard)
  popupAddCard.querySelector('.popup__close').addEventListener('click', () => {
    closePopup(popupAddCard)
  })
}

const addCard = (event) => {
  event.preventDefault()
  const name = inputPlaceName.value
  const link = inputPlaceLink.value
  const alt = inputPlaceName.value

  renderCard(elementsWrapper, createCard(link, name, name))
  closePopup(popupAddCard)
  inputPlaceName.value = ''
  inputPlaceLink.value = ''
}

popupFormAddCard.addEventListener('submit', addCard)

profileEditButton.addEventListener('click', openEditProfile)

addCardButton.addEventListener('click', openAddCardPopup)

popupFormProfile.addEventListener('submit', editProfile)

const createCard = (src, alt, name) => {
  const cardElement = cardTemplate.content.cloneNode(true)
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

  popupCardImage.querySelector('.popup__close').addEventListener('click', () => {
    closePopup(popupCardImage)
  })

  return cardElement
}

const renderCard = (parrent, element) => {
  parrent.prepend(element)
}

initialCards.forEach((item) => {
  renderCard(elementsWrapper, createCard(item.link, item.name, item.name))
})
