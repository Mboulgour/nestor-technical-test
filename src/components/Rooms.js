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
    <>
      {distinctCities.map(city => (
        <div>
          <h1>{city}</h1>
          {rooms.filter(r => city === r.city).map(room =>(
            <div>
              <h2>{room.name}</h2>
              <p>{room.address}</p>
              <p>{room.address}</p>
              <p>{room.zip}</p>
              <p>{room.status}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default Rooms