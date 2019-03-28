import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Textarea from "elevate-ui/Textarea";
import Button from "elevate-ui/Button";

const TextAreas = () => (
  <div>
    <Formik
      initialValues={{
        story: "",
      }}
      validationSchema={() =>
        Yup.object().shape({
          story: Yup.string().required("A story is required"),
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
          <Field id="story" name="story" label="Story" component={Textarea} />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    />
  </div>
);

export default TextAreas;
