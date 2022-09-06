export default class Card {
  constructor(
    {
      name,
      link,
      likes = [],
      _id,
      owner = {},
      userId,
      handleCardClick,
      handleLikeCard,
      handleRemoveCard,
    },
    cardSelector
  ) {
    this._name = name
    this._image = link
    this._likes = likes
    this._id = _id
    this._userId = userId
    this._ownerId = owner._id
    this._handleCardClick = handleCardClick
    this._handleLikeCard = handleLikeCard.bind(this)
    this._handleRemoveCard = handleRemoveCard

    this._cardSelector = cardSelector
  }

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
  //NOTE: Получаем количество лайков
  //=====================
  _setCountLikes() {
    this._element.querySelector('.element__count-like').textContent = this._likes.length
  }
  /* ************************************** */

  //=====================
  //NOTE: Получаем состояние лайка
  //=====================
  _getStateLike() {
    return this._likes.find((owner) => owner._id === this._userId)
  }
  /* ************************************** */

  //=====================
  //NOTE: Получаем все лайки
  //=====================
  getLikes() {
    return this._likes
  }
  /* ************************************** */

  //=====================
  //NOTE: Устанавливаем лайки
  //=====================
  setLikes(likes) {
    this._likes = likes
  }
  /* ************************************** */

  remove() {
    this._element.remove()
  }

  //=====================
  //NOTE: Рендерим лайки
  //=====================
  renderLikes(likes) {
    this.setLikes(likes)
    this._setCountLikes()
    if (this._getStateLike()) {
      this._element.querySelector('.element__like').classList.add('element__like_active')
    } else {
      this._element.querySelector('.element__like').classList.remove('element__like_active')
    }
  }
  /* ************************************** */

  //=====================
  //NOTE: Получаем айди карточки
  //=====================
  getId() {
    return this._id
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
    this.renderLikes(this._likes)
    this._setEventListeners()

    const imageElement = this._element.querySelector('.element__image')
    const nameElement = this._element.querySelector('.element__name')

    const removeElement = this._element.querySelector('.element__delete')

    imageElement.src = this._image
    imageElement.alt = this._name
    nameElement.textContent = this._name

    if (this._ownerId != this._userId) {
      removeElement.remove()
    }

    return this._element
  }
  /* ************************************** */
}
