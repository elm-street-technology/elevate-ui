import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import Paper from 'elevate-ui/Paper';
import Typography from 'elevate-ui/Typography';
import Textarea from 'elevate-ui/Textarea';
import Button from 'elevate-ui/Button';

const FormikTextareaExample = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <Typography type="title">{`<Textarea />`}</Typography>
    <form onSubmit={handleSubmit} style={{ maxWidth: '420px' }}>
      <Textarea
        name="notes"
        id="notes"
        label="Additional notes"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.notes}
        error={touched.notes && errors.notes}
      />
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  </Paper>
);

export default withFormik({
  mapPropsToValues: props => ({ notes: '' }),
  validationSchema: Yup.object().shape({
    notes: Yup.string(),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'TextareaDemo',
})(FormikTextareaExample);
