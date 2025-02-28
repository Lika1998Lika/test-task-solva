import { useParams } from "react-router-dom"
import { useGetSpiceByIdQuery } from "../../entities/species/api/service";
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export function DetailsSpicePage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading } = useGetSpiceByIdQuery(id);

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
              <Typography variant="h5">Language: {data.language} km</Typography>
              <Typography variant="h5">Classification: {data.classification}</Typography>
              <Typography variant="h5">Designation: {data.designation}</Typography>
              <Typography variant="h5">Average lifespan: {data.average_lifespan}</Typography>
              <Typography variant="h5">Average height: {data.average_height}</Typography>
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