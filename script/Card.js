import { openPopup } from './index.js'
export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name
    this._image = data.link
    this._cardSelector = cardSelector
  }

  //=====================
  //NOTE: Возвращает DOM элемент из шаблона
  //=====================
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true)

    return cardElement
  }
  /* ************************************** */

  //=====================
  //NOTE: Открывает модальное окно карточки
  //=====================
  _handleOpenPopup() {
    const popup = document.querySelector('.popup_type_card-image')
    const popupImage = popup.querySelector('.popup__card-image')
    const popupImageTitle = popup.querySelector('.popup__card-title')

    popupImage.src = this._image
    popupImage.alt = this._name
    popupImageTitle.textContent = this._name

    openPopup(popup)
  }
  /* ************************************** */

  //=====================
  //NOTE: Отвечает за лайк карточек
  //=====================
  _handleLikeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active')
  }
  /* ************************************** */

  //=====================
  //NOTE: Удаление карточек
  //=====================
  _handleRemoveCard() {
    this._element.remove()
  }
  /* ************************************** */

  //=====================
  //NOTE: Слушатели событий
  //=====================
  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup()
    })

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeCard()
    })

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleRemoveCard()
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Генерирует и возвращает карточку
  //=====================
  generateCard() {
    this._element = this._getTemplate()

    this._setEventListeners()

    const imageElement = this._element.querySelector('.element__image')
    const nameElement = this._element.querySelector('.element__name')

    imageElement.src = this._image
    imageElement.alt = this._name
    nameElement.textContent = this._name

    return this._element
  }
  /* ************************************** */
}
