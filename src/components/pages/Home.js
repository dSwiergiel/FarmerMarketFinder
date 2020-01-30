import React, { useRef } from 'react';

const Home = () => {
  const zip = useRef('');
  const radius = useRef(15);

  const onSubmit = e => {
    e.preventDefault();

    console.log(radius.current.value);
    if (zip === '') {
      //   setAlert('Please enter something', 'warning');
    } else {
      console.log(zip.current.value);
      window.location.href = `/markets/${
        +radius.current.value === 0
          ? zip.current.value
          : zip.current.value + '/' + radius.current.value
      }`;
      // search
      //   githubContext.searchUsers(text);
    }
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
            ref={zip}
            style={{
              backgroundColor: 'white',
              border: '1px solid lightgray'
            }}
          />

          <div className='col-md-2'>
            <select
              className='form-control'
              id='exampleSelect1'
              ref={radius}
              style={{
                backgroundColor: 'white',
                border: '1px solid lightgray'
              }}>
              <option>15</option>
              <option>0</option>
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <button className='btn btn-primary  mx-auto mt-5 h2'>
            FIND FARMERS' MARKETS
          </button>
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
