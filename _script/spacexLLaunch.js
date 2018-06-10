/* jshint esversion: 6 */
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    Scripts by doristef.me
-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

// API for Articles from SpaceX
const spacexLLaunch = 'https://api.spacexdata.com/v2/launches/latest'

// Elements used for SpaceX Info.
let sxLLaunch = document.getElementById('spacexLLaunch');
let card = '', d; // Variables for Cards and dates.

/* ADD Load Message on Fun Fact / Map */
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
                      card += '<span><b>Launch Date:</b> ' + d.toLocaleString() + ', <b> Launch Success:</b> ' + success + '</span>';
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


/*
{
"flight_number":63,
"mission_name":"SES-12",
"launch_year":"2018",
"launch_date_unix":1528087500,
"launch_date_utc":"2018-06-04T04:45:00.000Z",
"launch_date_local":"2018-06-04T00:45:00-04:00",
"rocket":{
"rocket_id":"falcon9",
"rocket_name":"Falcon 9",
"rocket_type":"FT",
"first_stage":
{"cores":[{"core_serial":"B1040","flight":2,"block":4,"reused":true,"land_success":null,"landing_type":null,"landing_vehicle":null}]},
"second_stage":
{"block":5,"payloads":[{"payload_id":"SES-12","reused":false,"customers":["SES"],"payload_type":"Satellite","payload_mass_kg":5383.85,
"payload_mass_lbs":11869.4,
"orbit":"GTO",
"orbit_params":
{"reference_system":"geocentric","regime":"geostationary","longitude":95,"semi_major_axis_km":null,"eccentricity":null,"periapsis_km":null,"apoapsis_km":null,"inclination_deg":null,"period_min":null,"lifespan_years":15}}]}},
"telemetry":{"flight_club":"https://www.flightclub.io/result?code=SES12"},
"reuse":
{"core":true,"side_core1":false,"side_core2":false,"fairings":false,"capsule":false},
"launch_site":
{"site_id":"ccafs_slc_40","site_name":"CCAFS SLC 40","site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"},
"launch_success":true,
"links":
{"mission_patch":"https://images2.imgbox.com/44/ba/fvMeODet_o.png",
"mission_patch_small":"https://images2.imgbox.com/4b/b9/oS8ezl6V_o.png",
"reddit_campaign":"https://www.reddit.com/r/spacex/comments/8jv0ed/ses12_launch_campaign_thread/",
"reddit_launch":"https://www.reddit.com/r/spacex/comments/8o9woj/rspacex_ses12_official_launch_discussion_updates/",
"reddit_recovery":null,"reddit_media":"https://www.reddit.com/r/spacex/comments/8oa3k4/rspacex_ses12_media_thread_videos_images_gifs/",
"presskit":"http://www.spacex.com/sites/spacex/files/ses-12missionpress_kit_6.2.18.pdf",
"article_link":"https://spaceflightnow.com/2018/06/04/multi-mission-telecom-craft-launched-by-spacex-for-ses/",
"wikipedia":"https://en.wikipedia.org/wiki/SES-12",
"video_link":"https://www.youtube.com/watch?v=2hcM5hqQ45s"},
"details":"The communications satellite serving the Middle East and the Asia-Pacific region at the same place as SES-8, and was the largest satellite built for SES. The first stage Block 4 was expended, while the second stage was Block 5."}
*/
