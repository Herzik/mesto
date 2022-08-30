import {
  initialCards,
  validationConfig,
  popupEditProfile,
  popupAddCard,
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
import PopupWithForm from '../components/popupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import './index.css'

const api = new Api(apiConfig)

//=====================
//NOTE: Временные методы
//=====================

api.getProfile().then((data) => {
  userInfo.setUserInfo(data)
  userInfo.updateAvatar(data)
})

/* ************************************** */

//=====================
//NOTE: Создает и активирует экземпляры валидаций
//=====================
const valadationAddCard = new FormValidator(validationConfig, popupAddCard)
valadationAddCard.enableValidation()

const validationEditProfule = new FormValidator(validationConfig, popupEditProfile)
validationEditProfule.enableValidation()
/* ************************************** */

//=====================
//NOTE: Генерируем карточки с данными из массива и рендерим их
//=====================
const popupWithImage = new PopupWithImage('.popup_type_card-image')

popupWithImage.setEventListeners()

const createCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        popupWithImage.open(item)
      },
    },
    '#card-template'
  )

  return card.generateCard()
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item))
    },
  },
  '.elements'
)

cardList.renderItems()
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
    api
      .setProfile(data)
      .then((data) => {
        userInfo.setUserInfo(data)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupWithProfile.close()
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
//NOTE: Добавление карточки
//=====================
const popupWithAddCard = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  submitHandler: (data) => {
    cardList.addItem(createCard(data))

    popupWithAddCard.close()
  },

  formActivation: () => {
    valadationAddCard.cleanUpForm()
  },
})

popupWithAddCard.setEventListeners()

buttonAddCard.addEventListener('click', popupWithAddCard.open.bind(popupWithAddCard))
/* ************************************** */
