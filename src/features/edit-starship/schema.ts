import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().min(10, 'Минимальная длина 10 символов').max(30, 'Минимальная длина 30 символов').required('Обязательное поле'),
  model: yup.string().min(10, 'Минимальная длина 10 символов').max(30, 'Минимальная длина 30 символов').required('Обязательное поле'),
  passengers: yup.number().required('Обязательное поле').nullable(),
  manufacturer: yup.string().min(10, 'Минимальная длина 10 символов').max(50, 'Минимальная длина 50 символов').required('Обязательное поле'), 
  length: yup.number().required('Обязательное поле').nullable(),
  consumables: yup.string().min(10, 'Минимальная длина 10 символов').required('Обязательное поле'),
})