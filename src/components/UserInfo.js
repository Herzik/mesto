export default class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileNameSelector = profileNameSelector
    this._profileNameElement = document.querySelector(this._profileNameSelector)

    this._profileDescriptionSelector = profileDescriptionSelector
    this._profileDescriptionElement = document.querySelector(this._profileDescriptionSelector)
  }

  getUserInfo() {
    return {
      name: this._profileNameElement.textContent,
      description: this._profileDescriptionElement.textContent,
    }
  }

  setUserInfo({ name, description }) {
    this._profileNameElement.textContent = name
    this._profileDescriptionElement.textContent = description
  }
}
