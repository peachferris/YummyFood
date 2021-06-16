//Вертикальное меню

const hideMenu = document.getElementById('hide');
let hideContainer = document.getElementById('header-container');
let changeContainer = document.querySelector('.change-container');
let activeText = hideContainer.querySelectorAll('.active-text');
let hideText = hideContainer.querySelectorAll('.disable-text');
let smallContainer = document.querySelector('.small');
let optionContainer = document.querySelector('.option-wrappers-items');
let bigPad = document.querySelector('.pad');
let optionNavigate = document.querySelector('.options-navigate');
let backChange = document.querySelector('.back-change');
let backButton = document.querySelector('.back');
let hideSvg = document.querySelector('.hide-svg');
let svg = document.querySelector('.items-svg');
let hideContent = document.querySelector('.menu-category');
let blockContent = document.querySelector('.hide-block');

const getBigPad = () => {
    const changePad = document.querySelectorAll('.options-navigate');

    for (optionNavigate of changePad) {
        if (optionNavigate.classList.toggle('pad'));
    }
};


const getSmallContainer = () => {
    const changeContainer = document.querySelectorAll('.option-wrappers-items');

    for (optionContainer of changeContainer) {
        if (optionContainer.classList.toggle('small'));
    }
};

const getSmallMenu = () => {
    const change = document.querySelectorAll('.header-container');

    for (hideContainer of change) {
        if (hideContainer.classList.toggle('change-container'));
    }
};

const getChangeBack = () => {
    const changeButton = document.querySelectorAll('.back');

    for (backButton of changeButton) {
        if (backButton.classList.toggle('back-change'));
    }
};

const getHideSvg = () => {
    const changeSvg = document.querySelectorAll('.items-svg');

    for (svg of changeSvg) {
        if (svg.classList.toggle('hide-svg'));
    }
};

hideMenu.addEventListener("click", () => {
    const all = document.querySelectorAll('.active-text');

    for (activeText of all) {
        if (activeText.classList.toggle('disable-text'));
    }

    getSmallMenu();
    getSmallContainer();
    getBigPad();
    getChangeBack();
    getHideSvg();
});


//Меню на мобильных устройствах

const btnMenu = document.querySelector('.header-menu-brand');
let openMenu = document.querySelector('.btn-menu');
let openBlock = document.querySelectorAll('.block-menu');


const elementBlock = document.querySelector(".menu-category");

const getMenu = () => {
    openMenu.addEventListener('click', () => {
        console.log('click')
        if(hideContainer.classList.toggle('block-menu')) {        
            elementBlock.classList.toggle('hide-block');
              } else {
                elementBlock.classList.add('hide-block')
              };  
    })
};

getMenu();


    
