export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name
    this._image = data.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }

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
    this._element = null
  }
  /* ************************************** */

  //=====================
  //NOTE: Слушатели событий
  //=====================
  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick()
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
