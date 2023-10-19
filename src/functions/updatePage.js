export const toggleHomeElements = (e) => {
  const dataToHide = document.querySelectorAll('[data-home-toggle');

  dataToHide.forEach(element => {
    if (!element.hasAttribute('style') && e.target.id !== 'home') {
      element.setAttribute('style', 'display: none');

    } else if (element.hasAttribute('style') && e.target.id === 'home') {
      element.removeAttribute('style');
    }
  })
}

export const deleteContent = () => {
  const content = document.getElementById('content');
  
  if (content) {
    content.remove()
  } 
}