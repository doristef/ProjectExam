/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    FORM VALIDATION v2.0 by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/


/**  EMAIL VALIDATION
 * Let's validate the email address
 * @param {string} email , email from Form!
 * @param {string} id , id of HTML element to write to.
 * @return {boolean} true , returns true if it validates
 *
 */
function checkEmail(email, id) {
  let emailRegex = /^[a-zA-Z0-9\.\-_]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}$/;
    if ( !email ) {
      // console.log('Please enter email address!');
      document.getElementById(id).innerHTML =
        'Please enter email address!';
    } else if ( !emailRegex.test( email ) ) {
      // console.log('Please enter valid email address!');
      document.getElementById(id).innerHTML =
        'Please enter valid email address!';
    } else {
      // console.log('It works');
      document.getElementById(id).innerHTML = '';
      return true;
    }
}

/**  NAME VALIDATION
 * Check if name is valid
 * @param {string} name , name from Form!
 * @param {string} id , id of HTML element to write to.
 * @return {boolean} true , returns true if it validates
 *
 */
function checkName(name, id) {
  // Check the name and include the scandinavian characters
  let nameRegex = /^[a-zA-Z\u00c0-\u017e]{2,30}$/;
  if ( !name ) {
    // console.log('Please enter first/last name!');
    document.getElementById(id).innerHTML =
      'Please enter ' + id + '!';
  } else if ( !nameRegex.test( name ) ) {
    // console.log('Please enter valid first/last name!');
    document.getElementById(id).innerHTML =
      'Please enter valid ' + id + '!';
  } else {
    // console.log('It works');
    document.getElementById(id).innerHTML = '';
    return true;
  }
}

/**  TELEPHONE VALIDATION
 * Check if telephone is valid
 * @param {string} tel , Phone number (xxx( -.)xxx( -.)xxxx).
 * @param {string} errorId , errorId in HTML.
 * @return {boolean} true , returns true if it's valid.
 *
 */
function checkTel(tel, id) {
  // Works with: xx xxx xxx, xx-xxx-xxx, xx.xxx.xxx xxxxxxx
  let telRegex = /^[0-9]{2}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/
  if ( !tel ) {
    // Error, telephone Empty
    document.getElementById(id).innerHTML =
      'Please enter ' + id + '!';
  } else if ( !telRegex.test( tel ) ) {
    // console.log('Please enter valid first/last name!');
    document.getElementById(id).innerHTML =
      'Please enter valid ' + id + '! <br> ( xxxxxxx / xx-xxx-xxx )';
  } else {
    // console.log('It works');
    document.getElementById(id).innerHTML = '';
    return true;
  }
}

// Create a variable for submit button.
btn = document.getElementById('btn');

/** BUTTON ON CLICK FUNCTION **/
btn.onclick = function() {
  // Create variables for all elements, easier to use.
  let fName = document.getElementById('regCust').elements['firstName'].value;
  let lName = document.getElementById('regCust').elements['lastName'].value;
  let email = document.getElementById('regCust').elements['email'].value;
  let tel = document.getElementById('regCust').elements['telephone'].value;
  let text = document.getElementById('textarea').value;

  // Call all check Functions.
  checkName(fName, 'firstName');
  checkName(lName, 'lastName');
  checkEmail(email, 'email');
  checkTel(tel, 'telephone');
  if( text.length < 10 ){ document.getElementById('text').innerHTML = 'Please enter something! (min.10 characters)';
  } else { document.getElementById('text').innerHTML = ''; }

  // IF all check Functions deliver true, success!
  if ( checkName(fName, 'firstName') && checkName(lName, 'lastName')
  && checkEmail(email, 'email') && checkTel(tel, 'telephone') && (text.length > 10)) {
      document.getElementById('success').innerHTML = 'Registration Success!';
  }
};
