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

    this._element = this._getTemplate()
    this._imageElement = this._element.querySelector('.element__image')
    this._nameElement = this._element.querySelector('.element__name')
    this._likeElement = this._element.querySelector('.element__like')
    this._countLikeElement = this._element.querySelector('.element__count-like')
    this._removeElement = this._element.querySelector('.element__delete')
  }

  //=====================
  //NOTE: Слушатели событий
  //=====================
  _setEventListeners = () => {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick()
    })

    this._likeElement.addEventListener('click', () => {
      this._handleLikeCard()
    })

    this._removeElement.addEventListener('click', () => {
      this._handleRemoveCard()
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Получаем количество лайков
  //=====================
  _setCountLikes() {
    this._countLikeElement.textContent = this._likes.length
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
  renderLikes = (likes) => {
    this.setLikes(likes)
    this._setCountLikes()
    if (this._getStateLike()) {
      this._likeElement.classList.add('element__like_active')
    } else {
      this._likeElement.classList.remove('element__like_active')
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
    this.renderLikes(this._likes)
    this._setEventListeners()

    this._imageElement.src = this._image
    this._imageElement.alt = this._name
    this._nameElement.textContent = this._name

    if (this._ownerId != this._userId) {
      this._removeElement.remove()
    }

    return this._element
  }
  /* ************************************** */
}
