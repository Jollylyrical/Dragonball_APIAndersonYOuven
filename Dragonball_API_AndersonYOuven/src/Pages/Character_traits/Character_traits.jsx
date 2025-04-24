import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectectInfo from "../../Component/SelectectInfo/SelectectInfo";
import MoreCharacterinfo from "../../Component/More_Character_info/More_Character_info";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import "./Character_traits.css";

const Character_traits = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress sx={{ color: 'white' }} />
      </Box>
    );
  }

  return (
    <Container>
      <Box className="character-container">
        <Box className="character-image-container">
          <img 
            src={character.image} 
            alt={character.name}
            className="character-image"
          />
        </Box>
        <MoreCharacterinfo character={character} />

      </Box>
    </Container>
  );
};

export default Character_traits;
