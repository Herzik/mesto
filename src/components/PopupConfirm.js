import Popup from './Popup.js'

export default class popupConfirm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector)
    this._buttonSubmit = this._popup.querySelector('.popup__button')
    this._defaultTextButton = this._buttonSubmit.textContent
    this._submitHandler = submitHandler
    this._submitHandlerClick = () => {}
  }

  setTextButton(text) {
    this._buttonSubmit.textContent = text
  }

  defaultTextButton() {
    this._buttonSubmit.textContent = this._defaultTextButton
  }

  setEventListeners() {
    super.setEventListeners()
  }

  open(item) {
    super.open()
    this._submitHandlerClick = this._submitHandler.bind(null, item)
    this._buttonSubmit.addEventListener('click', this._submitHandlerClick)
  }

  close() {
    super.close()
    this._buttonSubmit.removeEventListener('click', this._handleConfirmClick)
  }
}
