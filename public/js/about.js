document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('#carouselAutoplaying');
  var carouselBio = document.querySelector('#carouselBio');
  var bios = [
    'Andrea has been with the Arlington Food Shelf for 5 years. He runs our operations team.',
    'Cristina is our head of people relations. She loves working withour various partners to ensure that the Food Shelf remains stocked year-round',
    'Now in our 5th year, the Arlington Food Shelf is proud to be openevery day from 8 am to 8 pm, serving our community to the best of ourabilities. Come use our brand new drive thru!',
  ];

  carousel.addEventListener('slide.bs.carousel', function (event) {
    var currentSlide = event.to;
    carouselBio.textContent = bios[currentSlide];
  });
});

function initMap() {
  // Set the location coordinates
  const location = { lat: 43.06234, lng: -73.143 };

  // Create a new map instance
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location,
  });

  // Add a marker at the location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
