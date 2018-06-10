/** FORM VALIDATION v.1 by doristef.me **/

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
  let nameRegex = /^[A-Za-zÀ-ÿ]{2,30}$/;
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

// Create a variable for submit button.
btn = document.getElementById('btn');

/** BUTTON ON CLICK FUNCTION **/
btn.onclick = function() {
  // Create variables for all elements, easier to use.
  let fName = document.getElementById('regCust').elements['firstName'].value;
  let lName = document.getElementById('regCust').elements['lastName'].value;
  let email = document.getElementById('regCust').elements['email'].value;
  // Call all check Functions.
  checkName(fName, 'firstName');
  checkName(lName, 'lastName');
  checkEmail(email, 'email');

  // IF all check Functions deliver true, success!
  if ( checkName(fName, 'firstName') && checkName(lName, 'lastName')
  && checkEmail(email, 'email')) {
      document.getElementById('success').innerHTML = 'Registration Success!';
  }
};
