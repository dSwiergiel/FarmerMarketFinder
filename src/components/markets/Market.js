import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarket } from '../../actions/marketActions';
import { useHistory } from 'react-router-dom';
import Map from '../maps/Map';

import Spinner from '../layout/Spinner';

const Market = ({ market: { market, loading }, match, getMarket }) => {
  const marketName = match.params.marketName;
  useEffect(() => {
    getMarket(marketName);
    //eslint-disable-next-line
  }, []);
  let history = useHistory();

  if (loading || market === null) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className='row'>
        <button className='btn btn-right' onClick={() => history.goBack()}>
          <h5>
            <i className='fas fa-reply mr-2 mt-3'></i>Return to Results
          </h5>
        </button>
      </div>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <h1 className='mb-5'>{market.market_name}</h1>
          <h3>
            {market.address_line_1} <br></br>
            {market.city}, {market.state} {market.zip}
          </h3>
        </div>
        <div className='col-md-6'>
          <Map markets={[market]} height={`300px`} width={`100%`}></Map>
          <a
            className=' mt-3 pull-right'
            href={`https://www.google.com/maps/search/?api=1&query=${market.market_name
              .split(' ')
              .join('+')}`}
            target='_blank'
            rel='noopener noreferrer'>
            <h4>
              {' '}
              <i className='fas fa-map-marked-alt mr-2'></i> Get Directions
            </h4>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-12 mt-4'>
          <h3>
            Season:{' '}
            <span className='text-muted'>{market.operation_season}</span>
          </h3>
        </div>
        <div className='col-md-12 mt-4 mb-4'>
          <h3>
            Hours of Operation:{' '}
            <span className='text-muted'>{market.operation_hours}</span>
          </h3>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-12'>
          <h3>Amenities</h3>
          <div className='card-text h3 mb-0 mt-4 text-left pl-4'>
            <div className='d-inline-block mr-5'>
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
            </div>
            <div className='d-inline-block'>
              {market.fca === 'Y' ? (
                <div className='mb-2'>
                  <i className='fas fa-check-circle'></i> Accepts FCC
                </div>
              ) : (
                <span></span>
              )}
              {market.fc === 'Y' ? (
                <div className='mb-2'>
                  <i className='fas fa-check-circle'></i> Issues FCC
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-12 mt-4'>
          <h3>
            Contact: <span className='text-muted'>{market.contact}</span>
          </h3>
        </div>
        <div className='col-md-12 mt-4 '>
          <h3>
            Phone: <span className='text-muted'>{market.phone}</span>
          </h3>
        </div>
        <div className='col-md-12 mt-4 mb-4'>
          <h3>
            Website:{' '}
            <span className='text-muted'>
              {' '}
              {market.market_link !== undefined && (
                <a
                  href={market.market_link.url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {market.market_link.url}
                </a>
              )}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};
// Market.propTypes = {
//   market: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  market: state.market
});

export default connect(mapStateToProps, { getMarket })(Market);
