import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Typography from "elevate-ui/Typography";
import ButtonGroup from "elevate-ui/ButtonGroup";
import Button from "elevate-ui/Button";

const ButtonGroups = ({ classes }) => (
  <div>
    <Typography
      className={classNames(classes.heading, classes.headingContainer)}
      type="heading5"
    >
      Single Value
    </Typography>
    <Paper>
      <Formik
        initialValues={{ colors: "yellow" }}
        validationSchema={() =>
          Yup.object().shape({
            colors: Yup.string().required(),
          })
        }
        isInitialValid
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
        render={({ isSubmitting, isValid }) => (
          <Form className={classes.example} noValidate>
            <Field
              id="colors"
              name="colors"
              label="Colors"
              component={ButtonGroup}
              items={[
                { value: "red", label: "Red" },
                { value: "green", label: "Green" },
                { value: "blue", label: "Blue" },
                { value: "yellow", label: "Yellow" },
              ]}
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    </Paper>
    <br />
    <div className={classes.headingContainer}>
      <Typography className={classes.heading} type="heading5">
        Multiple Values
      </Typography>
      <Typography type="body">
        The component can accept multiple values by adding the{" "}
        <code>multiSelect</code> prop.
      </Typography>
    </div>
    <Paper>
      <Formik
        initialValues={{ colors2: [] }}
        validationSchema={() =>
          Yup.object().shape({
            colors2: Yup.array()
              .of(Yup.string())
              .required("A color is required"),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        }}
        render={({ isSubmitting, isValid }) => (
          <Form id="colorsMulti" noValidate className={classes.example}>
            <Field
              id="colors2"
              name="colors2"
              label="Colors"
              component={ButtonGroup}
              multiSelect
              color="secondary"
              items={[
                { value: "teal", label: "Teal" },
                { value: "brown", label: "Brown" },
                { value: "black", label: "Black" },
                { value: "pink", label: "Pink" },
              ]}
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      />
    </Paper>
  </div>
);

export default withStyles((theme) => ({
  heading: {
    fontSize: "21px",
    color: theme.colors.gray900,
  },
  example: {
    marginBottom: "24px",
    maxWidth: "420px",
  },
  headingContainer: {
    margin: "32px 0px 12px",
  },
}))(ButtonGroups);
