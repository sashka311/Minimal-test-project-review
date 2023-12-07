import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 344px;
  height: 152px;
  padding: 16px 16px 16px 24px;
  align-items: center;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
`;

const PropsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Img = styled.img`
  width: 120px;
  height: 120px;
`

const Count = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  color: #212B36;
`;

const Name = styled.p`
  color: #637381;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

interface CardProps {
  value: any;
  title: string;
  image: string;
}

const SmallCard: React.FC<CardProps> = ({ value, title, image, ...rest}) => {
  return (
    <Card>
      <PropsHolder>
        <Count>
          {value}
        </Count>
        <Name>
          {title}
        </Name>
      </PropsHolder>
      <Img src={`/img/MainPage/Cards/${image}`} />
    </Card>
  )
}

export default SmallCard;