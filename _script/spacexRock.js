/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Rockets from SpaceX
const spacexRock = 'https://api.spacexdata.com/v2/rockets'

// Elements used for SpaceX Info.
let sxRock = document.getElementById('spacexRock');
let card = '';
let active = '';
/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxRock);


 /**  SpaceX Rockets from SpaceX API */
 let displayCapsules = ( function displayCapsules () {

   fetch(spacexRock)
     .then(result => result.json()) // Transform into json.
     .then((res) => {

       // Remove load message
       removeAddText('', sxRock);

        for(key in res) {
          if ( res.hasOwnProperty(key) ) {
           active = ( res[key].active === true ) ? 'Active' : 'Inactive';
           card += '<div class="card"><div class="cardContainer">';
           card += '<h2>' + res[key].name + ' - ' + capitalize(res[key].type) + '</h2>';
           card += '<span><b> ' + active + ' </b></span>'
           card += '<span><b>First Flight: </b> ' + res[key].first_flight + ' ';
           card += '<b>Cost per Launch: </b> ' + formatMoney(res[key].cost_per_launch, 'USD') + '</span>';
           card += '<span><b>Height: </b> ' + res[key].height.meters + 'm <b>Diameter: </b> ' + res[key].diameter.meters + 'm </span>';
           card += '<span><b>Weight: </b> ' + res[key].mass.kg + 'kg </span>';
           card += '<span><b>Description: </b> <p>' + res[key].description + '</p> </span>';
           card += '<span><b></b></span>';
           card += '</div></div>';

        }
      }
      sxRock.innerHTML += card;
    } )

   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
