import {useEffect, useState, useCallback} from 'react';
import Geolocation from 'react-native-geolocation-service';

export default function useLocation() {
  const [location, setLocation] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);

  const onGetLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => setLocation(position),
      err => setError(err),
      {
        enableHighAccuracy: true,
        timeout: 1500,
        maximumAge: 1000,
      },
    );
  }, []);

  useEffect(() => {
    onGetLocation();
  }, []);

  return {onGetLocation, location, error};
}
