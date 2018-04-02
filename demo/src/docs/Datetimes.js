import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Datetime from '../../../src/components/datetime';
import Button from '../../../src/components/button';

const Datetimes = () => (
  <Paper>
    <Typography type="title">{`<Datetime />`}</Typography>
    <Typography type="body">
      The {`<Datetime />`} component is a styled wrapper around React-Datetime.
    </Typography>
    <Formik
      initialValues={{ startDate: null }}
      validationSchema={() =>
        Yup.object().shape({
          startDate: Yup.date().required('Start date is required'),
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
            id="startDate"
            name="startDate"
            label="Start Date"
            component={Datetime}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Datetimes;
