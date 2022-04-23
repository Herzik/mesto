function openCloseModalWindow() {
  const popupWindow = document.querySelector('.popup')

  popupWindow.classList.toggle('popup_active')
}

function manipulationModalWindow() {
  const profileEditButton = document.querySelector('.profile__edit-icon')
  const popupCloseButton = document.querySelector('.popup__close')

  profileEditButton.addEventListener('click', openCloseModalWindow)

  popupCloseButton.addEventListener('click', openCloseModalWindow)
}

function editProfile() {
  const profileName = document.querySelector('.profile__name')
  const profileDescription = document.querySelector('.profile__description')
  const inputName = document.querySelector('#profile-name')
  const inputDescription = document.querySelector('#profile-description')
  const popupForm = document.querySelector('.popup__form')

  inputName.value = profileName.textContent
  inputDescription.value = profileDescription.textContent

  popupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    profileName.textContent = inputName.value
    profileDescription.textContent = inputDescription.value

    openCloseModalWindow()
  })
}

manipulationModalWindow()

editProfile()
