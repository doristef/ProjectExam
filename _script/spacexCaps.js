/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Capsules from SpaceX
const spacexCaps = 'https://api.spacexdata.com/v2/parts/caps'

// Elements used for SpaceX Capsules.
let sxCap = document.getElementById('spacexCaps');
let card = ''; // For creating card to add to HTML

/* ADD Load Message on Capsules */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxCap);


 /**  SpaceX Capsules from SpaceX API */
 let displayCapsules = ( function displayCapsules () {

   fetch(spacexCaps)
     .then(result => result.json()) // Transform into json.
     .then((res) => {
       // Remove load message
       removeAddText('', sxCap);

        for(key in res) {
          if ( res.hasOwnProperty(key) ) {
          // If there are any missions, add to list
          if ( res[key].missions.length >= 1  ){

           card += '<div class="card"><div class="cardContainer">';
           card += '<h2>' + res[key].capsule_serial + ' - ' + res[key].type + '</h2>';
           card += '<span><b>ID:</b> ' + capitalize(res[key].capsule_id) + '</span> <span><b>Status:</b> ' + res[key].status + ' </span>';
           // If there is launch date
           if( res[key].original_launch ){
              // Cut out the time, show only date.
              let d = new Date(  );
              d1 = new Date(res[key].original_launch).toUTCString();
              d1 = d1.split(' ').slice(0, 4).join(' ');
              card += '<span><b>Original Launch:</b> ' + d1 + '</span> <span><b> Landings:</b> ' + res[key].landings + '</span>';
            }

              card += '<span><b>Missions:</b><ul>';
              for( key1 in res[key].missions ) {
                 if ( res[key].missions.hasOwnProperty(key1) ) {
                   card+=  '<li>' + capitalize(res[key].missions[key1]) + '</li>';
                 }
              }
              card += '</ul></span>';
              card += '</div></div>';
            }
        }
      }
      sxCap.innerHTML += card;
    } )

   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
