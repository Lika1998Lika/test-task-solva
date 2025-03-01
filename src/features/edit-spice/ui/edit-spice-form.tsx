import { useForm } from "react-hook-form";
import { SpeciesType } from "../../../entities/species";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import { schema } from "../schema";

type Props = {
  spice: SpeciesType,
  onSubmit: (value: SpeciesType) => void;
  onCancel: () => void;
};

export const EditSpiceForm = ({ spice, onSubmit, onCancel }: Props) => {

  const formMethodsEdit = useForm<SpeciesType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: spice.name,
      language: spice.language,
      classification: spice.classification,
      designation: spice.designation,
      average_lifespan: spice.average_lifespan,
      average_height: spice.average_height
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
          error={!!formMethodsEdit.formState.errors['language']}
          helperText={formMethodsEdit.formState.errors['language']?.message}
          label="Язык"
          {...formMethodsEdit.register('language')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['classification']}
          helperText={formMethodsEdit.formState.errors['classification']?.message}
          label="Классификация"
          {...formMethodsEdit.register('classification')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['designation']}
          helperText={formMethodsEdit.formState.errors['designation']?.message}
          label="Обозначение"
          {...formMethodsEdit.register('designation')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['average_lifespan']}
          helperText={formMethodsEdit.formState.errors['average_lifespan']?.message}
          label="Средняя продолжительность жизни"
          {...formMethodsEdit.register('average_lifespan')}
        />
        <TextField
          error={!!formMethodsEdit.formState.errors['average_height']}
          helperText={formMethodsEdit.formState.errors['average_height']?.message}
          label="Средний рост"
          {...formMethodsEdit.register('average_height')}
        />

        <Button variant="contained" type="submit">Сохранить</Button>
        <Button variant="outlined" onClick={onCancel}>Отмена</Button>
      </Stack>
    </form>
  )
}