function initMap() {
    let windsorBar = {lat: 40.480122, lng: -104.902788};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: windsorBar}
    );
    let marker = new google.maps.Marker({position: windsorBar, map: map});
}
