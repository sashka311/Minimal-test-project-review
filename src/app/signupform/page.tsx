'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Container from '../components/Container/Container';
import SignInPage from '../modules/SignInPage/SignInPage';
import TextBlock from '../components/TextBlockForm/TextBlock';
import SignUpForm from '../components/Forms/SignUpForm';
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

    router.push('/mainpage');
  }

  return (
    <Container>
      <GlobalStyles />
      <SignInPage>
          <TextBlock topText='Get started absolutely free' bottomText="Already have an account?" linkText="Login" linkTo="/" />
          <SignUpForm onSubmit={handleSubmit}/>
      </SignInPage>
    </Container>
  )
}

