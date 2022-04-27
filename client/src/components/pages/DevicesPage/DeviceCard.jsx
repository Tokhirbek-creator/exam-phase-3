import React from 'react';
import './DeviceCard.css';

function DeviceCard({
  device, status, offPicture, onPicture,
}) {
  return (
    <div className="container">
      <div className="border m-2 p-2">
        <h5>
          {' '}
          {device}
          {' '}
        </h5>
        {' '}
        <br />

        <button
          type="button"
        >

          {status
            ? (
              <>
                <span>
                  {' '}
                  TURN OFF
                </span>
                <div>
                  <img src={`http://localhost:3001${onPicture}`} alt="" />
                </div>
              </>
            )
            : (
              <>
                <span>
                  {' '}
                  TURN ON
                </span>
                <div id="device">
                  <img src={`http://localhost:3001${offPicture}`} alt="" id="card" />
                </div>
              </>
            )}

        </button>
      </div>
    </div>
  );
}

export default DeviceCard;
