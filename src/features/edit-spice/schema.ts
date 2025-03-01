import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
    language: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
    classification: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'), 
    designation: yup.string().min(2, 'Минимальная длина 2 символов').required('Обязательное поле'),
    average_lifespan: yup.number().required('Обязательное поле').nullable(),
    average_height: yup.number().required('Обязательное поле').nullable(),
})