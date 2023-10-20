import { activeNav } from "../functions/updatePage";

const aboutPage = (e) => {
  activeNav(e)

  const contentWrap = document.getElementById('contentWrap');

  const contentAbout = document.createElement('div');
  contentAbout.setAttribute('class', 'content');
  contentAbout.setAttribute('id', 'content');
  contentWrap.prepend(contentAbout);

  const box = document.createElement('div');
  box.setAttribute('class', 'box-nm');
  contentAbout.appendChild(box);

  const pageTitle = document.createElement('h1');
  pageTitle.setAttribute('class', 'page-title');
  pageTitle.textContent = 'ABOUT PAL\'S';
  box.appendChild(pageTitle);

  const pageContent = document.createElement('div');
  pageContent.setAttribute('class', 'page-content');
  box.appendChild(pageContent);

  const entries = document.createElement('div');
  entries.setAttribute('class', 'single-entry');
  pageContent.appendChild(entries);
  
  const aboutPara = document.createElement('p');
  aboutPara.setAttribute('class', 'p1');
  aboutPara.textContent = 'Welcome to PAL\'s - Where Culinary Artistry Meets Elegance. '
    + 'Established in 2030, PAL is a culinary gem born from a passion for exceptional dining. '
    + 'Our chefs craft dishes inspired by out-of-the-star style using the finest local ingredients, '
    + 'promising a symphony of flavors with every bite. Step into our inviting space, thoughtfully '
    + 'designed for your comfort, and savor memorable moments. Our dedicated team ensures your '
    + 'experience is nothing short of extraordinary. At PAL, we\'re not just a restaurant; we\'re '
    + 'a destination where every meal is an exquisite journey. Join us and become part of our story.'
  entries.appendChild(aboutPara);

  const dailyRead = document.createElement('p');
  const dailyStrong = document.createElement('strong');
  dailyStrong.textContent = 'Read more about us in the Daily News!'
  dailyRead.appendChild(dailyStrong);
  dailyRead.setAttribute('class', 'p1');
  entries.appendChild(dailyRead);

  const linkDaily = document.createElement('p');
  const linkStrong = document.createElement('strong');
  const linkAnchor = document.createElement('a');
  linkAnchor.textContent = 'https://www.thedailybugle.net'
  linkAnchor.setAttribute('href', 'https://www.thedailybugle.net/');
  linkAnchor.setAttribute('target', '_blank');
  linkStrong.appendChild(linkAnchor);
  linkDaily.appendChild(linkStrong);
  linkDaily.setAttribute('class', 'p1');
  entries.appendChild(linkDaily);

  const visitFb = document.createElement('p');
  const visitStrong = document.createElement('strong');
  visitStrong.textContent = 'Visit our Facebook page for the most up to date news!'
  visitFb.appendChild(visitStrong);
  visitFb.setAttribute('class', 'p1');
  entries.appendChild(visitFb);

  const linkVisit = document.createElement('p');
  const fbStrong = document.createElement('strong');
  const fbAnchor = document.createElement('a');
  fbAnchor.textContent = 'https://www.facebook.com'
  fbAnchor.setAttribute('href', 'https://www.facebook.com/');
  fbAnchor.setAttribute('target', '_blank');
  fbStrong.appendChild(fbAnchor);
  linkVisit.appendChild(fbStrong);
  linkVisit.setAttribute('class', 'p1');
  entries.appendChild(linkVisit);
}

export default aboutPage;