let lat = 0;
let long = 0;
let map = L.map('map').setView([lat, long], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


jQuery(document).ready(
    function ($) {

        //Appel AJAX
        setInterval(ajax, 1000);
    }
)

function ajax() {
    $.ajax(
        {
            url: 'http://api.open-notify.org/iss-now.json',
            method: 'GET'
        }
    )
        .done(
            (localisation) => {

                lat = localisation.iss_position.latitude;
                long = localisation.iss_position.longitude;
                $("#iss").text(localisation.iss_position.latitude);
                $("#iss1").text(localisation.iss_position.longitude);
                map.flyTo([lat, long]);
                let circle = L.circle([lat, long], {
                    color: 'purple',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 10,


                }).addTo(map);

            }
        )
}
