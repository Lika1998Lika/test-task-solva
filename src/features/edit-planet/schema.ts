import { yup } from "../../shared/lib/yup"

export const schema = yup.object().shape({
   name: yup.string().required().min(2, 'Минимальная длина 2 символов'),
   climate: yup.string().required().min(2, 'Минимальная длина 2 символов'),
   terrain: yup.string().required().min(2, 'Минимальная длина 2 символов'),
   gravity: yup.string().required().min(2, 'Минимальная длина 2 символов'),
   diameter: yup.number().required().nullable(),
   population: yup.number().required().nullable(), 
})