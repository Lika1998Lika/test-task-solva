import { yup } from "../../../shared/lib/yup";

export const schema = yup.object().shape({
   login: yup.string().required(),
   password: yup.string().required(),
})