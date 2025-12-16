import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.umd.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.umd.js'

 lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
});

