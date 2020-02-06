import React from 'react';
import config from '../../config';
import { GoogleMap, LoadScript, MarkerClusterer } from '@react-google-maps/api';
import CustomInfoWindow2 from './CustomInfoWindow';

export const Map = ({ markets, height, width }) => {
  const mapContainerStyle = {
    height: `${height}`,
    width: `${width}`
  };

  // returns the average of an array
  const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  const center = {
    lat: arrAvg(markets.map(market => +market.latitude)),
    lng: arrAvg(markets.map(market => +market.longitude))
  };

  return (
    <div className='fadeLoad'>
      <LoadScript id='script-loader' googleMapsApiKey={config.apiKey}>
        <GoogleMap
          id='marker-example'
          mapContainerStyle={mapContainerStyle}
          zoom={
            markets.length > 50
              ? 9
              : markets.length > 30
              ? 10
              : markets.length > 10
              ? 11
              : 14
          }
          center={center}
          clickableIcons={true}>
          <MarkerClusterer>
            {clusterer =>
              markets.map((market, i) => (
                <CustomInfoWindow2
                  key={i}
                  position={{ lat: +market.latitude, lng: +market.longitude }}
                  clusterer={clusterer}
                  market={market}></CustomInfoWindow2>
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
