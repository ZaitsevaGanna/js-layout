import {
  createElement,
  createHeader,
} from '../../script/layoutall'

const page = document.querySelector('.page')

//const page = createElement('div', 'page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

page.append(title)

//=====================================================================

const POST = {
  a_info: [
    { text: 'База знань', class: 'list_item button' },
    { text: 'Інформація', class: 'list_item button' },
  ],
  src: '/img/community.jpg',
  title: 'Що таке база знань?',
  info: `База знань - база даних, що містить правила виведення та інформацію про людський досвід і
            знання в деякій предметній
            галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення
            попередніх
            завдань.`,
  button_info: `Перейти до ком'юніті у Телеграм`,
}

const createPost = () => {
  const postList = createElement('main', 'post_list')

  const list = createElement('div', 'list')
  postList.append(list)

  POST.a_info.forEach((item) => {
    const post = createElement('a', item.class, item.text)
    list.append(post)
  })

  const picture = createElement('img')
  picture.setAttribute('src', '/img/community.jpg')

  postList.append(picture)

  const title = createElement(
    'h1',
    'title_info',
    POST.title,
  )

  postList.append(title)

  const paragraph = createElement('p', 'info', POST.info)

  postList.append(paragraph)

  const button = createElement(
    'a',
    'orange_button button',
    POST.button_info,
  )

  postList.append(button)

  return postList
}

const post = createPost()

page.append(post)
