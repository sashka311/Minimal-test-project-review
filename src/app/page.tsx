'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '../components/Container/Container';
import AuthLayout from '../layouts/AuthLayout';
import TextBlock from '../components/TextBlockForm/TextBlock';
import LoginForm from '../components/Forms/LoginForm';
import Router from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleSubmit = (values:any) => {
    console.log(values);

    router.push(`/dashboard?email=${values.email}`);
  }

  return (
    <Container>
      <AuthLayout>
          <TextBlock topText='Welcome back!' bottomText="Don't have an account?" linkText="Sign Up here" linkTo="sign-up" />
          <LoginForm onSubmit={handleSubmit}/>
      </AuthLayout>
    </Container>
  )
}
