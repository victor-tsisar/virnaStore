"use strict";

const inputFilters = document.querySelectorAll('[data-input-filters]');
const counterCurrent = document.querySelector('[data-counter-current]');
const counterTotal = document.querySelector('[data-counter-total]');
const btnReset = document.querySelector('[data-button-filters-reset]');
const btnMenuBurger = document.querySelector('[data-menu-burger]');
const btnMenuLang = document.querySelector('[data-menu-lang]');
const menuLangList = document.querySelector('[data-lang-list]');
const menuLangItems = document.querySelectorAll('[data-lang-item]');

function checkFiltersCounter () {
  let current = 0;
  inputFilters.forEach(element => {
    if(element.checked) {
      current += 1;
    }
  });

  counterTotal.textContent = inputFilters.length;
  counterCurrent.textContent = current;
}

inputFilters.forEach(element => {
  element.addEventListener('input', () => {
    checkFiltersCounter();
  });
});

btnReset.addEventListener('click', () => {
  counterCurrent.textContent = 0;
});

btnMenuBurger.addEventListener('click', () => {
  btnMenuBurger.classList.toggle('active');
});

btnMenuLang.addEventListener('click', () => {
  menuLangList.classList.toggle('active');
});

menuLangItems.forEach(item => {
  item.addEventListener('click', () => {
    let current = btnMenuLang.textContent;

    menuLangList.classList.remove('active');
    btnMenuLang.textContent = item.textContent;
    item.textContent = current;
  });
})

checkFiltersCounter();
