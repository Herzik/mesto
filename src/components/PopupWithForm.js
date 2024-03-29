import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler, formActivation }) {
    super(popupSelector)
    this._form = this._popup.querySelector('.popup__form')
    this._buttonSubmit = this._form.querySelector('.popup__button')
    this._defaultTextButton = this._buttonSubmit.textContent

    this._submitHandler = submitHandler
    this._formActivation = formActivation
    this._inputList = this._form.querySelectorAll('.popup__input')
  }

  getInputValues() {
    this._formValues = {}

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value
    })

    return this._formValues
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._buttonSubmit.textContent = loadingText
    } else {
      this._buttonSubmit.textContent = this._defaultTextButton
    }
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitHandler(this.getInputValues())
    })
  }

  open() {
    this._formActivation()
    super.open()
  }

  close() {
    super.close()
    this._form.reset()
  }
}
