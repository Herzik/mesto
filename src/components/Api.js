export default class Api {
  constructor(config) {
    this._url = config.baseUrl
    this._headers = config.headers
  }

  //=====================
  //NOTE: Запрашиваем данные пользователя с сервера
  //=====================
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
  /* ************************************** */

  //=====================
  //NOTE: Записываем данные пользователя на сервер
  //=====================
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
  /* ************************************** */

  //=====================
  //NOTE: Обновляем аватар
  //=====================
  updateAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  /* ************************************** */

  //=====================
  //NOTE: Запрашиваем данные карточек с сервера
  //=====================
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка ${res.status}`)
    })
  }
  /* ************************************** */

  //=====================
  //NOTE: Записываем карточку на сервер
  //=====================
  createCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  deleteCard() {}
}
