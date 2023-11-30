import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styled from 'styled-components';
import Link from 'next/link';

const FormStyles = styled(Form)`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
`

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

interface SignInFormProps {
  onSubmit: (values: SignInFormValues, actions: FormikHelpers<SignInFormValues>) => void;
}

interface SignInFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyles>
          <Field
            as={Input}
            name="email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <Field
            as={Input}
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <Button type="submit" text="Log In" />
        </FormStyles>
      )}
    </Formik>
  );
};

export default LoginForm;