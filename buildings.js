/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/

function initMap() {
    "use strict";
    var ams, village, map, marker;
    ams = {lat: 49.266839, lng: -123.249879};
    village = {lat: 49.266905, lng: -123.242756};
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ams
    });
    
    marker = new google.maps.Marker({
        position: ams,
        map: map
    });
    
    marker = new google.maps.Marker({
        position: village,
        map: map
    });
}
