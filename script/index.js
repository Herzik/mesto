const popupWindow = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-icon')
const popupCloseButton = document.querySelector('.popup__close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const inputName = document.querySelector('#profile-name')
const inputDescription = document.querySelector('#profile-description')
const popupForm = document.querySelector('.popup__form')

const elementsWrapper = document.querySelector('.elements')

function openModalWindow() {
  popupWindow.classList.add('popup_active')
  popupWindow.classList.add('fade-in')
  popupWindow.classList.remove('fade-out')

  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent
}

function closeModalWindow() {
  popupWindow.classList.remove('popup_active')
  popupWindow.classList.remove('fade-in')
  popupWindow.classList.add('fade-out')
}

function editProfile(event) {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileDescription.textContent = inputDescription.value
  closeModalWindow()
}

profileEditButton.addEventListener('click', openModalWindow)

popupCloseButton.addEventListener('click', closeModalWindow)

popupForm.addEventListener('submit', editProfile)
