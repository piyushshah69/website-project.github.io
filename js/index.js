// LOGOUT CLICK FUNCTION

var logoutBtn = document.querySelector('.logout-btn');
var logoutPopoup = document.querySelector('.logout');
var logoutPopupIcon = document.querySelector('.logout-btn')

logoutBtn.addEventListener('click', () => {
    logoutPopoup.classList.toggle('logout-active')
    logoutPopoup.classList.toggle('logout')
    logoutPopupIcon.classList.toggle('logout-btn-active')
})

// MENU CLICK FUNCTION

var menuCheckbox = document.querySelector('#menu-checkbox');
menuCheckbox.checked = 1;

document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
    let menu = document.querySelector('.nav-items');
    let menuCheckbox = document.querySelector('#menu-checkbox');
    let hamburgerBar1 = document.querySelector('.hamburger-l1')
    let hamburgerBar2 = document.querySelector('.hamburger-l2')
    let hamburgerBar3 = document.querySelector('.hamburger-l3')

    if (menuCheckbox.checked == !1) {
        menu.style.left = '-100vw';
        hamburgerBar1.classList.remove('hamburger-active-l1');
        hamburgerBar2.classList.remove('hamburger-active-l2');
        hamburgerBar3.classList.remove('hamburger-active-l3');
    }
    else {
        menu.style.left = '0';
        hamburgerBar1.classList.add('hamburger-active-l1');
        hamburgerBar2.classList.add('hamburger-active-l2');
        hamburgerBar3.classList.add('hamburger-active-l3');
    }
})

// COURSES CATEGORY FUNCTION

var courseCategoryStudent = document.querySelector('.course-category-student');
var courseCategoryProfessional = document.querySelector('.course-category-professional');
var courseCategoryEntreprenuer = document.querySelector('.course-category-entreprenuer');
// courseCategoryStudent.classList.add('courses-category-active')

courseCategoryStudent.addEventListener('click', () => {
    courseCategoryStudent.classList.add('courses-category-active')
    courseCategoryProfessional.classList.remove('courses-category-active')
    courseCategoryEntreprenuer.classList.remove('courses-category-active')
})

courseCategoryProfessional.addEventListener('click', () => {
    courseCategoryStudent.classList.remove('courses-category-active')
    courseCategoryProfessional.classList.add('courses-category-active')
    courseCategoryEntreprenuer.classList.remove('courses-category-active')
})

courseCategoryEntreprenuer.addEventListener('click', () => {
    courseCategoryStudent.classList.remove('courses-category-active')
    courseCategoryProfessional.classList.remove('courses-category-active')
    courseCategoryEntreprenuer.classList.add('courses-category-active')
})

// COURSES SCROLL FUNCTION

var leftScrollBtn = document.querySelector('.left-scroll');
var rightScrollBtn = document.querySelector('.right-scroll');

leftScrollBtn.addEventListener('click', () => {
    // document.querySelector('.courses-container').scrollBy(-400, 0);
    document.querySelector('.courses-container').scrollBy({
        left: -400,
        behavior: "smooth"
    });
})

rightScrollBtn.addEventListener('click', () => {
    // document.querySelector('.courses-container').scrollBy((400, 0));
    document.querySelector('.courses-container').scrollBy({
        left: 400,
        behavior: "smooth"
    });
})


// FAQ Section click 

for (let i = 1; i <= 5; i++) {
    document.querySelector(`.question-${i}`).addEventListener('click', () => {
    document.querySelector(`.answer-${i}`).classList.toggle('answer-active');
    document.querySelector(`.answer-${i}`).classList.toggle('answer-inactive');
    document.querySelector(`.plus-${i}`).classList.toggle('plus-inactive');
    document.querySelector(`.plus-${i}`).classList.toggle('plus-rotate');
    document.querySelector(`.minus-${i}`).classList.toggle('minus-active');
        
    })
}
