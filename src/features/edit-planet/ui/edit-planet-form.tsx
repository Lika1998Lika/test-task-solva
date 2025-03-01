import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { PlanetsType } from "../../../entities/planets";
import { schema } from "../schema";

type Props = {
  planet: PlanetsType,
  onSubmit: (value: PlanetsType) => void;
  onCancel: () => void;
};
export const EditPlanetForm = ({ planet, onSubmit, onCancel }: Props) => {

  const formMethodsEdit = useForm({
    resolver: yupResolver(schema),
    defaultValues: planet,
  });

  const handleSubmit = formMethodsEdit.handleSubmit(
    (formValues) => onSubmit(formValues),
    (error) => console.error(error)
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" gap={3}>
        <TextField
          error={!!formMethodsEdit.formState.errors['name']}
          helperText={formMethodsEdit.formState.errors['name']?.message}
          label="Название"
          {...formMethodsEdit.register('name')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['diameter']}
          helperText={formMethodsEdit.formState.errors['diameter']?.message}
          type="number"
          label="Диаметр"
          {...formMethodsEdit.register('diameter')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['climate']}
          helperText={formMethodsEdit.formState.errors['climate']?.message}
          label="Климат"
          {...formMethodsEdit.register('climate')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['gravity']}
          helperText={formMethodsEdit.formState.errors['gravity']?.message}
          label="Гравитация"
          {...formMethodsEdit.register('gravity')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['population']}
          helperText={formMethodsEdit.formState.errors['population']?.message}
          type="number"
          label="Население"
          {...formMethodsEdit.register('population')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['terrain']}
          helperText={formMethodsEdit.formState.errors['terrain']?.message}
          label="Pельеф"
          {...formMethodsEdit.register('terrain')}
        />
        <Button variant="contained" type="submit">Сохранить</Button>
        <Button variant="outlined" onClick={onCancel}>Отмена</Button>
      </Stack>
    </form>
  )
}

