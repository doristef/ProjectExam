/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Location of ISS, Astronauts/People in Space.
const spacexHistory = 'https://api.spacexdata.com/v2/info/history?sort=title'
let howMany = 3; // How many articles to show
let article = []; // Store Articles

// Elements used for SpaceX Info.
let sxHis = document.getElementById('spacexHistory');

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', spacexHistory);


 /**  SpaceX History from SpaceX API
  *
  * @type {string} number, API, Number of People in Space.
  * @type {object} people, API, Names/Spacecrafts for People in Space.
  *
  */
 let displayHistory = ( function displayHistory () {
   window.onload = removeAddText('', funFact);

   fetch(spacexHistory)
     .then(result => result.json()) // Transform into json.
     .then((res) => {
       // Create a new array to sort.
        var arr = [];

        for(key in res) {
          if ( res.hasOwnProperty(key) ) {
           d = new Date( res[key].event_date_utc );
           let aDate = '<h5>' + d + '</h5>';
           let title = '<h2>' + res[key].title + '</h2>';
           let details = '<p>' + res[key].details + '</p>';
           let links = res[key].links;
           // Create a list of links
           let linkList = '<ul><li><h4> Read More: </h4></li>';
             for( key1 in links ) {
               if ( links.hasOwnProperty(key1) ) {
                 linkList += '<li><a href="' + links[key1] + '" title="' + key1 + '">' + capitalize(key1) + '</a></li>';
               }
             }
             linkList += '</ul>';

           arr.push({"id": key, "date":(d), "aDate" : aDate, "title" : title, "details" : details, "links" : linkList });
         }
        }
        // Sort the new array by date
        arr.sort( function (a, b) { return b.date - a.date; } );
            for( let i = 0; i < howMany; i++ ) {
                sxHis.innerHTML += arr[i].title;
                sxHis.innerHTML += arr[i].aDate;
                sxHis.innerHTML += arr[i].details;
                sxHis.innerHTML += arr[i].links;
            }
        } )



   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
