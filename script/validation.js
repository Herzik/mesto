const showInputError = (formElement, inputElement, errorMessage, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(inputErrorClass)
  errorElement.textContent = errorMessage
}

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(inputErrorClass)
  errorElement.textContent = ''
}

const checkInputValidity = (formElement, inputElement, inputErrorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass)
  } else {
    hideInputError(formElement, inputElement, inputErrorClass)
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, inactiveButtonClass)
  } else {
    enableSubmitButton(buttonElement, inactiveButtonClass)
  }
}

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
  if (buttonElement) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.disabled = true
  }
}

const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass)
  buttonElement.disabled = false
}

const clearValidationError = (popup) => {
  popup.querySelectorAll('.popup__input-error').forEach((error) => {
    error.textContent = ''
  })

  popup.querySelectorAll('.popup__input').forEach((input) => {
    input.classList.remove('popup__input_type_error')
  })
}

const setEventListeners = (
  formElement,
  { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector))

  const buttonElement = formElement.querySelector(submitButtonSelector)

  toggleButtonState(inputList, buttonElement, inactiveButtonClass)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputErrorClass)
      toggleButtonState(inputList, buttonElement, inactiveButtonClass)
    })
  })
}

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector))

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })

    setEventListeners(formElement, rest)
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
})
