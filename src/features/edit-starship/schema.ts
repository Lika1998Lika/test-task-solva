import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required().min(2, 'Минимальная длина 2 символов'),
  model: yup.string().required().min(2, 'Минимальная длина 2 символов'),
  manufacturer: yup.string().required().min(2, 'Минимальная длина 2 символов'), 
  consumables: yup.string().min(2, 'Минимальная длина 2 символов'),
  passengers: yup.number().required().nullable(),
  length: yup.number().required().nullable(),
})