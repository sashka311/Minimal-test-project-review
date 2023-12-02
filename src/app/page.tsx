'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from './components/Container/Container';
import SignInPage from './modules/SignInPage/SignInPage';
import TextBlock from './components/TextBlockForm/TextBlock';
import LoginForm from './components/Forms/LoginForm';
import Router from 'next/navigation';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: rgba(245,245,245,1);
  }
`

export default function Home() {

  const router = useRouter();

  const handleSubmit = (values:any) => {
    console.log(values);

    router.push(`/mainpage?email=${values.email}`);
  }

  return (
    <Container>
      <GlobalStyles />
      <SignInPage>
          <TextBlock topText='Welcome back!' bottomText="Don't have an account?" linkText="Sign Up here" linkTo="signupform" />
          <LoginForm onSubmit={handleSubmit}/>
      </SignInPage>
    </Container>
  )
}
