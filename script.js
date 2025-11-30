function initTabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');

if(tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
      activeTab(index);
    })
  })
}
}

initTabNav();


function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt');
if(accordionList.length){
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion(event) {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
})
}
}

initAccordion();

function initScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
})
}

initScrollSuave();

function initAnimacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');
if(sections.length){
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    if(sectionTop < 0){
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  })
}
animaScroll()
window.addEventListener('scroll', animaScroll);
}
}

initAnimacaoScroll();