/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for about SpaceX
const spacexAbout = 'https://api.spacexdata.com/v2/info'

// Elements used for SpaceX About.
let sxAbout = document.getElementById('spacexAbout');

/* ADD Load Message on About */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxAbout);


 /**  SpaceX, About -  */
 let displayAbout = ( function displayAbout () {

   fetch(spacexAbout)
     .then(result => result.json()) // Transform into json.
     .then((res) => {

       // Remove load message
       removeAddText('', sxAbout);

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

            // Push all data to HTML
            sxAbout.innerHTML += '<strong>' + name + '</strong> was founded in <strong>' + founded + '</strong> by the incredible <strong>' + founder + '</strong>.<br>';
            sxAbout.innerHTML += '<strong>' + name + '</strong> has now <strong>' + employees + '</strong> employees, <strong>' + vehicles + '</strong> Vehicles, <strong>' + launch_sites + '</strong> Launch sites and <strong>' + test_sites + '</strong> Test site.';
            sxAbout.innerHTML += '<h4> Management </h4>';
            sxAbout.innerHTML += '<p>The <strong>CEO</strong> is ' + ceo + ',<br> The  <strong>CTO</strong> is ' + cto + ',<br> The <strong>COO</strong> is ' + coo + ' and<br> the <strong>CTO of Propulsion</stron> is ' + cto_propulsion + '.</p>';
            sxAbout.innerHTML += '<h4> Location </h4>';
            sxAbout.innerHTML += '<p><strong>' + name + '</strong> is located at ' + hqAddr + ', ' + hqCity + ', ' + hqState + ', United States of America. </p>';
            sxAbout.innerHTML += '<h4> Summary </h4>';
            sxAbout.innerHTML += '<p>' + summary + '</p>';
            // Use formatMoney function
            sxAbout.innerHTML += '<p><strong>' + name + '</strong> is valued at ' + formatMoney(valuation, 'USD') + '</p>';
      })
   // If it fails, show the error in the console.
   .catch(err => console.log(err));
 })();
