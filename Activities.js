import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';

export default function Activities() {
    const [ActivityListItems, setActivityListItems] = useState([]);
  const handleActivitySubmit = (passText) => {
    fetch("http://localhost:3000/activities",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: passText})
    })
    .then(response => response.json())
    .then(data => setActivityListItems([...ActivityListItems, data]));
  };
  
  useEffect(()=>{
    fetch('http://localhost:3000/activities')
  .then(response => response.json())
  .then(data => setActivityListItems(data));
},[])
    return (
        <div>
            <h1> Activities Bucket List</h1>
            <Form handleSubmit={handleActivitySubmit} />
            <List listItems={ActivityListItems} />
        </div>
    )
}
