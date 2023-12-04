// validationSchema.js
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  answers: yup.array().of(
    yup.object({
      answer: yup.string().trim().required('This field is required!'),
    }),
  ),
});

export default validationSchema;
