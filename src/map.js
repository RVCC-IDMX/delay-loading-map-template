import { Loader } from '@googlemaps/js-api-loader';

/*
 inspired by:
 https://developers.google.com/maps/documentation/javascript/examples/programmatic-load-button#maps_programmatic_load_button-javascript 
 */

const mapInit = (apiKey, styles, locations) => {
  let map;
  const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
  const zoom = 14;

  const loader = new Loader({
    apiKey: apiKey,
    version: 'weekly',
  });

  const wrapper = document.getElementById('wrapper');

  // Use static image instead of static map to reduce API call cost

  wrapper.style.backgroundImage = `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)`;

  wrapper.addEventListener('click', () => {
    wrapper.remove();
    loader.load().then(() => {
      // mapOptions is an object that gets passed to the
      // google.maps.Map() method to create a new map
      //
      // There are two required options for every map: center and zoom.
      // Research what other options can be added and experiment
      // with them to change your map

      const mapOptions = {
        center: center,
        zoom: zoom,
        // put additional options here
      };

      map = new google.maps.Map(document.getElementById('map'), mapOptions);

      // Put additional map google code here
      // Put markers on the map and assign an infowindow to
      // each 
    });
  });
};

export { mapInit };
