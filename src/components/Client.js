import React, { useState, useEffect } from 'react';


const Client = props =>{
  const [client, setClient] = useState([])
  const { match } = props;
  let params_id = match.params;

  useEffect(() => {
    const fetchClient = () => {
      fetch(`https://technical-test-api.herokuapp.com/clients`)
      .then(result => result.json())
      .then(data => setClient(data[0]))
    };

    fetchClient();

  }, [params_id]);

  return(
    <>
      <h1>{client.name}</h1>
    </>
  )
}

export default Client
