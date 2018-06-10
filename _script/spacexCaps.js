/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Articles from SpaceX
const spacexCaps = 'https://api.spacexdata.com/v2/parts/caps'

// Elements used for SpaceX Info.
let sxCap = document.getElementById('spacexCaps');
let card = '';
/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxCap);


 /**  SpaceX Capsules from SpaceX API
  *
  * @type {string} number, API, Number of People in Space.
  * @type {object} people, API, Names/Spacecrafts for People in Space.
  *
  */
 let displayCapsules = ( function displayCapsules () {
   removeAddText('', sxCap);

   fetch(spacexCaps)
     .then(result => result.json()) // Transform into json.
     .then((res) => {

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


/*
 [{
   "id":"dragon2",
   "name":"Dragon 2",
   "type":"capsule",
   "active":false,
   "crew_capacity":0,
   "sidewall_angle_deg":15,
   "orbit_duration_yr":2,
   "heat_shield":{"material":"PICA-X","size_meters":3.6,"temp_degrees":3000,"dev_partner":"NASA"},
   "thrusters":[{"type":"Draco","amount":18,"pods":4,"fuel_1":"nitrogen tetroxide","fuel_2":"monomethylhydrazine","thrust":{"kN":0.4,"lbf":90}}]
   ,"launch_payload_mass":{"kg":6000,"lb":13228},
   "launch_payload_vol":{"cubic_meters":25,"cubic_feet":883},
   "return_payload_mass":{"kg":3000,"lb":6614},
   "return_payload_vol":{"cubic_meters":11,"cubic_feet":388},
   "pressurized_capsule":{"payload_volume":{"cubic_meters":11,"cubic_feet":388}},
   "trunk":{"trunk_volume":{"cubic_meters":14,"cubic_feet":494},
   "cargo":{"solar_array":2,"unpressurized_cargo":true}},
   "height_w_trunk":{"meters":7.2,"feet":23.6},
   "diameter":{"meters":3.7,"feet":12}},
   {
     "id":"dragon1",
     "name":"Dragon 1",
     "type":"capsule",
     "active":true,
     "crew_capacity":0,
     "sidewall_angle_deg":15,
     "orbit_duration_yr":2,
     "heat_shield":{"material":"PICA-X","size_meters":3.6,"temp_degrees":3000,"dev_partner":"NASA"},
     "thrusters":[{"type":"Draco","amount":18,"pods":4,"fuel_1":"nitrogen tetroxide","fuel_2":"monomethylhydrazine","thrust":{"kN":0.4,"lbf":90}}],
     "launch_payload_mass":{"kg":6000,"lb":13228},
     "launch_payload_vol":{"cubic_meters":25,"cubic_feet":883},
     "return_payload_mass":{"kg":3000,"lb":6614},
     "return_payload_vol":{"cubic_meters":11,"cubic_feet":388},
     "pressurized_capsule":{"payload_volume":{"cubic_meters":11,"cubic_feet":388}},
     "trunk":{"trunk_volume":{"cubic_meters":14,"cubic_feet":494},
     "cargo":{"solar_array":2,"unpressurized_cargo":true}},
     "height_w_trunk":{"meters":7.2,"feet":23.6},
     "diameter":{"meters":3.7,"feet":12}},
     {
       "id":"crewdragon",
       "name":"Crew Dragon",
       "type":"capsule",
       "active":false,
       "crew_capacity":7,
       "sidewall_angle_deg":15,
       "orbit_duration_yr":2,
       "heat_shield":{"material":"PICA-X","size_meters":3.6,"temp_degrees":3000,"dev_partner":"NASA"},
       "thrusters":[
         {"type":"Draco","amount":18,"pods":4,"fuel_1":"nitrogen tetroxide","fuel_2":"monomethylhydrazine","thrust":{"kN":0.4,"lbf":90}},
         {"type":"SuperDraco","amount":8,"pods":4,"fuel_1":"dinitrogen tetroxide","fuel_2":"monomethylhydrazine","thrust":{"kN":71,"lbf":16000}}],
      "launch_payload_mass":{"kg":6000,"lb":13228},
      "launch_payload_vol":{"cubic_meters":25,"cubic_feet":883},
      "return_payload_mass":{"kg":3000,"lb":6614},
      "return_payload_vol":{"cubic_meters":11,"cubic_feet":388},
      "pressurized_capsule":{"payload_volume":{"cubic_meters":11,"cubic_feet":388}},
      "trunk":{"trunk_volume":{"cubic_meters":14,"cubic_feet":494},
      "cargo":{"solar_array":2,"unpressurized_cargo":true}},
      "height_w_trunk":{"meters":7.2,"feet":23.6},
      "diameter":{"meters":3.7,"feet":12}}]
  */
