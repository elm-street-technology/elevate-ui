import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Textarea from '../../../src/components/textarea';

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
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
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
