import './MapsFrame.scss';

function MapsFrame({ API_KEY }) {
    return (
        <iframe
            id="map-frame"
            title="map-frame"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Space+Needle,Seattle+WA`}
        />
    )
}

export default MapsFrame;