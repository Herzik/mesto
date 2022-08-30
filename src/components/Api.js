export default class Api {
  constructor(config) {
    this._url = config.baseUrl
    this._headers = config.headers
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  setProfile() {}

  // Метод повторяется....

  getIntialCards() {}

  createCard() {}

  deleteCard() {}
}
