export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._inputErrorSelector = config.inputErrorSelector
    this._formElement = formElement
  }

  //=====================
  //NOTE: Показывает ошибку инпута
  //=====================
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = errorMessage
  }
  /* ************************************** */

  //=====================
  //NOTE: Скрывает ошибку инпута
  //=====================
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._inputErrorClass)
    errorElement.textContent = ''
  }
  /* ************************************** */

  //=====================
  //NOTE: Показывает или скрывает ошибку
  //=====================
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }
  /* ************************************** */

  //=====================
  //NOTE: Если инпут имеет неверный ввод
  //=====================
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Переключение состояния кнопки Submit
  //=====================
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton(buttonElement, this._inactiveButtonClass)
    } else {
      this._enableSubmitButton(buttonElement, this._inactiveButtonClass)
    }
  }

  _disableSubmitButton(buttonElement) {
    if (buttonElement) {
      buttonElement.classList.add(this._inactiveButtonClass)
      buttonElement.disabled = true
    }
  }

  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._inactiveButtonClass)
    buttonElement.disabled = false
  }
  /* ************************************** */

  //=====================
  //NOTE: Включает валидацию формы для всех инпутов
  //=====================
  enableValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

    const buttonElement = this._formElement.querySelector(this._submitButtonSelector)

    this._toggleButtonState(inputList, buttonElement)

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        console.log(this)
        this._checkInputValidity(inputElement)
        this._toggleButtonState(inputList, buttonElement)
      })
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Очищает форму
  //=====================
  cleanUpForm() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector)

    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })

    this._toggleButtonState(inputList, buttonElement)
  }
  /* ************************************** */
}
