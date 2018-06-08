/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/


/* GOOGLE API - AIzaSyDhkw-MC6xhpCo3RkxVOzosFx39D461TQE */

const opennISSnow= 'http://api.open-notify.org/iss-now.json';
const opennAstros = 'http://api.open-notify.org/astros.json';
const funFact = document.getElementById('funFact1');
const funFact2 = document.getElementById('funFact2');
const funMap = document.getElementById('map');
let map;

/* Add / Remove - Load Message */
function removeAddText(message, id) {
  id.innerHTML = message;
}

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fun Facts Coming Up!</h2>', funFact);
window.onload = removeAddText('<h2>Getting Ready The ISS Map!</h2>', funMap);


/* SHOW ISS (openNotify) ON GOOGLE MAPS */
function initMap() {
  window.onload = removeAddText('', funMap);
  fetch(opennISSnow)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      // If its good, give the results to displayCards.
      let lat = res.iss_position.latitude;
      let lng = res.iss_position.longitude;
      function round(num) {
          return +(Math.round(num + "e+3")  + "e-3");
      }
      lat = round(lat);
      lng = round(lng);

    map = new google.maps.Map(funMap, {
      center: {lat: lat, lng: lng},
      zoom: 3
    });

    var icon = {
      url: './_script/iss.png',
      scaledSize: new google.maps.Size(95, 95), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map,
      title: 'International Space Station',
      icon: icon
    });

    setTimeout(initMap, 5000);
  })
  // If it fails, show the error in the console.
  .catch(err => console.log(err));
}

/* People in space, fun fact (openNotify) */
let inSpace = ( function inSpace() {
  window.onload = removeAddText('', funFact);
  fetch(opennAstros)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      // If its good, give the results to displayCards.
      let number = res.number;
      let people = res.people;
      let message = res.message;

      funFact.innerHTML += 'Today there are ' + number + ' people in space! <br>';

      for(key in people) {
        if (people.hasOwnProperty(key)) {
          // let of all items, easier.
          let name = people[key].name;
          let craft = people[key].craft;
          // Add the card into the HTML.
          funFact2.innerHTML += 'Name: ' + name + '<br> Spacecraft: ' + craft + '<br><br>';
      }
    }
  })
  // If it fails, show the error in the console.
  .catch(err => console.log(err));
})();
