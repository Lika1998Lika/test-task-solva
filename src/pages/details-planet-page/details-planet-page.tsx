import { useParams } from "react-router-dom"
import { useGetPlanetByIdQuery } from "../../entities/planets/api/service"
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export function DetailsPlanetPage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading } = useGetPlanetByIdQuery(id);

  if (error) {
    return <Alert>Сетевая ошибка</Alert>
  };

  if (!data || isLoading) {
    return <Typography>Загрузка...</Typography>
  };


  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container sx={{ height: "100vh", mt: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        {data.name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto" }}>
        {
          isEditing ? (
            <h1>hghhg</h1>
          ) : (
            <>
              <Typography variant="h5">Diameter: {data.diameter} km</Typography>
              <Typography variant="h5">Climate: {data.climate}</Typography>
              <Typography variant="h5">Gravity: {data.gravity}</Typography>
              <Typography variant="h5">Population: {data.population}</Typography>
              <Typography variant="h5">Terrain: {data.terrain}</Typography>
            </>
          )
        }
        <Button
          variant="contained"
          onClick={handleEditToggle}
        >
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </Button>
      </Box>
    </Container>
  )
}

