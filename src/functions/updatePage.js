export const hideHomeElements = (e) => {
  const dataToHide = document.querySelectorAll('[data-home-hide');

  dataToHide.forEach(element => {
    if (!element.hasAttribute('style')) {
      element.setAttribute('style', 'display: none');
    }
  })
}

export const deleteContent = () => {
  const content = document.getElementById('content');
  
  if (content) {
    content.remove()
  } 
}