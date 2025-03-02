import { useGetSpiceByIdQuery } from "../../entities/species/api/service";
import { Alert, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SpeciesType } from "../../entities/species";
import { EditSpiceForm } from "../../features/edit-spice";
import { AppRoute } from "../../shared/const";
import { CircularProgressLoading } from "../../shared/lib/circular-progress";
import { DetailsPageLayout } from "../../shared/layout/details-page-layout";
import { useExtractIdFromParams } from "../../shared/lib/use-extractId-from-params";

export function DetailsSpicePage() {
  const [isEditing, setIsEditing] = useState(false);

  const id = useExtractIdFromParams();

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
    setLocalData(value)
    setIsEditing(false)
  }

  const onCancel = () => {
    setIsEditing(false)
  };

  return (
    <DetailsPageLayout backPath={AppRoute.SpeciesPage}>
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
    </DetailsPageLayout>
  )
}