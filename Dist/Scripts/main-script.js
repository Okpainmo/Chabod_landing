// script for filtering/sorting portfolio gallery -- start
// script for filtering/sorting portfolio gallery -- start

// variables

const firstJob = document.getElementById('firstJob');
const secondJob = document.getElementById('secondJob');
const thirdJob = document.getElementById('thirdJob');
const showAll = document.getElementById('showAll');

// function for sorting portfolio and displaying all portfolio projects

function displayAll() {
  document
    .querySelectorAll('.first-job, .second-job, .third-job')
    .forEach(function (each) {
      each.style.display = 'block';
    });
  document
    .querySelectorAll('.first-job, .second-job, .third-job')
    .forEach(function (each) {
      each.classList.add('show-all');
    });
}

// function for sorting portfolio and displaying only "firstJob" variable projects

function showFirstJob() {
  document
    .querySelectorAll('.first-job, .second-job, .third-job')
    .forEach(function (each) {
      each.classList.remove('show-all');
    });
  document.querySelectorAll('.first-job').forEach(function (each) {
    each.style.display = 'block';
  });
  document.querySelectorAll('.second-job, .third-job').forEach(function (each) {
    each.style.display = 'none';
  });
  document.querySelectorAll('.first-job').forEach(function (each) {
    each.classList.add('show-list');
  });
}

// function for sorting portfolio and displaying only "secondJob" variable projects

function showSecondJob() {
  document
    .querySelectorAll('.first-job, .second-job, .third-job')
    .forEach(function (each) {
      each.classList.remove('show-all');
    });
  document.querySelectorAll('.second-job').forEach(function (each) {
    each.style.display = 'block';
  });
  document.querySelectorAll('.first-job, .third-job').forEach(function (each) {
    each.style.display = 'none';
  });
  document.querySelectorAll('.second-job').forEach(function (each) {
    each.classList.add('show-list');
  });
}

// function for sorting portfolio and displaying only "thirdJob" variable projects

function showThirdJob() {
  document
    .querySelectorAll('.first-job, .second-job, .third-job')
    .forEach(function (each) {
      each.classList.remove('show-all');
    });
  document.querySelectorAll('.third-job').forEach(function (each) {
    each.style.display = 'block';
  });
  document.querySelectorAll('.first-job, .second-job').forEach(function (each) {
    each.style.display = 'none';
  });
  document.querySelectorAll('.third-job').forEach(function (each) {
    each.classList.add('show-list');
  });
}

// portfolio gallery filter/sort event listeners.

firstJob.addEventListener('click', showFirstJob);
secondJob.addEventListener('click', showSecondJob);
thirdJob.addEventListener('click', showThirdJob);
showAll.addEventListener('click', displayAll);

// script for filtering/sorting portfolio gallery -- end
// script for filtering/sorting portfolio gallery -- end

// script for projects overlay-slide-up and overlay-slide-down -- start
// script for projects overlay-slide-up and overlay-slide-down -- start

// variables

const projectOverlayBtn = document.querySelectorAll('.read-on-menu-bar');
const closeProjectOverlayBtn = document.querySelectorAll('.close-overlay');
const overlayBanner = document.querySelectorAll('.project-banner');

// function for sliding up project story intro

projectOverlayBtn.forEach(function (each) {
  each.addEventListener('click', function () {
    this.parentNode.previousSibling.previousSibling.childNodes[3].classList.remove(
      'slide-up-overlay_slideDown'
    );
    this.parentNode.previousSibling.previousSibling.childNodes[3].classList.add(
      'slide-up-overlay_slideUp'
    );
  });
});

// function for sliding down(closing) project story intro

closeProjectOverlayBtn.forEach(function (each) {
  each.addEventListener('click', function slideDownOverlay() {
    this.parentNode.parentNode.classList.remove('slide-up-overlay_slideUp');
    this.parentNode.parentNode.classList.add('slide-up-overlay_slideDown');
    // this.parentNode.parentNode.parentNode.classList.add('overlay-flip');
  });
});

// script for projects overlay-slide-up and overlay-slide-down -- end
// script for projects overlay-slide-up and overlay-slide-down -- end

// Script for displaying and hiding main-overlay and content (project stories and blog stories) -- start
// Script for displaying and hiding main-overlay and content (project stories and blog stories) -- start

// variables

const closeMainOverlayBtn = document.querySelectorAll(
  '.close-main-overlay-btn'
);
const showProjectStory = document.querySelectorAll('.project-story-link');
const projectStories = document.querySelectorAll('.project-story');
const showBlogStory = document.querySelectorAll('.seller-blog-story');
const blogStories = document.querySelectorAll('.blog-story');
const directOverlayOpener = document.querySelectorAll('.overlay-flip');

/** loop code for filtering all main overlays and displaying only the overlay contents 
of the clicked/selected items **/

for (let x = 0; x < 6; x++) {
  // function for showing sorted/selected project story through the link on the project slide up overlay

  showProjectStory[x].addEventListener('click', function () {
    projectStories[x].style.display = 'block';
    document.querySelector('.side-nav').style.filter = 'blur(10px)';
    document.querySelector('.side-content').style.filter = 'blur(10px)';
  });

  // function for showing sorted/selected project story through direct clicking of project banners

  directOverlayOpener[x].addEventListener('click', function () {
    projectStories[x].style.display = 'block';
    document.querySelector('.side-nav').style.filter = 'blur(10px)';
    document.querySelector('.side-content').style.filter = 'blur(10px)';
  });

  // function for showing sorted/selected blog story

  showBlogStory[x].addEventListener('click', function () {
    blogStories[x].style.display = 'block';
    document.querySelector('.side-nav').style.filter = 'blur(10px)';
    document.querySelector('.side-content').style.filter = 'blur(10px)';
  });
}

// function for closing all main overlay pop-ups

closeMainOverlayBtn.forEach(function (each) {
  each.addEventListener('click', function closeMainOverlay() {
    document.querySelector('.side-nav').style.filter = 'none';
    document.querySelector('.side-content').style.filter = 'none';
    document.querySelectorAll('.main-overlay').forEach(function (each) {
      each.style.display = 'none';
    });
  });
});

// Script for displaying and hiding main-overlay and content (project stories and blog stories) -- end
// Script for displaying and hiding main-overlay and content (project stories and blog stories) -- end
