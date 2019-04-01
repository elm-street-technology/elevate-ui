import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import Datetime from "elevate-ui/Datetime";
import Button from "elevate-ui/Button";
import Typography from "elevate-ui/Typography";

const Datetimes = () => (
  <Paper>
    <Typography type="body" gutterBottom>
      {`<Datetime />`} uses react-datepicker under the hood to create date
      inputs. See the full documentation and available props{" "}
      <a href="https://github.com/Hacker0x01/react-datepicker">here</a>.
    </Typography>
    <Formik
      initialValues={{ startDate: null }}
      validationSchema={() =>
        Yup.object().shape({
          startDate: Yup.date().required("Start date is required"),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({ isSubmitting, isValid }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <Field
            id="startDate"
            name="startDate"
            label="Start Date"
            dateFormat="MMMM d, yyyy"
            component={Datetime}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
    <Formik
      initialValues={{ startDateTime: null }}
      validationSchema={() =>
        Yup.object().shape({
          startDateTime: Yup.date().required("Start date & time is required"),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({ isSubmitting, isValid }) => (
        <Form noValidate style={{ maxWidth: "420px", marginTop: "24px" }}>
          <Field
            id="startDateTime"
            name="startDateTime"
            label="Start Date & Time"
            dateFormat="MMMM d, yyyy hh:mmaa"
            showTimeSelect
            component={Datetime}
          />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Datetimes;
