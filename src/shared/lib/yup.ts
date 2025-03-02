import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Обязательное поле',
  },
});

export { yup };