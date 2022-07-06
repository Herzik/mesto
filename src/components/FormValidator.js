export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._inputErrorSelector = config.inputErrorSelector
    this._formElement = formElement

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
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
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Переключение состояния кнопки Submit
  //=====================
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton()
    } else {
      this._enableSubmitButton()
    }
  }

  _disableSubmitButton() {
    if (this._buttonElement) {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.disabled = true
    }
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass)
    this._buttonElement.disabled = false
  }
  /* ************************************** */

  //=====================
  //NOTE: Включает валидацию формы для всех инпутов
  //=====================
  enableValidation() {
    this._toggleButtonState()

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      })
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Очищает форму
  //=====================
  cleanUpForm() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })

    this._toggleButtonState()
  }
  /* ************************************** */
}
