/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Location of ISS, Astronauts/People in Space.
const opennISSnow = 'http://api.open-notify.org/iss-now.json';
const opennAstros = 'http://api.open-notify.org/astros.json';

// Elements used for Fun Facts.
let funFact = document.getElementById('funFact1');
let funFact2 = document.getElementById('funFact2');
let funFact2ul = document.getElementById('funFact2').getElementsByClassName('list');
let funFact3 = document.getElementById('funFact3');
let funMap = document.getElementById('map');

// Create variable for MAP.
let map;

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fun Facts Coming Up!</h2>', funFact);
window.onload = removeAddText('<h2>Getting Ready The ISS Map!</h2>', funMap);


/**  INTERNATIONAL SPACE STATION, Location on Google Map, FunFact from OpenNotify
 *
 * @type {string} lat, API, Latitude of ISS.
 * @type {string} lng, API, Langtitude of ISS.
 * @type {object} icon, Create Icon in Google MAP.
 * @type {object} marker, Add the Icon to Google MAP.
 *
 */
function initMap() {
  fetch(opennISSnow)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      // Remove load message
      removeAddText('', funMap);
        // If its good, give the results to displayCards.
        let lat = res.iss_position.latitude;
        let lng = res.iss_position.longitude;

        // Remove one decimal point, Google Maps takes only 3, API gives 4.
        lat = rmvDec(lat, 3);
        lng = rmvDec(lng, 3);

        let showPosition = '<h5>The ISS is currently over:</h5><p>' + lat + '&deg; N, ' + lng + '	&deg; E - <a href="#showMAP"> Show On Map </a></p>';
        funFact3.innerHTML = showPosition;

        // Create New Map with lat and lng.
        map = new google.maps.Map(funMap, {
          center: {lat: lat, lng: lng},
          zoom: 3
        });

        // Create a special marker for the Map.
        var icon = {
          url: './_script/iss.png',
          scaledSize: new google.maps.Size(95, 95), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };

        // Put in a special marker.
        var marker = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          map: map,
          title: 'International Space Station',
          icon: icon
        });

        // Refresh every ten seconds
        setTimeout(initMap, 10000);
    })
    // If it fails, show the error in the console.
    .catch(err => console.log(err));
}

/**  PEOPLE IN SPACE, FunFact from OpenNotify
 *
 * @type {string} number, API, Number of People in Space.
 * @type {object} people, API, Names/Spacecrafts for People in Space.
 *
 */
let inSpace = ( function inSpace() {

  fetch(opennAstros)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      // Remove load message
      removeAddText('', funFact);
      // if it works
      let number = res.number;
      let people = res.people;

      // Add to FunFact element
      funFact.innerHTML += '<h5>How many humans are in space right now?</h5><p>There are currently ' + number + ' humans in space! </p>';
      funFact2.innerHTML += '<h5>These astronauts are currently in space: </h5>'
      var listAstronauts = '<ul>';
      for( key in people ) {
        // Check if item has anything
        if ( people.hasOwnProperty(key) ) {
          let name = people[key].name;
          let craft = people[key].craft;
          // Add to funFact2 element
          if ( craft === 'ISS' ) {
            listAstronauts += '<li>' + name + '</li>'; }
        } else { listAstronauts += '</ul>'; }
      } // End For Loop
      funFact2.innerHTML += listAstronauts;
    })
  // If it fails, show the error in the console.
  .catch(err => console.log(err));
})();
