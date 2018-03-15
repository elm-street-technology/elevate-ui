import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
// import Select from '../../../src/components/select';
import SelectDownshift from '../../../src/components/select-downshift';

const roygbiv = [
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Violet', value: 'violet' },
];

const Selects = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<Select />`}</Typography>
    <Formik
      initialValues={{ color: '' }}
      validationSchema={() =>
        Yup.object().shape({
          color: Yup.string().required('A favorite color is required'),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form noValidate style={{ maxWidth: '420px' }}>
          <Field
            id="color"
            name="color"
            label="Favorite Color"
            items={roygbiv}
            component={SelectDownshift}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  </Paper>
);

export default Selects;
