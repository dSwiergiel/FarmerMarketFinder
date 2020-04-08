import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkets, filterMarkets } from '../../actions/marketActions';
import MarketItem from './MarketItem';
import Spinner from '../layout/Spinner';
import Map from '../maps/Map';
import { useParams } from 'react-router-dom';

const Markets = ({
  market: { markets, loading },
  filtered,
  getMarkets,
  match,
  filterMarkets,
}) => {
  let { zip, radius } = useParams();
  // const zip = match.params.zip;
  // const radius = match.params.radius;
  useEffect(() => {
    getMarkets(zip, radius);

    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    const checkedBoxes = document.querySelectorAll(
      'input[type=checkbox]:checked'
    );

    filterMarkets(
      markets,
      Array.from(checkedBoxes, (x) => x.name)
    );
  };

  return (
    <div>
      <div>
        <h2 className='mt-5 mb-4'>Farmers' Markets nearby </h2>
        <h4 className='mb-4'>
          <i className='fas fa-sliders-h mr-2'></i>Refine your search
        </h4>
        <div className='row mb-5'>
          <div className='col-md-3'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                name='snap_status'
                onChange={onChange}
                className='custom-control-input'
                id='checkbox_SNAP'
              ></input>
              <label
                className='custom-control-label h4'
                htmlFor='checkbox_SNAP'
              >
                Accepts SNAP
              </label>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                name='fmnp'
                onChange={onChange}
                className='custom-control-input'
                id='checkbox_FMNP'
              ></input>
              <label
                className='custom-control-label h4'
                htmlFor='checkbox_FMNP'
              >
                Accepts FMNP
              </label>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                name='fca'
                onChange={onChange}
                className='custom-control-input'
                id='checkbox_AcceptsFCC'
              ></input>
              <label
                className='custom-control-label h4'
                htmlFor='checkbox_AcceptsFCC'
              >
                Accepts FCC
              </label>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                name='fc'
                onChange={onChange}
                className='custom-control-input'
                id='checkbox_IssuesFCC'
              ></input>
              <label
                className='custom-control-label h4'
                htmlFor='checkbox_IssuesFCC'
              >
                Issues FCC
              </label>
            </div>
          </div>
        </div>
        <h3 className='pull-right'>
          <i className='fas fa-map-marker-alt mr-2'></i>Current Location:{' '}
          {match.params.zip}
        </h3>
        <div className='clearfix'></div>
      </div>
      {loading || markets === null ? (
        <Spinner></Spinner>
      ) : (
        <div className='row '>
          <div className='col-md-6 order-md-1 order-lg-1 order-xl-1  mt-3 mb-3'>
            {filtered !== undefined && filtered !== null ? (
              <Map markets={filtered} height={`500px`} width={`100%`}></Map>
            ) : (
              <Map markets={markets} height={`500px`} width={`100%`}></Map>
            )}
          </div>
          <div
            className='col-md-6 order-md-0 order-lg-0 order-xl-0 mt-3'
            style={{ height: '65vh', overflowY: 'auto' }}
          >
            {(!loading && markets.length === 0) ||
            (filtered !== null && filtered.length === 0) ? (
              <h4 className='text-center'>No markets to show...</h4>
            ) : filtered !== undefined && filtered !== null ? (
              filtered.map((market, index) => (
                <MarketItem
                  key={index}
                  market={market}
                  zip={zip}
                  index={index}
                ></MarketItem>
              ))
            ) : (
              markets.map((market, index) => (
                <MarketItem
                  key={index}
                  market={market}
                  zip={zip}
                  index={index}
                ></MarketItem>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Markets.propTypes = {
  market: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  market: state.market,
  filtered: state.market.filtered,
});

export default connect(mapStateToProps, { getMarkets, filterMarkets })(Markets);
