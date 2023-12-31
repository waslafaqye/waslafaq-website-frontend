function MapView({lat, long}: { lat: string, long: string }) {


    return (
        <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.6487570752101!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db05e60ee1b5%3A0x56491057e3789ca6!2z2YjYtdmEINin2YHYp9mCINmE2YTYrdmE2YjZhCDYp9mE2KjYsdmF2KzZitipINmI2KrZg9mG2YjZhNmI2KzZitinINin2YTYp9iq2LXYp9mE2KfYqg!5e1!3m2!1sen!2s!4v1703744325822!5m2!1sen!2s`}
            className={'h-full w-full rounded-3xl'}
            referrerPolicy="no-referrer-when-downgrade"></iframe>

    )


    //
    // const latInfo = Number(lat)
    // const longInfo = Number(long)
    //
    // const mapContainer = useRef(null);
    // const map: any = useRef(null);
    // const location = {lng: longInfo, lat: latInfo};
    // const [zoom] = useState(14);
    // maptilersdk.config.apiKey = 'IfagLNRx3DRb2Uwko1YO';
    //
    // useEffect(() => {
    //     if (map.current) return;
    //
    //     map.current = new maptilersdk.Map({
    //         container: mapContainer.current as any,
    //         style: maptilersdk.MapStyle.STREETS,
    //         center: [longInfo, latInfo],
    //         zoom: zoom
    //     });
    //
    //     new maptilersdk.Marker({color: "#115993"})
    //         .setLngLat([44.204822, 15.383124])
    //         .addTo(map.current);
    //
    // }, [location.lng, location.lat, zoom]);
    //
    // return (
    //     <div className="relative  w-auto h-full">
    //         <div ref={mapContainer} className="absolute min-w-full  h-full "/>
    //     </div>
    // );
}

export default MapView