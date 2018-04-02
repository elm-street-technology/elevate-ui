import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Input from '../../../src/components/input';
import Button from '../../../src/components/button';

const Inputs = () => (
  <Paper>
    <Typography type="title">{`<Input />`}</Typography>
    <Formik
      initialValues={{ name: '' }}
      validationSchema={() =>
        Yup.object().shape({
          name: Yup.string().required('Name is required'),
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
          <Field id="name" name="name" label="Name" component={Input} />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Inputs;
