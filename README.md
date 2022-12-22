# Landing Page Project
-----------------------------------
## description.

this is landing page project that have.
- **Navigation menu build dynamically**.
- **Highlighted viewed section**.
- **Smoothly scroll when you click on link page**.
- **Responsive Nav menu works on all devises**.
------------------------------------
## Project leader.

Mohamed Talat
------------------------------------
## Methods used.

### In "global variables"

I used **'querySelectorAll'** to store sections in variable.
and convert them to array by using **'Array.from'** to loop over them.
====================================
### In "createLIstItem"

I used **'function'** to create listItem by using **'for of loop'** to loop in sections.
and i used **'getAttribute'** to get sectionName and SectionLink.
====================================
### To scroll to section

I used **'addEventListener'** to run **'scrollIntoView'** with behavior **'smooth'** to go to the section.smoothly when you click on it.
====================================
### To highlight vewied section 

I used **'onscroll'** property to make **'function'** loop over section by using **'forEach'** loop to make. another **'function'** that work by **'if else statement'**. 
and used **'getBoundingClientRect'** to know where the screen view location. 
and i used AND logic operator **'&&'** to run the code if the tow conditions is true.
====================================
### To make toggle button 

Fist of all i added empty anchor and some spans in index.html to style it in style.css and make  a. button and contained the ul in div with class name **'navbar-links'** to control the nav menu.
I used **'getElementsByClassName'** to get Button and navbarLinks to store them in variables and i added.**'addEventListener'** to make something when i click on the  button that something is to make.navbarLinks active and i use **'toggle'** to make the button able to open and close.
and i used **'window.scrollTo'** to make the button scroll up when you click on it.
and i used **'pageYOffset'** to make the button only visible when the user scrolls to the end of the page.
====================================
### Resources helped me 

https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
https://www.w3schools.com/jsref/met_element_queryselectorall.asp
https://www.w3schools.com/jsref/event_onscroll.asp
https://www.w3schools.com/jsref/prop_win_pageyoffset.asp
https://www.w3schools.com/jsref/met_win_scrollto.asp
https://www.w3schools.com/colors/colors_picker.asp
https://cdn.lordicon.com/ribwzplp.json




