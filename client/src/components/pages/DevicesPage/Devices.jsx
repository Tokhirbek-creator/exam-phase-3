import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { THUNK_GET_DEVICES_FROM_DB } from '../../../redux/thunk/rooms';
import DeviceCard from './DeviceCard';

function Devices() {
  const { id } = useParams();
  const { devices } = useSelector((state) => state);
  console.log(devices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(THUNK_GET_DEVICES_FROM_DB(id));
  }, [id]);

  return (
    <div>
      {devices && devices.map((el) => (
        <DeviceCard
          key={el.id}
          device={el.device}
          status={el.status}
          offPicture={el.offPicture}
          onPicture={el.onPicture}
          id={el.id}
        />
      ))}

    </div>
  );
}

export default Devices;
