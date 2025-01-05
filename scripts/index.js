const scrollHandler = () => {
  const dynamicNav = document.querySelector('#dynamic-nav')
  const scrollToTopBtn = document.querySelector('.scroll-to-top')
  if (window.scrollY > 40) {
    // show
    dynamicNav.style = 'background-color: #e3f2fd;'
  } else {
    // hide
    dynamicNav.style = 'background-color: #e3f2fd; display: none;'
  }
  if (window.scrollY > 100) {
    // show
    scrollToTopBtn.style = ''
  } else {
    // hide
    scrollToTopBtn.style = 'display: none;'
  }
}

const scrollToTop = (e) => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  scrollHandler()
}

const scrollToSection = (id) => {
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })
  scrollHandler()
}
