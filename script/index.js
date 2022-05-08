const popups = document.querySelectorAll('.popup')
const popupEditProfile = document.querySelector('.popup_type_profile')
const popupAddCard = document.querySelector('.popup_type_add-card')
const profileEditButton = document.querySelector('.profile__edit-icon')
const addCardButton = document.querySelector('.profile__add-button')
const popupCloseButtons = document.querySelectorAll('.popup__close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')

const inputPlaceName = document.querySelector('#place-name')
const inputPlaceLink = document.querySelector('#place-link')

const popupFormProfile = document.querySelector('.popup__form_type_profile')
const popupFormAddCard = document.querySelector('.popup__form_type_add-card')

const elementsWrapper = document.querySelector('.elements')

const cardTemplate = document.querySelector('#card-template').content

const openPopup = (popup) => {
  popup.classList.add('popup_active')
}

const closePopup = () => {
  popups.forEach((popup) => {
    popup.classList.remove('popup_active')
  })
}

function openEditProfile() {
  openPopup(popupEditProfile)
  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
}

function editProfile(event) {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value
  closePopup()
}

function openAddCard() {
  openPopup(popupAddCard)
}

function addCard(event) {
  event.preventDefault()
  const name = inputPlaceName.value
  const link = inputPlaceLink.value
  const alt = inputPlaceName.value

  renderCard(link, alt, name)
  closePopup()
  inputPlaceName.value = ''
  inputPlaceLink.value = ''
}

popupFormAddCard.addEventListener('submit', addCard)

profileEditButton.addEventListener('click', openEditProfile)

addCardButton.addEventListener('click', openAddCard)

popupCloseButtons.forEach((button) => {
  button.addEventListener('click', closePopup)
})

popupFormProfile.addEventListener('submit', editProfile)

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

const renderCard = (src, alt, name) => {
  const cardElement = cardTemplate.cloneNode(true)

  const popupCardImage = document.querySelector('.popup_type_card-image')

  cardElement.querySelector('.element__image').src = src
  cardElement.querySelector('.element__image').alt = alt
  cardElement.querySelector('.element__name').textContent = name

  cardElement.querySelector('.element__like').addEventListener('click', (e) => {
    e.target.classList.toggle('element__like_active')
  })

  cardElement.querySelector('.element__delete').addEventListener('click', (e) => {
    e.target.closest('.element').remove()
  })

  cardElement.querySelector('.element__image').addEventListener('click', (e) => {
    popupCardImage.querySelector('.popup__card-image').src = src
    popupCardImage.querySelector('.popup__card-image').alt = alt
    popupCardImage.querySelector('.popup__card-title').textContent = name
    popupCardImage.classList.add('popup_active')
  })

  elementsWrapper.prepend(cardElement)
}

initialCards.forEach((item) => {
  renderCard(item.link, item.name, item.name)
})
