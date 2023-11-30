import React from "react";
import styled from 'styled-components';

const Top = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding: 0px 40px;
  align-items: center;
  height: 80px;
  width: 100%;
  top: 0;
  gap: 23px;
`;

const AccImg = styled.img`
    cursor: pointer;
`

const Header = () => {
    return (
        <Top>
            <AccImg src="/img/ic-bell.svg">

            </AccImg>
            <AccImg src="/img/account.png">

            </AccImg>
        </Top>
    );
}

export default Header;