import './style.css';
import slideAnimation from './functions/slideAnimations';
import * as updatePage from './functions/updatePage'
import mainDishesPage from './pages/mainDishes';
import aboutPage from './pages/about';

const pageNav = document.getElementById('menuMyMenu');

slideAnimation()

pageNav.addEventListener('click', (e) => {
  if (e.target.id === 'home') {
    updatePage.deleteContent()
    updatePage.toggleHomeElements(e)
    updatePage.activeNav(e)

  } else if (e.target.id === 'mainDishes') {
    updatePage.deleteContent()
    updatePage.toggleHomeElements(e)
    updatePage.activeNav(e)
    mainDishesPage()
    
  } else if (e.target.id === 'about') {
    updatePage.deleteContent()
    updatePage.toggleHomeElements(e)
    updatePage.activeNav(e)
    aboutPage()
  }
});