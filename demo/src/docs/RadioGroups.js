import React from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';

import Paper from 'elevate-ui/Paper';
import Typography from 'elevate-ui/Typography';
import RadioGroup from 'elevate-ui/RadioGroup';
import Button from 'elevate-ui/Button';

const RadioGroups = () => (
  <Paper>
    <Typography type="title">{`<RadioGroup />`}</Typography>
    <Formik
      initialValues={{ color: null }}
      validationSchema={() =>
        Yup.object().shape({
          color: Yup.string().required('A color is required'),
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
            id="color"
            name="color"
            label="Color"
            component={RadioGroup}
            options={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
              { value: 'yellow', label: 'Yellow' },
            ]}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default RadioGroups;
