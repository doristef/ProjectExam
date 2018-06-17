/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Launches from SpaceX
const spacexLLaunch = 'https://api.spacexdata.com/v2/launches/upcoming'

// Elements used for SpaceX Launches.
let sxULaunch = document.getElementById('spacexULaunch');
let card = '', d; // Variables for Cards and dates.

/* ADD Load Message on SpaceX Launches*/
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxULaunch);

/* DISPLAY SPACEX LAUNCHES, as cards */
let displayHistory = ( function displayHistory () {

  fetch(spacexLLaunch)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      // Remove load message
      removeAddText('', sxULaunch);

      for(key in res) {
                      let success = (res[key].launch_success === true ) ? 'Yes' : 'No';
                      let patch = (res[key].links.mission_patch_small) ? '<img src="' + res[key].links.mission_patch_small + '" alt="' + res[key].mission_name + '">' : '';
                      card += '<div class="card">';
                      card += patch;
                      card += '<div class="cardContainer">';
                      card += '<h2>' + res[key].mission_name + ' - ' + res[key].flight_number + '</h2>';
                      card += '<span><b>Rocket:</b> ' + res[key].rocket.rocket_name + ', <b>Rocket Type:</b> ' + res[key].rocket.rocket_type + ' </span>';
                      d = new Date(res[key].launch_date_local);
                      card += '<span><b>Launch Date:</b> ' + d.toLocaleString() + '</span>';
                      card += '<span><b>Launch Site:</b> ' + res[key].launch_site.site_name_long + '.</span>';
                         card += '<span><b>Links:</b><ul>';
                         for( key1 in res[key].links ) {
                            if ( res[key].links[key1] ) {
                              linkName = replaceWords('_', ' ', key1);
                              card +=  '<li><a href="' + res[key].links[key1] + '" title=" ' + res[key].mission_name + '">' + capitalize(linkName) + '</a></li>';
                            }
                         }
                         card += '</ul></span>';
                         card += '</div></div>';
        }
                 sxULaunch.innerHTML += card;
       } )

  // If it fails, show the error in the console.
  .catch(err => console.log(err));
})();
