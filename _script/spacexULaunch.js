/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Articles from SpaceX
const spacexLLaunch = 'https://api.spacexdata.com/v2/launches/upcoming'

// Elements used for SpaceX Info.
let sxULaunch = document.getElementById('spacexULaunch');
let card = '';

/* ADD Load Message on Fun Fact / Map */
window.onload = removeAddText('<h2>Fetching Data!</h2>', sxULaunch);


let displayHistory = ( function displayHistory () {

  fetch(spacexLLaunch)
    .then(result => result.json()) // Transform into json.
    .then((res) => {
      removeAddText('', sxULaunch);
      for(key in res) {
                      let success = (res[key].launch_success === true ) ? 'Yes' : 'No';
                      let patch = (res[key].links.mission_patch_small) ? '<img src="' + res[key].links.mission_patch_small + '" alt="' + res[key].mission_name + '">' : '';
                      card += '<div class="card">';
                      card += patch;
                      card += '<div class="cardContainer">';
                      card += '<h2>' + res[key].mission_name + ' - ' + res[key].flight_number + '</h2>';
                      card += '<span><b>Rocket:</b> ' + res[key].rocket.rocket_name + ', <b>Rocket Type:</b> ' + res[key].rocket.rocket_type + ' </span>';
                      card += '<span><b>Launch Date:</b> ' + res[key].launch_date_local + '</span>';
                      card += '<span><b>Launch Site:</b> ' + res[key].launch_site.site_name_long + '.</span>';
                         card += '<span><b>Links:</b><ul>';
                         for( key1 in res[key].links ) {
                            if ( res[key].links[key1]) {
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


/*
[{
"flight_number":64,
"mission_name":"CRS-15",
"launch_year":"2018",
"launch_date_unix":1530265260,
"launch_date_utc":"2018-06-29T09:41:00.000Z",
"launch_date_local":"2018-06-29T05:41:00-04:00",
"rocket":{
  "rocket_id":"falcon9",
  "rocket_name":"Falcon 9",
  "rocket_type":"FT",
  "first_stage":
    {"cores":[{
      "core_serial":"B1045",
      "flight":2,
      "block":4,
      "reused":true,
      "land_success":null,
      "landing_type":null,
      "landing_vehicle":null}]},

  "second_stage":{
    "block":4,
    "payloads":[{
      "payload_id":"SpaceX CRS-15",
      "cap_serial":null,
      "reused":null,
      "customers":["NASA (CRS)"],
      "payload_type":"Dragon 1.1",
      "payload_mass_kg":2410,
      "payload_mass_lbs":null,
      "orbit":"ISS",
      "orbit_params":{
        "reference_system":"geocentric",
        "regime":"low-earth",
        "longitude":null,
        "semi_major_axis_km":null,
        "eccentricity":null,
        "periapsis_km":null,
        "apoapsis_km":null,
        "inclination_deg":51.6,
        "period_min":null,
        "lifespan_years":null},

    "mass_returned_kg":null,
    "mass_returned_lbs":null,
    "flight_time_sec":null,
    "cargo_manifest":null}]}},

    "telemetry":{"flight_club":null},
    "reuse":{"core":false,"side_core1":false,"side_core2":false,
    "fairings":false,"capsule":false},
    "launch_site":{"site_id":"ccafs_slc_40","site_name":"CCAFS SLC 40","site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"},
    "launch_success":null,
    "links":{
    "mission_patch":null,
    "mission_patch_small":null,
    "reddit_campaign":"https://www.reddit.com/r/spacex/comments/8pua1m/crs15_launch_campaign_thread/","reddit_launch":null,"reddit_recovery":null,"reddit_media":null,"presskit":null,"article_link":null,"wikipedia":null,"video_link":null},"details":null}*/
