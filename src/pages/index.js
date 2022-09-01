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
import PopupWithForm from '../components/popupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import './index.css'

const api = new Api(apiConfig)

//=====================
//FIXME: Запуск инициализации карточек и профиля
//=====================
Promise.all([api.getProfile(), api.getInitialCards()]).then(([data, cards]) => {
  userInfo.initialize(data)

  console.log(userInfo.getUserId())

  const cardList = new Section(
    {
      items: cards,
      renderer: (item) => {
        cardList.addItem(createCard(item))
      },
    },
    '.elements'
  )

  cardList.renderItems()
})
/* ************************************** */

//=====================
//FIXME: Генерируем карточки с данными из массива
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
        popupWithImage.open(item)
      },
    },
    '#card-template'
  )

  return card.generateCard()
}

// const cardList = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       cardList.addItem(createCard(item))
//     },
//   },
//   '.elements'
// )

// cardList.renderItems()
/* ************************************** */

//=====================
//FIXME: Добавление карточки
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
    api
      .setProfile(data)
      .then((data) => {
        popupWithProfile.setTextButton('Сохранение...')

        userInfo.setUserInfo(data)

        popupWithProfile.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {})
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
    api
      .updateAvatar(data)
      .then((data) => {
        popupAvatarUpdate.setTextButton('Сохранение...')

        userInfo.updateAvatar(data)

        popupAvatarUpdate.close()
      })
      .catch((err) => console.log(err))
      .finally(() => {
        popupAvatarUpdate.defaultTextButton()
      })
  },

  formActivation: () => {
    valadationAddCard.cleanUpForm()
  },
})

popupAvatarUpdate.setEventListeners()

avatarEditButton.addEventListener('click', popupAvatarUpdate.open.bind(popupAvatarUpdate))

/* ************************************** */
