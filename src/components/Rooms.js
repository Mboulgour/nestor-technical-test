import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './styles/Rooms.scss';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchRoomsData = () => {
      fetch('https://technical-test-api.herokuapp.com/rooms')
      .then(result => result.json())
      .then(data => setRooms(data))
    };
    const fetchClientsData = () => {
      fetch('https://technical-test-api.herokuapp.com/clients')
      .then(result => result.json())
      .then(data => setClients(data))
    };
    fetchRoomsData();
    fetchClientsData();
  }, []);

  const distinctCities = [...new Set(rooms.map(room => room.city))];

  return(
    <div className="room__container">
      {distinctCities.map(city => (
        <div className="room__city_container">
          <h1 className="room__city__name">{city}</h1>
          <div className="room__cards">
            {rooms.filter(r => city === r.city).map(room =>(
              <div className="room__card" key={room.id}>
                <div className="room__card_header">
                  <FontAwesomeIcon icon={faHome} />
                  <div className="room__card_props">
                    <span className="room__card_props--address"><Link to ={`rooms/${room.id}`}>{room.address}, {room.zip}</Link></span>
                    <span className="room__card_props--name">{room.name}</span>
                  </div>
                </div>
                <div className="room__card_body">
                  <p className="room__card_status">
                    <span className= {room.status === 'occupied' ? "room__status_badge room__status--occupied" : "room__status_badge room__status--available"}></span>
                    {room.status}
                  </p>
                  {clients.filter(client => client.roomId === room.id).length > 0 
                    ?
                    clients.filter(client => client.roomId === room.id).map(client => 
                      <Link to={`/clients/${client.id}`} className="room__card_user">
                        {client.name}
                      </Link> 
                      )
                    : 
                    null
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Rooms