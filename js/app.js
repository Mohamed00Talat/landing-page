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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
 */
// Stored section in array to loop in sections
const sections = Array.from(document.querySelectorAll("section"));
// Build menu 
const menu = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// build the nav
function createListItem() {
    for (const section of sections) {
        const listItem = document.createElement("li");
        const sectionName = section.getAttribute("data-nav");
        const sectionLink = section.getAttribute("id");
        listItem.innerHTML = `<a href="#${sectionLink}" class="menu__link">${sectionName}</a>`;
        // Scroll to section on link click
        listItem.addEventListener("click", evt => {
            evt.preventDefault();
            // Scroll to anchor ID using scrollTO event
            section.scrollIntoView({ behavior: "smooth" });
        });
        fragment.appendChild(listItem);
    }

    menu.appendChild(fragment);
}
createListItem()
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
// Add class ‘active’ to section when near top of viewport

const links = document.querySelectorAll("a.menu__link");
window.addEventListener("scroll", highlight);
function highlight() {
    sections.forEach(section => {
        const sectionTitle = section.getAttribute("data-nav");
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop > 0 && sectionTop < 250) {
            section.classList.add("your-active-class");
            /* add active-li class to your vewied section or clicked section */
            links.forEach(link => {
                if (link.textContent === sectionTitle) {
                    link.classList.add("active-li");
                } else {
                    link.classList.remove("active-li");
                }
            })
        } else {
            section.classList.remove("your-active-class");
        }
    })
}

const Button = document.getElementsByClassName("button")[0];
const navbarLinks = document.getElementsByClassName("primary-navigation")[0];

/*
add active class to the responsive menu button 
*/
Button.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
});


const upButton = document.getElementById("up");
/*
function that’s mke the up Button only visible when the user scrolls below the fold of the page.
*/
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
        upButton.style.display = 'block'
    }
    else {
        upButton.style.display = 'none'
    }
});

/*
function that’s return you to the top of the page when you click on the up button
*/
upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});