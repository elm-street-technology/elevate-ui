import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Input from '../../../src/components/input';
import Button from '../../../src/components/button';

const SignUpForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">Sign-up Form Demo</Typography>
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={() =>
        Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
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
          <Field id="name" name="name" label="Name" component={Input} />
          <Field id="email" name="email" label="Email" component={Input} />
          <Field
            id="password"
            name="password"
            label="Password"
            type="password"
            component={Input}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default SignUpForm;