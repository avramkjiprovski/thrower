import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

// MATERIAL UI
import { Button } from '@material-ui/core';

// https://thecatapi.com/api/images/get?format=src&type=gif



function App() {
  let [photo, setPhoto] = useState("");

  useEffect(() => {
    handleButtonClick();
  }, []);

  const handleButtonClick = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
      setPhoto(data[0].url);
      console.log(data);
    })
  }


  return (
    <div className="App">
      <h1>Cat API</h1>
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleButtonClick()
          }}
        >Funny</Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleButtonClick()
          }}
        >Not Funny</Button>
      </div>
      <img src={photo} alt="cat" />
    </div>
  );
}

export default App;
