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

  setProfile({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  getIntialCards() {}

  createCard() {}

  deleteCard() {}
}
