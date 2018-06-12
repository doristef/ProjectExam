/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// NASA APOD API
const apodAPI = 'https://api.nasa.gov/planetary/apod?api_key=U4rRiFqibIG2QG7OAaDiLyQTeMkGOYrHjXEH31qo';

// Lots of Elements to use for APOD.
let apodId = document.getElementById('apod');
let apodImg = document.getElementById('apod').getElementsByClassName('apodImg')[0];
let apodExp = document.getElementById('apod').getElementsByClassName('apodExp')[0];
let apodExpMore = document.getElementById('apod').getElementsByClassName('apodExpMore')[0];
let apodLoad = document.getElementById('apod').getElementsByClassName('apodLoad')[0];
let apodTitle = document.getElementById('apod').getElementsByClassName('apodTitle')[0];



/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Astronomy Picture of the Day, Coming Up!</h2>', apodLoad);

/**  SHOW APOD, Astronomy Picture of the Day
  *
  * @param {object} result , Object Array to post.
  *
  */
function showApod (result) {

        let imageDate = result.date;
        let imageLink = result.hdurl;
        let title = result.title;
        let imageUrl = result.url;
        let imageExp = result.explanation;
        let copyright = result.copyright;
        let media_type = result.media_type;
        /* Shorten the explanation
        let imageExpShort = imageExp.slice(0,100) + '  ...  ' */

        // TEXT for Button
        let apodExpMoreMore = 'Click to read about this picture!';
        let apodExpMoreLess = 'Hide the text!';

        // Add the card into the HTML.
        apodExp.style.display = 'none';
        apodTitle.style.display = 'none';
        apodTitle.innerHTML = '<h2>' + title + '</h2>';
        if( media_type === 'video' ) {
        apodImg.innerHTML = '<iframe width="420" height="315" src="' + imageUrl + '"></iframe>';
        } else {
        apodImg.innerHTML = '<a href="' + imageLink + '" alt="' + title + '"><img src="' + imageUrl + '" alt="' + title +'"></a>';
        }
        apodExp.innerHTML = imageExp+ '<p><b><a href="' + imageLink + '" alt="' + title + '"> Click the image to see it BIGGER and in HD!</a></b></p>';
        if ( copyright ){ apodExp.innerHTML = + '<p> Copyright: ' + copyright + '.</p>'; }
        apodExpMore.innerHTML += apodExpMoreMore;

        /**  SHOW / HIDE DIV, On Click */
        apodExpMore.addEventListener('click', function () {
          showHideElementById(apodTitle)
          showHideElementById(apodExp)
          apodExpMore.innerHTML = (apodExpMore.innerHTML === apodExpMoreMore ) ? apodExpMoreLess : apodExpMoreMore;
        }, false);
}


/**  FETCH THE API, SHOW APOD **/
fetch(apodAPI)
  .then(result => result.json()) // Transform into json.
  .then((res) => {
    // Works, Give res to showApod Function, Delete Load Message.
    removeAddText('', apodLoad);
    showApod(res);

  })
  // If it fails, show the error in the console.
  .catch(err => console.log(err));
