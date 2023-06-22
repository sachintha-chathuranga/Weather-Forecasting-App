import { useEffect, useState } from "react";

const useLocation = () =>{
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) =>{
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    (error) =>{
                        setLatitude(6.9319);
                        setLongitude(79.8478);
                        console.error("Error getting location:", error);
                    }
                );
            }else{
                setLatitude(6.9319);
                setLongitude(79.8478);
                console.error('Geolocation is not supported by this browser.');
            }
    }, []);
    
    return [latitude, longitude];
}

export default useLocation;
