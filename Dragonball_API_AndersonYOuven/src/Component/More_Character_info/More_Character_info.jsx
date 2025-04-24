// SelectectInfo.jsx
import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "./More_Character_info.css";

const MoreCharacterinfo = ({ character }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "fit-content",
        minWidth: 300,
        height: "auto",
        borderRadius: 3,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        color: "#fff",
        margin: "50px",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          {character.name}
        </Typography>

        <Typography variant="subtitle1" className="select-info-yellow">
          {character.race} – {character.gender}
        </Typography>

        <Box className="select-info-yellow">
          <Typography variant="body2">
            <strong id="select-info-white">Base KI: </strong> <br />
            {character.ki}
          </Typography>

          <Typography variant="body2">
            <strong id="select-info-white">Total KI: </strong> <br />
            {character.maxKi}
          </Typography>

          <Typography variant="body2">
            <strong id="select-info-white">Affiliation: </strong> <br />
            {character.affiliation}
          </Typography>
        </Box>

        <Box className="description-box">
          <Typography variant="body2">
            <strong id="select-info-white">Descripción: </strong>
            {character.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MoreCharacterinfo;
