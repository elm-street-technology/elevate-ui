import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Select from '../../../src/components/select';

const roygbiv = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const FormikInputExample = ({
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
    <form onSubmit={handleSubmit} style={{ maxWidth: '420px' }}>
      <Select
        id="color"
        name="color"
        label="Favorite Color"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.color}
        error={touched.color && errors.color}
        required
      >
        {roygbiv.map(color => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase()}
            {color.slice(1)}
          </option>
        ))}
      </Select>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving' : 'Save'}
      </button>
    </form>
  </Paper>
);

export default withFormik({
  mapPropsToValues: props => ({ color: '' }),
  validationSchema: Yup.object().shape({
    color: Yup.string().required('A favorite color is required'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'InputDemo',
})(FormikInputExample);
