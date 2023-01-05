const select = document.querySelectorAll('.select');
const burger = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.close-btn');
const menu = document.querySelector('.header__mob-nav');
const wrapper = document.querySelector('.wrapper');
const transferInput = document.querySelectorAll('.transfer__count-input');
const darkTheme = document.querySelector('#dark');
const lightTheme = document.querySelector('#light');
const darkTheme2 = document.querySelector('#dark2');
const lightTheme2 = document.querySelector('#light2');
const body = document.querySelector('body');

const langBtn = document.querySelector('.site-language__btn');
const langDrop =  document.querySelector('.site-language__drop');

const drop = document.querySelector('.drop-box');
const dropItem = document.querySelector('.drop-info');

const propertiesHead = document.querySelectorAll('.properties-head');
const properties = document.querySelectorAll('.properties-item');

const acardion = document.querySelectorAll('.acardion-item');


select.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

burger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

langBtn.addEventListener('click', () => {
  langDrop.classList.toggle('site-language__drop--active');
});

transferInput.forEach(item => {
  if(item.value.length > 0) {
    item.style.width = 30 + item.value.length * 7 + 'px';
  }

    item.addEventListener('input', () => {
    let sum = 30 + item.value.length * 7;
    
    if(sum < 86) {
      item.style.width = sum + 'px';
    }
    else {
      item.style.width = '125px';
    }

    if(item.value.length === 0) {
      item.style.width = '86px';  
    }
  });
});
/*
lightTheme.addEventListener('click', () => {
  body.classList.remove('dark');
  body.classList.add('light');

  lightTheme.classList.add('active');
  darkTheme.classList.remove('active');
});

darkTheme.addEventListener('click', () => {
  body.classList.remove('light');
  body.classList.add('dark');

  lightTheme.classList.remove('active');
  darkTheme.classList.add('active');
});
*/

lightTheme2.addEventListener('click', () => {
  body.classList.remove('dark');
  body.classList.add('light');

  lightTheme2.classList.add('active');
  darkTheme2.classList.remove('active');
});

darkTheme2.addEventListener('click', () => {
  body.classList.remove('light');
  body.classList.add('dark');

  lightTheme2.classList.remove('active');
  darkTheme2.classList.add('active');
});


propertiesHead.forEach((item, index) => {
  item.addEventListener('click', () => {
    properties[index].classList.toggle('active');
  });
});

acardion.forEach((item) => {
  item.addEventListener('click', (e) => {
    if(e.target.className === 'acardion-item__title') {
      item.classList.toggle('active');
    }
  });
});





drop.addEventListener('click', () => {
  drop.classList.toggle('active');
  dropItem.classList.toggle('active');
});



