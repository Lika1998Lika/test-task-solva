import { useGetStarshipByIdQuery } from "../../entities/starships/api/service";
import { Alert, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { EditStarshipForm } from "../../features/edit-starship";
import { StarshipType } from "../../entities/starships";
import { CircularProgressLoading } from "../../shared/lib/circular-progress";
import { AppRoute } from "../../shared/const";
import { DetailsPageLayout } from "../../shared/layout/details-page-layout";
import { useExtractIdFromParams } from "../../shared/lib/use-extractId-from-params";

export function DetailsStarshipPage() {
  const [isEditing, setIsEditing] = useState(false);

  const id = useExtractIdFromParams();

  const { data, error, isLoading, isSuccess } = useGetStarshipByIdQuery(id);

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

  const onSubmit = (value: StarshipType) => {
    setLocalData(value)
    setIsEditing(false)
  }

  const onCancel = () => {
    setIsEditing(false)
  };

  return (
    <DetailsPageLayout
      backPath={AppRoute.StarshipsPage}
    >
      {
        isEditing && localData ? (
          <EditStarshipForm starship={localData} onSubmit={onSubmit} onCancel={onCancel} />
        ) : (
          <>
            <Typography variant="h5">Название: {localData?.name}</Typography>
            <Typography variant="h5">Модель: {localData?.model} km</Typography>
            <Typography variant="h5">Пассажиры: {localData?.passengers}</Typography>
            <Typography variant="h5">Производитель: {localData?.manufacturer}</Typography>
            <Typography variant="h5">Длина: {localData?.length}</Typography>
            <Typography variant="h5">Расходные материалы: {localData?.consumables}</Typography>
            <Button variant="contained" onClick={handleEditToggle}>
              Редактировать
            </Button>
          </>
        )
      }
    </DetailsPageLayout>
  )
}