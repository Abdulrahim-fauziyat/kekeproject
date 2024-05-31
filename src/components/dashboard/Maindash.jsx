import React from 'react';
import car from '../../assets/jam_car.png';
import green from '../../assets/twogreen.png';

const Maindash = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-4">
        <div className="text-container">
          <p className="fw-bold fs-3">Overview</p>
          <p className="fw-light fs-5">These are the summary of the Registered keke and Tickets</p>
        </div>
        <div className="button-container d-flex align-items-center">
          <button className="btn btn-light fw-light register rounded-pill shadow-sm me-3">Register a new driver</button>
          <button className="btn btn-dark fw-bold border-0 text-white tickets shadow-sm rounded-pill">Generate Tickets</button>
        </div>
      </div>

      <div className="row deck mt-4 justify-center align-items-center">
      
          <div className="card border-0 m-3 mx-md-2" style={{ maxWidth: '20%' }}>
            <div className="bg-light p-3">
              <img
                src={car}
                alt="Car Icon"
                className="img-thumbnail pic border-0 mb-2"
                height={30}
                width={30}
              />
              <p>Number of Drivers Registered</p>
              <p className="fw-bold fs-1">200,890</p>
              <div className="d-flex align-items-center">
                <img
                  src={green}
                  alt="Green Arrow"
                  className="img-thumbnail pic border-0 me-2"
                  height={40}
                  width={70}
                />
                <p className="fw-light mb-0">Since last month</p>
              </div>
            </div>
          </div>
          <div className="card border-0 m-3 mx-md-2" style={{ maxWidth: '20%' }}>
            <div className="bg-light p-3">
              <img
                src={car}
                alt="Car Icon"
                className="img-thumbnail pic border-0 mb-2"
                height={30}
                width={30}
              />
              <p>Number of Drivers Registered</p>
              <p className="fw-bold fs-1">200,890</p>
              <div className="d-flex align-items-center">
                <img
                  src={green}
                  alt="Green Arrow"
                  className="img-thumbnail pic border-0 me-2"
                  height={40}
                  width={70}
                />
                <p className="fw-light mb-0">Since last month</p>
              </div>
            </div>
          </div>
          <div className="card border-0 m-3 mx-md-2" style={{ maxWidth: '20%' }}>
            <div className="bg-light p-3">
              <img
                src={car}
                alt="Car Icon"
                className="img-thumbnail pic border-0 mb-2"
                height={30}
                width={30}
              />
              <p>Number of Drivers Registered</p>
              <p className="fw-bold fs-1">200,890</p>
              <div className="d-flex align-items-center">
                <img
                  src={green}
                  alt="Green Arrow"
                  className="img-thumbnail pic border-0 me-2"
                  height={40}
                  width={70}
                />
                <p className="fw-light mb-0">Since last month</p>
              </div>
            </div>
          </div>
      
      </div>
    </>
  );
}

export default Maindash;
