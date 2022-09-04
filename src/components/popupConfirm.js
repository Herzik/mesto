import Popup from './Popup.js'

export default class popupConfirm extends Popup {
  constructor({ handleConfirm }, popupSelector) {
    super(popupSelector)
    this._buttonSubmit = this._popup.querySelector('.popup__button')
    this._defaultTextButton = this._buttonSubmit.textContent
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

  open() {
    super.open()
  }

  close() {
    super.close()
  }
}
