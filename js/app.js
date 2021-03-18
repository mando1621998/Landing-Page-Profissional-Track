
/**
 * Define Global Variables
 * 
*/
// navigationBar const
const navigationBar = document.getElementById('navbar__list');
// sections const
const sections = document.querySelectorAll('section');
//ul const
const ul = document.querySelector('#navbar__list')
// const fragment
const fragment = document.createDocumentFragment();

/**
 * End Global Variables


 * Begin Main Functions
 * 
*/


// build the navMenu
const buildNav = () => {

    
    // looping on all sections
    sections.forEach(section =>{


        // Vars links at the Navigation
        const sec_dataNav = section.getAttribute('data-nav');
        const li = document.createElement('li');
        const link = document.createElement('a');
        const textNode = document.createTextNode(sec_dataNav);

        link.addEventListener('click', () =>{
            section.scrollIntoView({behavior: "smooth"});
        })
        
        link.appendChild(textNode);
        li.appendChild(link);
        fragment.appendChild(li);
        link.setAttribute('class','menu__link');
        
    });
    // append all items in fragment in ul
    ul.appendChild(fragment);

};
buildNav();



/* Start Add class 'active' to section when near top of viewport */

const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
}

const removeActive = (section) =>{
    section.classList.remove('your-active-class');
    secId = section.id.slice(7,8)-1;
    navigationBar.childNodes[secId].style.cssText = "background-color : transparent;";
}

const addActive = (statement,section) =>{
    if(statement){
        section.classList.add('your-active-class');
        secId = section.id.slice(7,8)-1;
        navigationBar.childNodes[secId].style.cssText = "background-color : #6BA291;";
        
        
    };
};

window.addEventListener('scroll',() =>{
    sections.forEach(section =>{
        const eleOffset = offset(section);
        inViewPort = () => eleOffset < 150 && eleOffset >= -300;
        removeActive(section);
        addActive(inViewPort(),section);
    });
});

/* End Add class 'active' to section when near top of viewport */


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/



/* Start Show & Hide ScrollTopButton */
const scrollTop = document.querySelector('#scrollTop');

window.onscroll = () =>{
    if(window.pageYOffset >= 330){
        
        scrollTop.style.display = "block";
    }else{
        scrollTop.style.display = "none";
    }

}

/* End Show & Hide ScrollTopButton */


/* Start Code Click scrollTopButton */

scrollTop.addEventListener('click', () =>{
    
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

/* End Code Click scrollTopButton */


/* Start Responsive Navbar */

const toggle = document.getElementsByClassName('toggle')[0];
const navbarMenu = document.getElementsByClassName('navbar__menu')[0];

toggle.addEventListener('click', () =>{
    navbarMenu.classList.toggle('active')
})

/* End Responsive Navbar */

