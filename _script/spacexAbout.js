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

            sxAbout.innerHTML += '<strong>' + name + '</strong> was founded in <strong>' + founded + '</strong> by the incredible <strong>' + founder + '</strong>.<br>';
            sxAbout.innerHTML += '<strong>' + name + '</strong> has now <strong>' + employees + '</strong> employees, <strong>' + vehicles + '</strong> Vehicles, <strong>' + launch_sites + '</strong> Launch sites and <strong>' + test_sites + '</strong> Test site.';
            sxAbout.innerHTML += '<h4> Management </h4>';
            sxAbout.innerHTML += '<p>The <strong>CEO</strong> is ' + ceo + ',<br> The  <strong>CTO</strong> is ' + cto + ',<br> The <strong>COO</strong> is ' + coo + ' and<br> the <strong>CTO of Propulsion</stron> is ' + cto_propulsion + '.</p>';
            sxAbout.innerHTML += '<h4> Location </h4>';
            sxAbout.innerHTML += '<p><strong>' + name + '</strong> is located at ' + hqAddr + ', ' + hqCity + ', ' + hqState + ', United States of America. </p>';
            sxAbout.innerHTML += '<h4> Summary </h4>';
            sxAbout.innerHTML += '<p>' + summary + '</p>';
            sxAbout.innerHTML += '<p><strong>' + name + '</strong> is valued at &dollar;' + valuation + '.</p>';
          /*  <div id="card">
              <div class="container">
                <h4><b>Jane Doe</b></h4>
                <p>Interior Designer</p>
              </div>
            </div> */
      })
   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
