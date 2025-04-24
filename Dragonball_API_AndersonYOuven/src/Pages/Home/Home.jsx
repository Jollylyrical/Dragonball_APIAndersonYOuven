import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Header from "../../Component/Header/Header";
import CardCharacter from "../../Component/Card_Character/Card_Character";
import CharSelect from "../../Component/CharSelect/CharSelect";
import SelectectInfo from "../../Component/SelectectInfo/SelectectInfo";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />

      {selectedCharacter && (
        <>
          <div className={`char-select ${selectedCharacter ? "selected" : ""}`}>
            <CharSelect character={selectedCharacter} />
          </div>
          <div className={`selected-info ${selectedCharacter ? "selected" : ""}`}>
            <SelectectInfo character={selectedCharacter} />
          </div>
        </>
      )}

      <div className="cards-container" ref={containerRef}>
        {characters.map((character) => (
          <CardCharacter
            key={character.id}
            character={character}
            onSelect={() => setSelectedCharacter(character)}
            onDeselect={() => setSelectedCharacter(null)}
            className="card-item" 
          />
        ))}
      </div>
    </>
  );
};

export default Home;