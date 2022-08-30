export default class Api {
  constructor(config) {
    this._url = config.baseUrl
    this._headers = config.headers
  }

  getProfileName() {
    fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  }

  setProfileName() {}

  getIntialCards() {}

  createCard() {}

  deleteCard() {}
}
