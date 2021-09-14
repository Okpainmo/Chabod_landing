const sideContent = document.querySelector('.page-content');

function shiftSideContentUp() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    sideContent.style.top = '15px';
  } else {
    sideContent.style.top = '80px';
  }
}

window.addEventListener('scroll', shiftSideContentUp);
