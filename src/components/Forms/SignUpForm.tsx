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
`;

const DivNames = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
});

interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues, actions: FormikHelpers<SignUpFormValues>) => void;
}

interface SignUpFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const initialValues: SignUpFormValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormStyles>
          <DivNames>
                <Field
                    as={Input}
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    width="168px"
                    autoComplete="given-name"
                />
                <Field
                    as={Input}
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    width="168px"
                    autoComplete="family-name"
                />
          </DivNames>
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
            autoComplete="new-password"
          />
          <Button type="submit" text="Create Account" />
        </FormStyles>
      )}
    </Formik>
  );
};

export default SignUpForm;


