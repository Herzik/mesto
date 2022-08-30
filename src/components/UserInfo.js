export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileNameSelector)

    this._profileDescriptionElement = document.querySelector(profileDescriptionSelector)

    this._profileAvatarElement = document.querySelector(profileAvatarSelector)
  }

  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    }
  }

  setUserInfo({ name, about }) {
    this._profileNameElement.textContent = name
    this._profileDescriptionElement.textContent = about
  }

  updateAvatar({ name, avatar }) {
    this._profileAvatarElement.src = avatar
    this._profileAvatarElement.alt = name
  }
}
