# hotspot.js

This is a simple POC to place hotspots on a image from a json file

## How to use it

Create a simple container
```html
<div class="imagemap"></div>
```

And then call : 
```js
// init the image
hotspotJS.init(selector, imgurl, mapWidth);
// Place your image where you want, kinda like a minimap in a video game
// Possible values : 'bottom-right', 'bottom-left', 'top-left', 'top-right'
hotspotJS.place(selector, 'bottom-right', '10px');
// draw the hotspots on the image
 hotspotJS.drawPoints(points, hotspotDefault);
```

you can find the complete exemple in the index.html inside this repo