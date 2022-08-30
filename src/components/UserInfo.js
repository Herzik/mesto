export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector)
    this._profileDescriptionElement = document.querySelector(profileDescriptionSelector)
    this._profileAvatarElement = document.querySelector(profileAvatarSelector)
    this._id = ''
  }

  //=====================
  //NOTE: Инициализация профиля
  //=====================
  initialize({ name, about, avatar, _id }) {
    this._profileNameElement.textContent = name
    this._profileDescriptionElement.textContent = about
    this._profileAvatarElement.src = avatar
    this._profileAvatarElement.alt = name
    this._id = _id
  }
  /* ************************************** */

  //=====================
  //NOTE: Метод получения id пользователя
  //=====================
  getUserId() {
    return this._id
  }
  /* ************************************** */

  //=====================
  //NOTE: Получаем информацию о пользователе
  //=====================
  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    }
  }
  /* ************************************** */

  //=====================
  //NOTE: Устанавливаем информацию о пользователе
  //=====================
  setUserInfo({ name, about }) {
    this._profileNameElement.textContent = name
    this._profileDescriptionElement.textContent = about
  }
  /* ************************************** */

  //=====================
  //NOTE: Обновляем аватар пользователя
  //=====================
  updateAvatar({ name, avatar }) {
    this._profileAvatarElement.src = avatar
    this._profileAvatarElement.alt = name
  }
  /* ************************************** */
}
