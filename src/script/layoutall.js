export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }
  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow.svg',
  },

  {
    width: 24,
    height: 24,
    src: '/img/avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)
    // button.insertAdjacentElement('beforeend', img)

    header.append(button)
    // header.insertAdjacentElement('beforeend', button)
  })
  return header
}
