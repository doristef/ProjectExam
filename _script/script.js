/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/


/**  HAMBURGER MENU
 * Hamburger menu for Mobile Display
 * @type {string} nav , Element Id NAVIGATION
 * @type {string} clickElement , Element Id hamburgerNav
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

/* On-click UL/LI - with Id */
let clickElement = document.getElementById("hamburgerNav");
clickElement.addEventListener("click", showHide, false);


/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  Functions
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

/**  UpperCase First Letter 
 *
 * @param {string} string , String to toUpperCase first letter.
 *
 */
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

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

 /**  Add / Remove - Load Message
  * TOGGLE STYLE display: block/none;
  * @param {string} message , Message to display
  * @param {string} id , Id of element to manipulate
  *
  */
 function removeAddText(message, id) { id.innerHTML = message; }

 /**  Show Decimals
  *
  * @param {string} num , Number to shorten decimal to 3 if
  *
  */
 function rmvDec(num, dec) {
   return Number(Math.round(num+'e'+dec)+'e-'+dec);
 }
