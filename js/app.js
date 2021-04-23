
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navbarList = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// Create the Navbar

const createNav = () => {

    let navLink = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navLink += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navbarList.innerHTML = navLink;
}; createNav();

// Add active class to section just if it was near to the top of viewport

// getting the largest value that's less or equal to the number

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class from the section
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};
// add the active class to the section
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

//Execute the function
const activateSection = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,activateSection);

// Use scrollTO event to scroll to anchor ID 

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });
};

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


