import { useParams } from "react-router-dom"
import { useGetPlanetByIdQuery } from "../../entities/planets/api/service"
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { EditPlanetForm } from "../../features/edit-planet";
import { CircularProgressLoading } from "../../shared/lib/circular-progress";
import { AppRoute } from "../../shared/const";
import { PlanetsType } from "../../entities/planets";
import { ArrowBackIcon } from "../../shared/lib/arrow-back-icon";

export function DetailsPlanetPage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading, isSuccess } = useGetPlanetByIdQuery(id);
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    if (isSuccess) {
      setLocalData(data);
    };
  }, [data, isSuccess]);

  if (error) {
    return <Alert color="error">{`Не удалось получить по id: ${id}`}. Попробуйте позже</Alert>
  };

  if (isLoading) return <CircularProgressLoading />

  const onSubmit = (value: PlanetsType) => {
    setLocalData(value),
      setIsEditing(false)
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onCancel = () => {
    setIsEditing(false)
  };

  return (
    <Container sx={{ height: "100vh", mt: 4 }}>
      <ArrowBackIcon to={AppRoute.PlanetsPage} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto" }}>
        {
          isEditing && localData ? (
            <EditPlanetForm planet={localData} onSubmit={onSubmit} onCancel={onCancel} />
          ) : (
            <>
              <Typography variant="h5">Название: {localData?.name}</Typography>
              <Typography variant="h5">Диаметр: {localData?.diameter} km</Typography>
              <Typography variant="h5">Климат: {localData?.climate}</Typography>
              <Typography variant="h5">Гравитация: {localData?.gravity}</Typography>
              <Typography variant="h5">Население: {localData?.population}</Typography>
              <Typography variant="h5">Местность: {localData?.terrain}</Typography>
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

