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

/**  Random Background Image
 *
 * @type {string} width , Width of User Screen
 * @type {string} res, Find relevant image size for screen
 * @type {object} image, Array of Images to be used.
 * Images from Unsplash.com
 *
 */
let changeBg = ( function() {
  var width = window.screen.availWidth;
  var res = '';
  if( width < '1025' ){ res = '_1024'; }
  var images = ['_img/jeremy-thomas-99326-unsplash' + res + '.jpg',
                '_img/nasa-43979-unsplash' + res + '.jpg',
                '_img/nasa-45074-unsplash' + res + '.jpg',
                '_img/nasa-63032-unsplash' + res + '.jpg',
                '_img/bryan-goff-395922-unsplash' + res + '.jpg',
                '_img/richard-gatley-533872-unsplash' + res + '.jpg'];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    var css = 'main section.third { background: #fff ' + bgImg + ' no-repeat center center; background-attachment: fixed; background-size: cover; }';
    var head = document.head;
    var style = document.getElementsByTagName('style')[0];

    if( !style ){
      style = document.createElement('style')
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }else{
      style = document.getElementsByTagName('style')[0];
      style.appendChild(document.createTextNode(css));
    }
})();
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

 /**  Format Number to Currency
  *
  * @param {string} number , Number to change
  * @param {string} currency , Type of Currenct, USD, EUR....
  *
  */
 function formatMoney(number, currency) {
   return number.toLocaleString('en-US', { style: 'currency', currency: currency });
 }
