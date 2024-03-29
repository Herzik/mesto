import {
  validationConfig,
  popupEditProfile,
  popupAddCard,
  popupUpdateAvatar,
  avatarEditButton,
  profileEditButton,
  buttonAddCard,
  inputName,
  inputDescription,
  apiConfig,
} from '../utils/constants.js'

import Card from '../components/Card.js'
import Section from '../components/Section.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import PopupConfirm from '../components/PopupConfirm.js'

import './index.css'

const api = new Api(apiConfig)

//=====================
//NOTE: Создаем экземпляр класса для отрисовки карточки
//=====================
const cardList = new Section(
  {
    items: null,
    renderer: (item) => {
      cardList.addItem(createCard(item))
    },
  },
  '.elements'
)
/* ************************************** */

//=====================
//NOTE: Запуск инициализации карточек и профиля
//=====================
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([data, cards]) => {
    userInfo.setUserInfo(data)

    cardList.setRendererItems(cards)

    cardList.renderItems()
  })
  .catch((err) => console.log(err))
/* ************************************** */

//=====================
//NOTE: Генерируем карточки с данными из массива
//=====================
const popupWithImage = new PopupWithImage('.popup_type_card-image')

popupWithImage.setEventListeners()

const createCard = ({ name, link, likes, _id, owner }) => {
  const card = new Card(
    {
      name: name,
      link: link,
      likes: likes,
      _id: _id,
      owner: owner,
      userId: userInfo.getUserId(),
      handleCardClick: () => {
        popupWithImage.open({ name, link })
      },
      handleRemoveCard: () => {
        popupConfirm.open(card)
      },
      handleLikeCard: () => {
        const stateLike = card.getLikes().find((owner) => owner._id === userInfo.getUserId())

        if (!stateLike) {
          api
            .setLike(card.getId())
            .then((res) => {
              card.renderLikes(res.likes)
            })
            .catch((err) => console.log(err))
        } else {
          api
            .removeLike(card.getId())
            .then((res) => {
              card.renderLikes(res.likes)
            })
            .catch((err) => console.log(err))
        }
      },
    },
    '#card-template'
  )

  return card.generateCard()
}

/* ************************************** */

//=====================
//NOTE: Добавление карточки
//=====================
const popupWithAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  submitHandler: (data) => {
    popupWithAddCard.renderLoading(true)

    api
      .createCard(data)
      .then((res) => {
        cardList.addItem(createCard(res))
        popupWithAddCard.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithAddCard.renderLoading(false)
      })
  },
  formActivation: () => {
    valadationAddCard.cleanUpForm()
  },
})

popupWithAddCard.setEventListeners()

buttonAddCard.addEventListener('click', popupWithAddCard.open.bind(popupWithAddCard))
/* ************************************** */

//=====================
//NOTE: Удаление карточки
//=====================
const popupConfirm = new PopupConfirm({
  popupSelector: '.popup_type_confirm',
  submitHandler: (card) => {
    popupConfirm.renderLoading(true)
    api
      .removeCard(card.getId())
      .then(() => {
        card.remove()
        popupConfirm.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupConfirm.renderLoading(false)
      })
  },
})

popupConfirm.setEventListeners()

/* ************************************** */

//=====================
//NOTE: Создает и активирует экземпляры валидаций
//=====================
const valadationAddCard = new FormValidator(validationConfig, popupAddCard)
valadationAddCard.enableValidation()

const validationEditProfule = new FormValidator(validationConfig, popupEditProfile)
validationEditProfule.enableValidation()

const validationUpdateAvatar = new FormValidator(validationConfig, popupUpdateAvatar)
validationUpdateAvatar.enableValidation()
/* ************************************** */

//=====================
//NOTE: Профиль и форма редактирования профиля
//=====================
const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
  profileAvatarSelector: '.profile__avatar',
})

const popupWithProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  submitHandler: (data) => {
    popupWithProfile.renderLoading(true)

    api
      .setProfile(data)
      .then((data) => {
        userInfo.setUserInfo(data)

        popupWithProfile.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithProfile.renderLoading(false)
      })
  },
  formActivation: () => {
    const formData = userInfo.getUserInfo()

    validationEditProfule.cleanUpForm()

    inputName.value = formData.name
    inputDescription.value = formData.description
  },
})

popupWithProfile.setEventListeners()

profileEditButton.addEventListener('click', popupWithProfile.open.bind(popupWithProfile))
/* ************************************** */

//=====================
//NOTE: Обновление аватара
//=====================
const popupAvatarUpdate = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  submitHandler: (data) => {
    popupAvatarUpdate.renderLoading(true)

    api
      .updateAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data)

        popupAvatarUpdate.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAvatarUpdate.renderLoading(false)
      })
  },

  formActivation: () => {
    validationUpdateAvatar.cleanUpForm()
  },
})

popupAvatarUpdate.setEventListeners()

avatarEditButton.addEventListener('click', popupAvatarUpdate.open.bind(popupAvatarUpdate))

/* ************************************** */
