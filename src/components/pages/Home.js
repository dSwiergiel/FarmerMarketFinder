import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [info, setInfo] = useState({ zip: 12210, radius: 10 });

  // const zip = useRef('');
  // const radius = useRef(15);

  const onInputChange = (e) => {
    setInfo({ ...info, zip: e.currentTarget.value });
  };

  const onSelectChange = (e) => {
    setInfo({ ...info, radius: e.currentTarget.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <form onSubmit={onSubmit} className='form mt-3 mx-auto'>
        <h1 className='text-center '>
          Find Farmers' Markets in New York State
        </h1>
        <h4 className='mt-4'>
          In the past decade, the number of farmers' markets in New York State
          has grown at a rapid rate. Find information on farmers' markets near
          by, their hours of operation, and what programs are accepted at these
          locations.
        </h4>

        <div className='jumbotron mt-4'>
          <div className='row '>
            <h2 className='col-md-6 mt-3 text-center'>
              Find Farmers' Markets near{' '}
            </h2>
            <div className='col-md-4 mt-3'>
              <input
                type='number'
                className='form-control '
                required
                placeholder='12210'
                max='99999'
                onChange={onInputChange}
                // ref={zip}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid lightgray',
                }}
              />
            </div>
            <div className='col-md-2 mt-3'>
              <select
                className='form-control'
                id='exampleSelect1'
                // ref={radius}
                onChange={onSelectChange}
                value={info.radius}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid lightgray',
                }}
              >
                <option value='0'>0 miles</option>
                <option value='5'>5 miles</option>
                <option value='10'>10 miles</option>
                <option value='15'>15 miles</option>
                <option value='20'>20 miles</option>
              </select>
            </div>
          </div>
          <div className='row mt-4'>
            {/* <button className='btn btn-primary  mx-auto mt-5 h2'>
            FIND FARMERS' MARKETS
          </button> */}
            <Link
              className='btn btn-primary mx-auto h2'
              to={`/markets/${info.zip}/${info.radius}`}
              onKeyPress={() => {
                console.log('enter');
              }}
            >
              FIND FARMERS' MARKETS
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
