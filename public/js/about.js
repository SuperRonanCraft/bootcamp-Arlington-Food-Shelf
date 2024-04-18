document.addEventListener('DOMContentLoaded', function () {
  // Select the carousel element for autoplaying
  var carousel = document.querySelector('#carouselAutoplaying');
  // Select the element where the bio text will be displayed
  var carouselBio = document.querySelector('#carouselBio');
  // Define an array of bios
  var bios = [
    'Andrea has been with the Arlington Food Shelf for 5 years. He runs our operations team.',
    'Cristina is our head of people relations. She loves working withour various partners to ensure that the Food Shelf remains stocked year-round',
    'Now in our 5th year, the Arlington Food Shelf is proud to be open every day from 8 am to 8 pm, serving our community to the best of our abilities. Come use our brand new drive thru!',
  ];

  carouselBio.textContent = bios[0];

  carousel.addEventListener('slid.bs.carousel', function (event) {
    var currentSlide = event.to;
    carouselBio.textContent = bios[currentSlide];
  });
});


// initilize Google Map 

function initMap() {
  const location = { lat: 43.06234, lng: -73.143 };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
