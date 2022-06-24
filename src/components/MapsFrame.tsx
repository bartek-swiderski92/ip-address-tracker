import '../styles/MapsFrame.scss';

interface Props {
    ipResponse: {
        ip: string,
        city: string,
        timezone: string,
        lat: string,
        lng: string
        isp: string,
    };
    API_KEY: string
}

export const MapsFrame: React.FC<Props> = ({ ipResponse, API_KEY }) => {

    if (!!ipResponse) {
        return (
            <iframe
                id="maps-frame"
                title="maps-frame"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${ipResponse.lat},${ipResponse.lng}`}
            />
        )
    } else {
        return (<div>Error while loading the data, please try again later</div>)
    }

}