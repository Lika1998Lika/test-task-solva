import { yupResolver } from "@hookform/resolvers/yup";
import { StarshipType } from "../../../entities/starships"
import { useForm } from "react-hook-form"
import { schema } from "../schema";
import { Button, Stack, TextField } from "@mui/material";

type Props = {
  starship: StarshipType,
  onSubmit: (value: StarshipType) => void;
  onCancel: () => void;
};

export const EditStarshipForm = ({ starship, onSubmit, onCancel }: Props) => {

  const formMethodsEdit = useForm<StarshipType>({
    resolver: yupResolver(schema),
    defaultValues: starship
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
          error={!!formMethodsEdit.formState.errors['model']}
          helperText={formMethodsEdit.formState.errors['model']?.message}
          label="Модель"
          {...formMethodsEdit.register('model')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['passengers']}
          helperText={formMethodsEdit.formState.errors['passengers']?.message}
          label="Пассажиры"
          type="number"
          {...formMethodsEdit.register('passengers')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['manufacturer']}
          helperText={formMethodsEdit.formState.errors['manufacturer']?.message}
          label="Производитель"
          {...formMethodsEdit.register('manufacturer')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['length']}
          helperText={formMethodsEdit.formState.errors['length']?.message}
          type="number"
          label="Длина"
          {...formMethodsEdit.register('length')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['consumables']}
          helperText={formMethodsEdit.formState.errors['consumables']?.message}
          label="Расходные материалы"
          {...formMethodsEdit.register('consumables')}
        />
        <Button variant="contained" type="submit">Сохранить</Button>
        <Button variant="outlined" onClick={onCancel}>Отмена</Button>
      </Stack>
    </form>
  )
}
