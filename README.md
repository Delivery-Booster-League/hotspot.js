# hotspot.js

This is a simple POC to place hotspots on a image from a json file

## How to use it

Import the lib :
```html
<script src="hotspot.js"></script>
```

Create a simple container
```html
<div class="imagemap"></div>
```

And then call : 
```js
const imgurl = 'map.jpg';
const selector = '.imagemap';
const mapWidth = '500';
// init the image
hotspotJS.init(selector, imgurl, mapWidth);
// Place your image where you want, kinda like a minimap in a video game
// Possible values : 'bottom-right', 'bottom-left', 'top-left', 'top-right'
hotspotJS.place(selector, 'bottom-right', '10px');
// draw the hotspots on the image
const hotspotDefault = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544303/Target_Logo.svg';
// the default icon to show on the map, you can define customs icons inside your data with : customIcon
hotspotJS.drawPoints(points, hotspotDefault);
```

you can find the complete exemple in the index.html inside this repo
