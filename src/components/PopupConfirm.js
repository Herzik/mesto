import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    super(popupSelector)
    this._buttonSubmit = this._popup.querySelector('.popup__button')
    this._defaultTextButton = this._buttonSubmit.textContent
    this._submitHandler = submitHandler
    this._submitHandlerClick = () => {}
  }

  renderLoading(isLoading, loadingText = 'Удаляется...') {
    if (isLoading) {
      this._buttonSubmit.textContent = loadingText
    } else {
      this._buttonSubmit.textContent = this._defaultTextButton
    }
  }

  open(item) {
    super.open()
    this._submitHandlerClick = this._submitHandler.bind(null, item)
    this._buttonSubmit.addEventListener('click', this._submitHandlerClick)
  }

  close() {
    super.close()
    this._buttonSubmit.removeEventListener('click', this._submitHandlerClick)
  }
}
