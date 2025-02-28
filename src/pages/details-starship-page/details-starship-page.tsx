import { useParams } from "react-router-dom"
import { useGetStarshipByIdQuery } from "../../entities/starships/api/service";
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { EditStarshipForm } from "../../features/edit-starship";
import { StarshipType } from "../../entities/starships";

export function DetailsStarshipPage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading } = useGetStarshipByIdQuery(id);

  const [localData, setLocalData] = useState(data);

  if (error) {
    return <Alert>Сетевая ошибка</Alert>
  };

  if (!data || isLoading || !localData) {
    return <Typography>Загрузка...</Typography>
  };


  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = (value: StarshipType) => {
    setLocalData(value),
      setIsEditing(false)
  }
  return (
    <Container sx={{ height: "100vh", mt: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto" }}>
        {
          isEditing ? (
            <EditStarshipForm starship={localData} onSubmit={onSubmit} />
          ) : (
            <>
              <Typography variant="h5">Name: {localData.name}</Typography>
              <Typography variant="h5">Model: {localData.model} km</Typography>
              <Typography variant="h5">Passengers: {localData.passengers}</Typography>
              <Typography variant="h5">Manufacturer: {localData.manufacturer}</Typography>
              <Typography variant="h5">length: {localData.length}</Typography>
              <Typography variant="h5">Consumables: {localData.consumables}</Typography>
              <Button variant="contained" onClick={handleEditToggle}>
                Редактировать
              </Button>
            </>
          )
        }
      </Box>
    </Container>
  )
}