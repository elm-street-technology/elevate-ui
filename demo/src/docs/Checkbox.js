import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Checkbox from "elevate-ui/Checkbox";
import Button from "elevate-ui/Button";

const Checkboxes = () => (
  <Paper withPadding>
    <Typography type="body">
      While the majority of form-related checkboxes will use the{" "}
      <Link to="/checkbox-group">{`<CheckboxGroup />`}</Link> component, there
      may be situations where you'd only want a single checkbox, like below:
    </Typography>
    <Formik
      initialValues={{ tos: false }}
      validationSchema={() =>
        Yup.object().shape({
          tos: Yup.boolean(),
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
            id="tos"
            name="tos"
            /* eslint-disable */
            label={
              <span>
                I accept the <a href="#">Terms of Service</a>
              </span>
            }
            /* eslint-enable */
            component={Checkbox}
          />
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            style={{ marginTop: "8px" }}
          >
            Submit
          </Button>
        </Form>
      )}
    />
  </Paper>
);

export default Checkboxes;
