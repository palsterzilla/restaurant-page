import * as updatePage from "../functions/updatePage";

const home = () => {
  const pageNav = document.getElementById('menuMyMenu');

  pageNav.addEventListener('click', (e) => {
    if (e.target.id === 'home') {
      updatePage.deleteContent()
      updatePage.toggleHomeElements(e)
    }
  });
}

export default home;