const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('#menu')
const close = document.querySelector('#close')
const search = document.querySelector('#search')
const searchBar = document.querySelector('.search_bar')
const closed = document.querySelector('#close2')
const header = document.querySelector('header')

hamburger.addEventListener('click', function () {
  menu.style.left = '0'
})
close.addEventListener('click', function () {
  menu.style.left = '-50%'
})

search.addEventListener('click', function () {
  searchBar.style.top = '60px'
  header.classList.add('header')
})
closed.addEventListener('click', function () {
  searchBar.style.top = '-380px'
  header.classList.remove('header')
})

const main = document.querySelectorAll('.mainMenu')
const subMenu = document.querySelectorAll('.sub')

// for (let i = 0; i < main.length; i++) {
//   main[i].addEventListener('mouseover', function () {
//     subMenu[i].classList.add('active')
//   })
//   main[i].addEventListener('mouseout', function () {
//     subMenu[i].classList.remove('active')
//   })
// }

main.forEach(mc => {
  mc.addEventListener('click', function() {
    document.querySelector('.active').classList.remove('active')
    mc.lastElementChild.classList.add('active')
  })
})