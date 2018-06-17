/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Latest Launches from SpaceX
const spacexLLaunch = 'https://api.spacexdata.com/v2/launches/latest'

// Elements used for SpaceX Latest Launches.
let sxLLaunch = document.getElementById('spacexLLaunch');
let card = '', d; // Variables for Cards and dates.

/* ADD Load Message on Latest Launches */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxLLaunch);

let displayHistory = ( function displayHistory () {

  fetch(spacexLLaunch)
    .then(result => result.json()) // Transform into json.
    .then((res) => {

      // Remove load message
      removeAddText('', sxLLaunch);

                      let success = (res.launch_success === true ) ? 'Yes' : 'No';
                      card += '<div class="card">';
                      card += '<img src="' + res.links.mission_patch_small + '" alt="' + res.mission_name +'">';
                      card += '<div class="cardContainer">';
                      card += '<h2>' + res.mission_name + ' - fn:' + res.flight_number + '</h2>';
                      card += '<span><b>Rocket:</b> ' + res.rocket.rocket_name + ', <b>Rocket Type:</b> ' + res.rocket.rocket_type + ' </span>';
                      d = new Date(res.launch_date_local);
                      card += '<span><b>Launch Date:</b> ' + d.toLocaleString() + '</span>';
                      card += '<span><b> Launch Success:</b> ' + success + '</span>';
                      card += '<span><b>Launch Site:</b> ' + res.launch_site.site_name_long + '.</span>';
                      card += '<span><b>Telemetry:</b> <a href="' + res.telemetry.flight_club + '" title="Telemetry">Click Here!</a></span>';
                      card += '<span><b>Details:</b> <p> ' + res.details + '</p></span>';
                         card += '<span><b>Links:</b><ul>';
                         for( key1 in res.links ) {
                            if ( res.links.hasOwnProperty(key1) ) {
                              linkName = replaceWords('_', ' ', key1);
                              card +=  '<li><a href="' + res.links[key1] + '" title=" ' + res.mission_name + '">' + capitalize(linkName) + '</a></li>';
                            }
                         }
                         card += '</ul></span>';
                         card += '</div></div>';

                 sxLLaunch.innerHTML += card;
       } )
  // If it fails, show the error in the console.
  .catch(err => console.log(err));
})();
