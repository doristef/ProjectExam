/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/


/**  HAMBURGER MENU
 * Hamburger menu for Mobile Display
 * @type {boolean} nav , Element Id NAVIGATION
 * @type {boolean} clickElement , Element Id hamburgerNav
 *
 */
function showHide() {
  let nav = document.getElementById("navigation");
  if ( nav.className === "dropdown" ) {
      nav.className += " responsive";
  } else {
      nav.className = "dropdown";
  }
}

/* On-click UL/LI - Affects all click inside the nav */
let clickElement = document.getElementById("hamburgerNav");
clickElement.addEventListener("click", showHide, false);


/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/


/**  SHOW / HIDE HTML
 * TOGGLE STYLE display: block/none;
 * @param {string} element , Element to toggle "block" / "none".
 *
 */

 function showHideElementById(element) {
   // toggle block/none
   var showHide = (element.style.display === 'none') ? 'block' : 'none';
   element.style.display = showHide;
 }

 /* Add / Remove - Load Message */
 function removeAddText(message, id) {
   id.innerHTML = message;
 }
