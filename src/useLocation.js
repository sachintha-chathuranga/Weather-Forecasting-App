import { useEffect, useState } from "react";

const useLocation = () =>{
    const [latitude, setLatitude] = useState(6.9319);
    const [longitude, setLongitude] = useState(79.8478);

    useEffect(() => {
        const setLocation = async () =>{
            try {
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        (position) =>{
                            setLatitude(position.coords.latitude);
                            setLongitude(position.coords.longitude);
                        },
                        (error) =>{
                            console.error("Error getting location:", error);
                        }
                    );
                }else{
                    console.error('Geolocation is not supported by this browser.');
                }
            } catch (error) {
                console.log(error);
            }
        }
        setLocation();
    }, []);
    
    return [latitude, longitude];
}

export default useLocation;
