const profileEditButton = document.querySelector('.profile__edit-icon')
const popupWindow = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close')

function manipulationModalWindow() {
  popupWindow.classList.toggle('popup_active')
}

profileEditButton.addEventListener('click', manipulationModalWindow)

popupCloseButton.addEventListener('click', manipulationModalWindow)
