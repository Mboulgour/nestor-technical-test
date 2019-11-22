import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './styles/Room.scss'

const Room = props => {

  const { match } = props;
  let room_id = match.params.id;

  const [room, setRoom] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchRoom = () => {
      fetch(`https://technical-test-api.herokuapp.com/rooms/${room_id}`)
      .then(results => results.json())
      .then(data => setRoom(data))
    };

    const fetchClientData = () => {
      fetch('https://technical-test-api.herokuapp.com/clients')
      .then(result => result.json())
      .then(data => setClient(data))
    };

    fetchRoom();
    fetchClientData();

  }, [room_id]);

  return(
    <div className="room__container">
      <div className="room__header">
        <h1 className="room__name">{room.name}</h1>
        <span className="room__picture"><FontAwesomeIcon icon={faHome}/></span>
      </div>
      <div className="room__body">
        <div className="room__client_infos">
          <div className="room__client_info">
            <span>Address:</span> {room.address}
          </div>
          <div className="room__client_info">
            <span>City:</span> {room.city}
          </div>
          <div className="room__client_info">
            {client.filter(client => client.roomId === room.id).length > 0 
              ?
              client.filter(client => client.roomId === room.id).map(client => 
                <span>Currently {room.status} by <Link to={`/clients/${client.id}`}>{client.name} </Link> </span>
              )
              : 
              <span>Currently {room.status}</span>
            }
            
          </div>
        </div>
        <div className="room__photograph">
          Picture 1
        </div>
        <div className="room__photograph">
          Picture 2
        </div>
      </div>
    </div>
  )
};

export default Room;

