import React, { useState } from "react";
import "./styles.css";

const travelDb = {
  historical: [
    { name: "Raigad Fort", rating: "4/5" },
    { name: "Ajanta Caves", rating: "4.5/5" },
    { name: "Shaniwar Wada", rating: "3/5" }
  ],

  "hill station": [
    { name: "Lonavala", rating: "5/5" },
    { name: "Mahabaleshwar", rating: "3.5/5" },
    { name: "Amba Ghat", rating: "4/5" }
  ],

  religious: [
    { name: "Shirdi", rating: "4.5/5" },
    { name: "Bhimashankar", rating: "4/5" },
    { name: "Pandharpur", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedType, setType] = useState("historical");

  function genreClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1>Travel Hint</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite travel places. Select a type to get started
      </p>
      <div>
        {Object.keys(travelDb).map((type) => (
          <button onClick={() => genreClickHandler(type)}>{type}</button>
        ))}
      </div>

      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDb[selectedType].map((place) => (
            <li key={place.name}>
              <div> {place.name} </div>
              <div> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
