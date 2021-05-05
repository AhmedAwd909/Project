
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
// Define sections 
const sections = document.querySelectorAll("section");

// Define navigation 
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavList() {
    //Looping over all sections
    for(section of sections) {
        //Getting section name
        secName = section.getAttribute("data-nav");
        //Getting section link
        secLink = section.getAttribute("id");
        //Create list for each section
        newItem = document.createElement("li");
        //Add section name, link and CSS class to apply styles
        newItem.innerHTML = `<a class="menu__link" href="#${secLink}">${secName}</a>`;
        //Appending new list to navbar menu
        navList.appendChild(newItem);
    }
} createNavList()

//Adding active class to section in viewport

//Check if section in viewport
function viewportChecker(elem) {
    let secPosition = elem.getBoundingClientRect();
    return (secPosition.top >= 0);
}

//Switch active class between sections
function switchActiveClass() {
    //Looping over all page sections
    for (section of sections) {
        //When section is in veiwport
        if (viewportChecker(section)) {
            //Add active class if it wasn't already contains
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");  
            } 
            //Remove active class if it wasn't in viewport
        } else {section.classList.remove("your-active-class");}
    }
}
//When scroll envoke the function
document.addEventListener("scroll", switchActiveClass);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
