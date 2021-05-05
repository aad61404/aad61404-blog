https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-geolocation-data-to-find-a-users-gps-coordinates

<script>
  // Add your code below this line
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}

  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
