import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MarketItem = ({ market, index, zip }) => {
  // const zip = market.zip;

  return (
    <div>
      <div className='card mb-2'>
        <div className='card-body'>
          <h4 className='font-weight-bold mb-4'>
            <Link
              to={`/market/${market.market_name}`}
              className='{index + 1}. {market.market_name}'>
              {index + 1}. {market.market_name}
            </Link>
          </h4>
          {/* <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6> */}
          <div className='row'>
            <div className='col-xl-9'>
              <p className='card-text h5 mb-5'>
                {market.address_line_1} {market.city}, {market.state}{' '}
                {market.zip}
              </p>

              <p className='h5 card-link  align-text-bottom  mb-0 d-inline-block'>
                {market.distance} miles away
              </p>
            </div>

            <div className='col-xl-3'>
              <div className='card-text h5 mb-0 mt-4 text-left pl-4'>
                {market.snap_status === 'Y' ? (
                  <div className='mb-2'>
                    <i className='fas fa-check-circle'></i> SNAP
                  </div>
                ) : (
                  <span></span>
                )}
                {market.fmnp === 'Y' ? (
                  <div className='mb-2'>
                    <i className='fas fa-check-circle'></i> FMNP
                  </div>
                ) : (
                  <span></span>
                )}
                {market.fca === 'Y' || market.fc === 'Y' ? (
                  <div className=''>
                    <i className='fas fa-check-circle'></i> FCC
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MarketItem.propTypes = {
  market: PropTypes.object.isRequired
};

export default MarketItem;
