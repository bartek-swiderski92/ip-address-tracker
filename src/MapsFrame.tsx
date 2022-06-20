import './MapsFrame.scss';

function MapsFrame({ ipResponse, API_KEY }) {
    return (
        <iframe
            id="maps-frame"
            title="maps-frame"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${ipResponse.location.lat},${ipResponse.location.lng}`}
        />
    )
}

export default MapsFrame;