import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and oceania between the Indian and Pacific Oceans.
          It consists of 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Jakarta is the largest city in Indonesia."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysian Borneo, comprising the states of Sabah and Sarawak, is home to some of the oldest rainforests in the world.
          Malaysia is dotted with stunning islands, including Perhentian Islands, Tioman Island, and Redang Island, offering pristine beaches, crystal-clear waters."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Explore iconic landmarks like the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral (or its restoration site), and Montmartre.
          Visit the magnificent châteaux of the Loire Valley, such as Château de Chambord, and Château de Villandry."
        />
      </div>
    </div>
  );
}

export default Trip;
