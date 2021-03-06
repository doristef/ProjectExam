/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for the History of SpaceX
const spacexHistory = 'https://api.spacexdata.com/v2/info/history'
let howMany = 3; // How many articles to show
let article = []; // Store Articles, to order by date

// Elements used for SpaceX Info.
let sxHis = document.getElementById('spacexHistory');

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxHis);


 /**  SpaceX History from SpaceX API  */
 let displayHistory = ( function displayHistory () {

   fetch(spacexHistory)
     .then(result => result.json()) // Transform into json.
     .then((res) => {
       // Remove load message
       removeAddText('', sxHis);
       // Create a new array to sort.
        let arr = [];
        let showAll = res.length;
        for(key in res) {
          if ( res.hasOwnProperty(key) ) {
           d = new Date( res[key].event_date_utc );
           // Date to String, Slice off Time.
           d1 = new Date(d).toUTCString();
           d1 = d1.split(' ').slice(0, 4).join(' ');

           let aDate = '<h5>' + d1 + '</h5>';
           let title = '<h2>' + res[key].title + '</h2>';
           let details = '<p>' + res[key].details + '</p>';
           let links = res[key].links;
           // Create a list of links
           let linkList = '<ul><li><h4> Read More: </h4></li>';
             for( key1 in links ) {
               if ( links.hasOwnProperty(key1) ) {
                 linkList += '<li> <a href="' + links[key1] + '" title="' + capitalize(key1) + '">' + capitalize(key1) + '</a> </li>';
               }
             }
             linkList += '</ul><hr>';

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
            sxHis.innerHTML += '<a href="history.html" title="All Articles">View Older Articles</a>';
        } )



   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
