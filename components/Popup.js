export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)
    this._popupButtonClose = this._popup.querySelector('.popup__close')
  }

  open() {
    this._popup.classList.add('popup_active')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose)

    this._popup.classList.remove('popup_active')
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('overlay')) {
      this.close()
    }
  }

  setEventListeners() {
    this._popupButtonClose.addEventListener('mousedown', () => {
      this.close()
    })

    this._popup.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt)
    })
  }
}
