import React, { useState } from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';

const CustomInfoWindow = ({ market, clusterer, i, position }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  const handleToggleClose = () => {
    setIsOpen(false);
  };
  return (
    <Marker
      key={i}
      position={position}
      clusterer={clusterer}
      onClick={handleToggleOpen}>
      {isOpen && (
        <InfoWindow
          key={i}
          position={position}
          onCloseClick={handleToggleClose}
          clusterer={clusterer}>
          <div className=''>
            <h6 className='card-title'>{market.market_name}</h6>
            <p className='card-subtitle mb-2 text-muted'>
              {market.market_link !== undefined && (
                <a
                  href={market.market_link.url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {market.market_link.url}
                </a>
              )}
            </p>
            <p className='card-text'>
              {market.address_line_1} {market.county}, {market.state}{' '}
              {market.zip}
            </p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default CustomInfoWindow;
