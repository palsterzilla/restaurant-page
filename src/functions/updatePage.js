export const hideHomeElements = (e) => {
  const dataToHide = document.querySelectorAll('[data-home-hide');

  if (e.target.id == 'mainDishes') {
    dataToHide.forEach(element => {
      if (!element.hasAttribute('style')) {
        element.setAttribute('style', 'display: none');
      }
    })
  }
}

export const deleteContent = () => {
  const content = document.getElementById('content');
  
  if (content) {
    content.remove()
  } 
}