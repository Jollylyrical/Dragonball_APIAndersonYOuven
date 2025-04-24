import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Card_Character.css"; 

const CustomCard = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${props.character.id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        height: 90,
        borderRadius: "30px",
        backgroundImage: "url(imgbackgrourd.jpg)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        overflow: "visible", /* Para que salga del recuadro */
        cursor: "pointer"
      }}
      className="card"
      onMouseEnter={props.onSelect} 
      onMouseLeave={props.onDeselect}
      onClick={handleCardClick}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          id="card-img"
          component="img"
          image={props.character.image}
          alt={props.character.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </Box>
    </Card>
  );
};

export default CustomCard;
