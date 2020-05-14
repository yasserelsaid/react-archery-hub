import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MyMap = props => {
  const { center, mapContainerStyle } = props;
  return (
    <LoadScript googleMapsApiKey='AIzaSyCm2Vz0tPOYstiUduSqxcFV64LB3t3uZhY'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MyMap);
