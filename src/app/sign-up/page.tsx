'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '../../components/Container/Container';
import SignInPage from '../../layouts/AuthLayout';
import TextBlock from '../../components/TextBlockForm/TextBlock';
import SignUpForm from '../../components/Forms/SignUpForm';
import Router from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleSubmit = (values:any) => {
    console.log(values);

    router.push('/dashboard');
  }

  return (
    <Container>
      <SignInPage>
          <TextBlock topText='Get started absolutely free' bottomText="Already have an account?" linkText="Login" linkTo="/" />
          <SignUpForm onSubmit={handleSubmit}/>
      </SignInPage>
    </Container>
  )
}

