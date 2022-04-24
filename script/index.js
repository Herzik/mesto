const popupWindow = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-icon')
const popupCloseButton = document.querySelector('.popup__close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')
const popupForm = document.querySelector('.popup__form')

const elementsWrapper = document.querySelector('.elements')

function openCloseModalWindow() {
  popupWindow.classList.toggle('popup_active')
  popupWindow.classList.toggle('fade-in')
  popupWindow.classList.toggle('fade-out')

  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
}

profileEditButton.addEventListener('click', openCloseModalWindow)

popupCloseButton.addEventListener('click', openCloseModalWindow)

function editProfile(event) {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value
  openCloseModalWindow()
}

popupForm.addEventListener('submit', editProfile)

function likedElement(event) {
  let target = event.target
  if (target.classList.contains('element__like')) {
    target.classList.toggle('element__like_non-active')
    target.classList.toggle('element__like_active')
  }
}

elementsWrapper.addEventListener('click', likedElement)
