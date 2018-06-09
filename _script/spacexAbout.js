/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Location of ISS, Astronauts/People in Space.
const spacexAbout = 'https://api.spacexdata.com/v2/info'

// Elements used for SpaceX Info.
let sxAbout = document.getElementById('spacexAbout');

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', spacexAbout);


 /**  SpaceX, About
  *
  * @type {-} -, -, -.
  *
  */
 let displayAbout = ( function displayAbout () {
   window.onload = removeAddText('', spacexAbout);

   fetch(spacexAbout)
     .then(result => result.json()) // Transform into json.
     .then((res) => {
            // Variables for data
            let name = res.name;
            let founder = res.founder;
            let founded = res.founded;
            let employees = res.employees;
            let vehicles = res.vehicles;
            let launch_sites = res.launch_sites;
            let test_sites = res.test_sites;
            let ceo = res.ceo;
            let cto = res.cto;
            let coo = res.coo;
            let cto_propulsion = res.cto_propulsion;
            let valuation = res.valuation;
            let hqAddr = res.headquarters.address;
            let hqCity = res.headquarters.city;
            let hqState = res.headquarters.state;
            let summary = res.summary;

            sxAbout.innerHTML += ' BLABALBLA ' + name + ' Founder! ' + founder + ' at ' + hqAddr;


      })
   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
