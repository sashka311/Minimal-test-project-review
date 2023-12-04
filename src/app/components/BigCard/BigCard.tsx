import React from "react";
import styled from 'styled-components';

const CardGraph = styled.div`
  display: flex;
  width: 344px;
  height: 268px;
  border-radius: 16px;
  background: ${(props) => props.background || '#FFF'} ;
  box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
  padding: 24px;
  flex-direction: column;
  gap: 24px;
`;

interface BgCard {
  background: string;
  children: React.ReactNode;
}

const BigCard: React.FC<BgCard> = ({background, children}) => {
    return (
        <CardGraph background={background}>
          {children}
        </CardGraph>
    )
}

export default BigCard;