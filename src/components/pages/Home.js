import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [info, setInfo] = useState({ zip: 12210, radius: 10 });

  // const zip = useRef('');
  // const radius = useRef(15);

  const onInputChange = e => {
    setInfo({ ...info, zip: e.currentTarget.value });
  };

  const onSelectChange = e => {
    setInfo({ ...info, radius: e.currentTarget.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    // setInfo({zip: e.})
    // console.log(radius.current.value);
    // if (zip === '') {
    //   setAlert('Please enter something', 'warning');
    // } else {
    // console.log(zip.current.value);
    // window.location.href = `/markets/${zip.current.value +
    //   '/' +
    //   radius.current.value}`;
    // search
    //   githubContext.searchUsers(text);
    // }
  };

  return (
    <form onSubmit={onSubmit} className='form mx-auto'>
      <h1 className='mt-5 text-center '>
        Find Farmers' Markets in New York State
      </h1>
      <h4 className='mt-5'>
        In the past decade, the number of farmers' markets in New York State has
        grown at a rapid rate. Find information on farmers' markets near by,
        their hours of operation, and what programs are accepted at these
        locations.
      </h4>

      <div className='jumbotron ' style={jumbotron}>
        <div className='row '>
          <h2 className='col-md-6'>Find Farmers' Markets near </h2>
          <input
            type='number'
            className='form-control col-md-4'
            required
            placeholder='12210'
            max='99999'
            onChange={onInputChange}
            // ref={zip}
            style={{
              backgroundColor: 'white',
              border: '1px solid lightgray'
            }}
          />

          <div className='col-md-2'>
            <select
              className='form-control'
              id='exampleSelect1'
              // ref={radius}
              onChange={onSelectChange}
              value={info.radius}
              style={{
                backgroundColor: 'white',
                border: '1px solid lightgray'
              }}>
              <option value='0'>0 miles</option>
              <option value='5'>5 miles</option>
              <option value='10'>10 miles</option>
              <option value='15'>15 miles</option>
              <option value='20'>20 miles</option>
            </select>
          </div>
        </div>
        <div className='row'>
          {/* <button className='btn btn-primary  mx-auto mt-5 h2'>
            FIND FARMERS' MARKETS
          </button> */}
          <Link
            className='btn btn-primary  mx-auto mt-5 h2'
            to={`/markets/${info.zip}/${info.radius}`}>
            FIND FARMERS' MARKETS
          </Link>
        </div>
      </div>
    </form>
  );
};

const jumbotron = {
  marginTop: '10vh',
  minHeight: '60vh',
  padding: '20vh 10vh'
};

export default Home;
