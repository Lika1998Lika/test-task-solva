import { useGetPlanetByIdQuery } from "../../entities/planets/api/service"
import { Alert, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { EditPlanetForm } from "../../features/edit-planet";
import { CircularProgressLoading } from "../../shared/lib/circular-progress";
import { AppRoute } from "../../shared/const";
import { PlanetsType } from "../../entities/planets";
import { DetailsPageLayout } from "../../shared/layout/details-page-layout";
import { useExtractIdFromParams } from "../../shared/lib/use-extractId-from-params";

export function DetailsPlanetPage() {
  const [isEditing, setIsEditing] = useState(false);

  const id = useExtractIdFromParams();

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
    setLocalData(value)
    setIsEditing(false)
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onCancel = () => {
    setIsEditing(false)
  };

  return (
    <DetailsPageLayout
      backPath={AppRoute.PlanetsPage}
    >
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
    </DetailsPageLayout>
  )
}

