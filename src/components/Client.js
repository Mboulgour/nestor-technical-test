import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import './styles/Client.scss';

const Client = props =>{
  const [client, setClient] = useState([]);
  const [room, setRoom] = useState([]);
  const { match } = props;
  let params_id = match.params.id;

  useEffect(() => {
    const fetchClient = () => {
      fetch(`https://technical-test-api.herokuapp.com/clients/${params_id}`)
      .then(results => results.json())
      .then(data => setClient(data))
    };

    const fetchRoom = () => {
      let roomId = client.roomId // Taking room id from previous fetch
      fetch(`https://technical-test-api.herokuapp.com/rooms/${roomId}`)
      .then(results => results.json())
      .then(data => setRoom(data))
    };

    fetchClient();
    fetchRoom();
  }, [params_id, client.roomId]);

  return(
    <div className="client__container">
      <div className="client__header">
        <h1 className="client__name">{client.name}</h1>
        <span className="client__picture"><FontAwesomeIcon icon={faUser}/></span>
      </div>
      <div className="client__body">
        <div className="client__infos">
          <div className="client__info">
            <span>Email:</span> {client.email}
          </div>
          <div className="client__info">
            <span>Phone:</span> {client.phone}
          </div>
          <div className="client__info">
            <span>Birthdate:</span> {client.birthDate}
          </div>
          <div className="client__info">
            <span>Nationality:</span> {client.nationality}
          </div>
        </div>
        <div className="client__room_infos">
          <div className="client__room_info--title">
            ROOM 
            <Link to={`/rooms/${room.id}`}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Link>
          </div>
          <div className="client__room_info">
            <span>Name:</span> {room.name}
          </div>
          <div className="client__room_info">
            <span>Address:</span> {room.address}
          </div>
          <div className="client__room_info">
            <span>City:</span> {room.city}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client
