import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMap = props => {
  const { center, mapContainerStyle } = props;
  return (
    <LoadScript googleMapsApiKey='AIzaSyCADoKMuCssFx5K4U_9MHNJQUvBzIjYVfU'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        isMarkerShown
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MyMap);
