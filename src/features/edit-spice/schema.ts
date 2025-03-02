import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required().min(2, 'Минимальная длина 2 символов'),
    language: yup.string().required().min(2, 'Минимальная длина 2 символов'),
    classification: yup.string().required().min(2, 'Минимальная длина 2 символов'), 
    designation: yup.string().required().min(2, 'Минимальная длина 2 символов'),
    average_lifespan: yup.number().required(),
    average_height: yup.number().required(),
})