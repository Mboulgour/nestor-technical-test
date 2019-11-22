import React, { useState, useEffect } from 'react';

import './styles/Rooms.scss';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://technical-test-api.herokuapp.com/rooms')
      .then(result => result.json())
      .then(data => setRooms(data))
    };
    fetchData();
  }, []);

  const distinctCities = [...new Set(rooms.map(room => room.city))];

  return(
    <div className="room__container">
      {distinctCities.map(city => (
        <div classname='room__city_container'>
          <h1 className="room__city__name">{city}</h1>
          {rooms.filter(r => city === r.city).map(room =>(
            <div className="room__card" key={room.id}>
              <div>{room.name}</div>
              <div>{room.address}</div>
              <div>{room.zip}</div>
              <div>{room.status}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Rooms