export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
    this._popup = document.querySelector(this._popupSelector)
    this._popupButtonClose = this._popup.querySelector('.popup__close')
  }

  //=====================
  //NOTE: Открывает попап
  //=====================
  open() {
    this._popup.classList.add('popup_active')
    document.addEventListener('keydown', this._handleEscClose)
  }
  /* ************************************** */

  //=====================
  //NOTE: Закрывает попап
  //=====================
  close() {
    document.removeEventListener('keydown', this._handleEscClose)

    this._popup.classList.remove('popup_active')
  }
  /* ************************************** */

  //=====================
  //NOTE: Закрывает попап по клавише ESC
  //=====================
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
  /* ************************************** */

  //=====================
  //NOTE: Закрывает попап по клике на оверлэй
  //=====================
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('overlay')) {
      this.close()
    }
  }
  /* ************************************** */

  //=====================
  //NOTE: Активирует слушатели событий
  //=====================
  setEventListeners() {
    this._popupButtonClose.addEventListener('mousedown', () => {
      this.close()
    })

    this._popup.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt)
    })
  }
}
/* ************************************** */
