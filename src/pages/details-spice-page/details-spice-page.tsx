import { useParams } from "react-router-dom"
import { useGetSpiceByIdQuery } from "../../entities/species/api/service";
import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SpeciesType } from "../../entities/species";
import { EditSpiceForm } from "../../features/edit-spice";
import { AppRoute } from "../../shared/const";
import { ArrowBackIcon } from "../../shared/lib/arrow-back-icon";
import { CircularProgressLoading } from "../../shared/lib/circular-progress";

export function DetailsSpicePage() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();

  if (!id) {
    throw new Error('Planet id is undefind')
  };

  const { data, error, isLoading, isSuccess } = useGetSpiceByIdQuery(id);

  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    if (isSuccess) {
      setLocalData(data);
    };
  }, [data, isSuccess]);

  if (isLoading) return <CircularProgressLoading />

  if (error) {
    return <Alert color="error">{`Не удалось получить по id: ${id}`}. Попробуйте позже</Alert>
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = (value: SpeciesType) => {
    setLocalData(value),
      setIsEditing(false)
  }

  const onCancel = () => {
    setIsEditing(false)
  };

  return (
    <Container sx={{ height: "100vh", mt: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 600, margin: "auto" }}>
        <Box>{ArrowBackIcon(AppRoute.SpeciesPage)}</Box>
        {
          isEditing && localData ? (
            <EditSpiceForm spice={localData} onSubmit={onSubmit} onCancel={onCancel} />
          ) : (
            <>
              <Typography variant="h5">Название: {localData?.name}</Typography>
              <Typography variant="h5">Язык: {localData?.language} km</Typography>
              <Typography variant="h5">Классификация: {localData?.classification}</Typography>
              <Typography variant="h5">Обозначение: {localData?.designation}</Typography>
              <Typography variant="h5">Средняя продолжительность жизни: {localData?.average_lifespan}</Typography>
              <Typography variant="h5">Средний рост: {localData?.average_height}</Typography>
              <Button variant="contained" onClick={handleEditToggle}> Редактировать</Button>
            </>
          )
        }
      </Box>
    </Container>
  )
}