(function(window) {

    function hotspot() {
        var _hotspotObject = {};

        _hotspotObject.init = function(selector, imgLink, mapWidth) {
            var container = document.querySelector(selector);

            let imageOverlay = document.createElement('div');
            imageOverlay.className = 'image-overlay';
            container.appendChild(imageOverlay);

            let imageWrapper = document.createElement('div');
            imageWrapper.className = 'image-wrapper';

            let img = document.createElement('img');
            img.src = imgLink;
            img.width = mapWidth;
            imageWrapper.appendChild(img);
            container.appendChild(imageWrapper);

        };

        _hotspotObject.place = function(selector, position, margin) {
            var container = document.querySelector(selector);
            container.style.position = 'absolute';
            if (position == 'bottom-right') {
                container.style.right = margin;
                container.style.bottom = margin;
            } else if (position == 'bottom-left') {
                container.style.left = margin;
                container.style.bottom = margin;
            } else if (position == 'top-left') {
                container.style.left = margin;
                container.style.top = margin;
            } else {
                container.style.right = margin;
                container.style.top = margin;
            }


        };

        _hotspotObject.drawPoints = function(points, hotspotDefault) {
            var overlay = document.querySelector('.image-overlay');
            var dataField = document.querySelector('.data');
            points.forEach((point) => {

                let link = document.createElement('a');
                link.href = point.link;
                link.style.left = point.x;
                link.style.top = point.y;
                link.title = point.data;
                link.className = 'link';

                let img = document.createElement('img');
                img.className = 'overlay-image';

                if (point.customPointer) {
                    img.src = point.customPointer;
                } else {
                    img.src = hotspotDefault;
                }

                link.appendChild(img);
                overlay.appendChild(link);
                img.data = point.data;
            });
        };

        return _hotspotObject;
    }

    if (typeof(window.hotspotJS) === 'undefined') {
        window.hotspotJS = hotspot();
    }
})(window);