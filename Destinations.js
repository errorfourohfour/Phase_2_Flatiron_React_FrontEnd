import {useState, useEffect}  from 'react';
import List from './List';
import Form from './Form';

export default function Destinations() {
  const [DestinationListItems, setDestinationListItems] = useState([]);
  const handleDestinationSubmit = (passText) => {
    fetch("http://localhost:3000/destinations",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: passText})
    })
    .then(response => response.json())
  .then(data => setDestinationListItems([...DestinationListItems, data]));
  };
useEffect(()=>{
    fetch('http://localhost:3000/destinations')
  .then(response => response.json())
  .then(data => setDestinationListItems(data));
},[])

    return (
        <div>
            <h1>Destination Bucket List</h1>
            <Form handleSubmit={handleDestinationSubmit} />
            <List listItems={DestinationListItems} />
        </div>
    )
}
