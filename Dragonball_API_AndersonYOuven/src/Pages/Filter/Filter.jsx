import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Filter.css";
import Header from "../../Component/Header/Header";
import CardCharacter from "../../Component/Card_Character/Card_Character";
import CharSelect from "../../Component/CharSelect/CharSelect";
import SelectectInfo from "../../Component/SelectectInfo/SelectectInfo";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Filter = () => {
  const { filterType, filterValue } = useParams();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 10; 

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const apiUrl = `https://dragonball-api.com/api/characters?${filterType}=${filterValue}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data);
        setCurrentPage(0); 
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    if (filterType && filterValue) {
      fetchCharacters();
    }
  }, [filterType, filterValue]);

  const totalPages = Math.ceil(characters.length / charactersPerPage);
  const startIndex = currentPage * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentCharacters = characters.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <>
      <Header />
      {selectedCharacter && (
        <div className="char-container">
          <div className="char-select">
            <CharSelect character={selectedCharacter} />
          </div>
          <div className="selected-info">
            <SelectectInfo character={selectedCharacter} />
          </div>
        </div>
      )}

      <div className="pagination-container">
        <IconButton 
          className="pagination-arrow left-arrow"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          sx={{
            color: 'white',
            '&.Mui-disabled': {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        
        <div className="cards-container">
          {currentCharacters.map((character) => (
            <CardCharacter
              key={character.id}
              character={character}
              onSelect={() => setSelectedCharacter(character)}
              onDeselect={() => setSelectedCharacter(null)}
            />
          ))}
        </div>

        <IconButton 
          className="pagination-arrow right-arrow"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          sx={{
            color: 'white',
            '&.Mui-disabled': {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Filter;
