// JS simples para o mobile modal
const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close')
const navbarList = document.getElementById('mobile-navbar-list')

menu.addEventListener('click', () => {
  navbarList.style.display = "flex";
  closeMenu.style.display = "block";
  menu.style.display = "none";
})

closeMenu.addEventListener('click', () => {
  navbarList.style.display = "none";
  menu.style.display = "block";
  closeMenu.style.display = "none";
})