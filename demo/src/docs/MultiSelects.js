import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import MultiSelect from '../../../src/components/multi-select';
import Button from '../../../src/components/button';

const roygbiv = [
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Violet', value: 'violet' },
];

const MultiSelects = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<MultiSelect />`}</Typography>
    <Formik
      initialValues={{ colors: [] }}
      validationSchema={() =>
        Yup.object().shape({
          colors: Yup.array()
            .of(Yup.object())
            .required('A color is required'),
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
        isValid,
      }) => (
        <Form noValidate style={{ maxWidth: '420px' }}>
          <Field
            id="colors"
            name="colors"
            label="Favorite Colors"
            items={roygbiv}
            component={MultiSelect}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default MultiSelects;
