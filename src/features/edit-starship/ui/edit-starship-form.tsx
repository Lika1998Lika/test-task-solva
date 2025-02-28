import { yupResolver } from "@hookform/resolvers/yup";
import { StarshipType } from "../../../entities/starships"
import { useForm } from "react-hook-form"
import { schema } from "../schema";
import { Button, Stack, TextField } from "@mui/material";

type Props = {
  starship: StarshipType,
  onSubmit: (value: StarshipType) => void;
};

type StarshipPropsForm = {
  name: string;
  consumables: string;
  length: number | null;
  manufacturer: string;
  model: string;
  passengers: number | null;
}

export const EditStarshipForm = ({ starship, onSubmit }: Props) => {

  const formMethodsEdit = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: starship.name,
      consumables: starship.consumables,
      length: starship.length,
      manufacturer: starship.manufacturer,
      model: starship.model,
      passengers: starship.passengers,
    }
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
          error={!!formMethodsEdit.formState.errors['consumables']}
          helperText={formMethodsEdit.formState.errors['consumables']?.message}
          label="consumables"
          {...formMethodsEdit.register('consumables')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['length']}
          helperText={formMethodsEdit.formState.errors['length']?.message}
          label="length"
          {...formMethodsEdit.register('length')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['manufacturer']}
          helperText={formMethodsEdit.formState.errors['manufacturer']?.message}
          label="manufacturer"
          {...formMethodsEdit.register('manufacturer')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['model']}
          helperText={formMethodsEdit.formState.errors['model']?.message}
          label="model"
          {...formMethodsEdit.register('model')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['passengers']}
          helperText={formMethodsEdit.formState.errors['passengers']?.message}
          label="passengers"
          {...formMethodsEdit.register('passengers')}
        />

        <Button variant="contained" type="submit">Сохранить</Button>
      </Stack>
    </form>
  )
}
