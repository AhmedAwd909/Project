"use strict";

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
var navbarList = document.getElementById('navbar__list'); // sections global var

var sections = document.querySelectorAll('section');
/**
 * End Global Variables

 * Begin Main Functions
 * 
*/
// Create the Navbar

var createNav = function createNav() {
  var navLink = ''; // looping over all sections

  sections.forEach(function (section) {
    var sectionID = section.id;
    var sectionDataNav = section.dataset.nav;
    navLink += "<li><a class=\"menu__link\" href=\"#".concat(sectionID, "\">").concat(sectionDataNav, "</a></li>");
  }); // append all elements to the navigation

  navbarList.innerHTML = navLink;
};

createNav(); // Add active class to section just if it was near to the top of viewport
// getting the largest value that's less or equal to the number

var offset = function offset(section) {
  return Math.floor(section.getBoundingClientRect().top);
}; // remove active class from the section


var removeActive = function removeActive(section) {
  section.classList.remove('your-active-class');
}; // add the active class to the section


var addActive = function addActive(conditional, section) {
  if (conditional) {
    section.classList.add('your-active-class');
  }

  ;
}; //Execute the function


var activateSection = function activateSection() {
  sections.forEach(function (section) {
    var elementOffset = offset(section);

    inviewport = function inviewport() {
      return elementOffset < 150 && elementOffset >= -150;
    };

    removeActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener('scroll', activateSection); // Use scrollTO event to scroll to anchor ID 

var scrolling = function scrolling() {
  var links = document.querySelectorAll('.navbar__menu a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(link));
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