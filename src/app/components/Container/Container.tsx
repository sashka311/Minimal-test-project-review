import React from "react";
import styled from 'styled-components';
import { useRouter } from "next/navigation";

interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container = ({ children }: ContainerProps) => (
    <Wrapper className="container">{children}</Wrapper>
  );
  
  const Wrapper = styled.div`
    width: 1440px;
    max-width: 90%;
    margin: 0 auto;
    height: 100vh;
  `;
  
  export default Container;