import React from "react";
import { Card, CardMedia, Box } from "@mui/material";
import "./CharSelect.css"; 

const CharSelect = (props) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: 500,
        height: 400,
        borderRadius: "30px",
        borderColor: "transparent",
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "relative", 
      }}
      className="card-select"
    >
      <Box
        sx={{
          flex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "transparent",
          overflow: "hidden", 
        }}
      >
        <CardMedia
          id="card-img"
          component="img"
          image={props.character.image}
          alt={props.character.name}
          sx={{
            width: "65%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "top",
            position: "relative", 
            zIndex: 9999, 
          }}
        />
      </Box>
    </Card>
  );
};

export default CharSelect;
