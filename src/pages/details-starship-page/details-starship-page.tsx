import { useParams } from "react-router-dom"
import { useGetStarshipByIdQuery } from "../../entities/starships/api/service";
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export function DetailsStarshipPage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading } = useGetStarshipByIdQuery(id);

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
              <Typography variant="h5">Model: {data.model} km</Typography>
              <Typography variant="h5">Passengers: {data.passengers}</Typography>
              <Typography variant="h5">Manufacturer: {data.manufacturer}</Typography>
              <Typography variant="h5">length: {data.length}</Typography>
              <Typography variant="h5">Consumables: {data.consumables}</Typography>
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