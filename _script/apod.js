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
        // Shorten the explanation
        let imageExpShort = imageExp.slice(0,100) + '  ...  '

        // TEXT for Button
        let apodExpMoreMore = 'Read More About This Image!';
        let apodExpMoreLess = 'Read Less!';

        // Add the card into the HTML.
        apodTitle.innerHTML = '<h2>' + title + '</h2>';
        apodImg.innerHTML = '<a href="' + imageLink + '" alt="' + title + '"><img src="' + imageUrl + '" alt="' + title +'"></a>';
        apodExp.innerHTML += imageExpShort;
        apodExpMore.innerHTML += apodExpMoreMore;

        /**  SHOW / HIDE DIV, On Click */
        apodExpMore.addEventListener('click', function () {
          apodExp.innerHTML = (apodExp.innerHTML === imageExp) ? imageExpShort : imageExp;
          apodExpMore.innerHTML = (apodExpMore.innerHTML === apodExpMoreMore ) ? apodExpMoreLess : apodExpMoreMore;
        }, false);
}


/**  FETCH THE API, SHOW APOD **/
fetch(apodAPI)
  .then(result => result.json()) // Transform into json.
  .then((res) => {
    // Works, Give res to showApod Function, Delte Load Message.
    removeAddText('', apodLoad);
    showApod(res);

  })
  // If it fails, show the error in the console.
  .catch(err => console.log(err));