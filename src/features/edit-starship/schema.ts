import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
  model: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
  manufacturer: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'), 
  consumables: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
  passengers: yup.number().required('Обязательное поле').nullable(),
  length: yup.number().required('Обязательное поле').nullable(),
})