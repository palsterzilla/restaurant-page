const mainDishesPage = () => {
  const contentWrap = document.getElementById('contentWrap');
  
  const contentMainDishes = document.createElement('div');
  contentMainDishes.setAttribute('class', 'content');
  contentMainDishes.setAttribute('id', 'content');
  contentWrap.prepend(contentMainDishes);

  const box = document.createElement('div');
  box.setAttribute('class', 'box-nm');
  contentMainDishes.appendChild(box);

  const pageTitle = document.createElement('h1');
  pageTitle.setAttribute('class', 'page-title');
  pageTitle.textContent = 'MAIN DISHES';
  box.appendChild(pageTitle);

  const pageContent = document.createElement('div');
  pageContent.setAttribute('class', 'page-content');
  box.appendChild(pageContent);

  const entries = document.createElement('div');
  entries.setAttribute('class', 'single-entry');
  pageContent.appendChild(entries);

  const primaryMenu = document.createElement('h2');
  primaryMenu.textContent = 'SANDWICHES';
  entries.appendChild(primaryMenu);

  const notice = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = 'Make it a COMBO!\xA0\ Add hash browns and a small coffee or tea'
  notice.appendChild(strong);
  entries.appendChild(notice);

  const hamCheese = document.createElement('h3');
  const hamPara = document.createElement('p');
  hamCheese.textContent = 'HAM & CHEESE DELUX';
  hamPara.textContent = 'crispy pulled ham, pimento cheese, fried egg, '
    + 'and red pepper jelly on a dinner roll';
  entries.appendChild(hamCheese);
  entries.appendChild(hamPara);

  const dutchmaster = document.createElement('h3');
  const dutchPara = document.createElement('p');
  dutchmaster.textContent = 'DUTCHMASTER';
  dutchPara.textContent = 'bacon, egg, cheese, avocado & hot sauce on a '
    + 'toasted English muffin';
  entries.appendChild(dutchmaster);
  entries.appendChild(dutchPara);

  const secondaryMenu = document.createElement('h2');
  secondaryMenu.textContent = 'SIDES';
  entries.appendChild(secondaryMenu);

  const crispyHash = document.createElement('h3');
  crispyHash.textContent = 'CRISPY HASH BROWNS';
  entries.appendChild(crispyHash);

  const blackBeans = document.createElement('h3');
  blackBeans.textContent = 'BLACK BEANS';
  entries.appendChild(blackBeans);
}

export default mainDishesPage;