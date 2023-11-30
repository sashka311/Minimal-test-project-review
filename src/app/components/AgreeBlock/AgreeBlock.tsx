import React from "react";
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';
import Link from "next/link";

const public_sans = Public_Sans({
    weight: [ '400', '600', '700' ],
    subsets: [ 'latin', 'vietnamese'],
})

const AgreeStatements = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
`;

const StyledP = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: #637381;
`;

const LinkStyled = styled(Link)`
    text-decoration-line: underline;
    color: #212B36;
`;

const AgreeBlock: React.FC<{
    linkTermsOfUse: string;
    linkPrivacyPolicy: string;
}> = ({ linkTermsOfUse, linkPrivacyPolicy }) => {
    return (
        <AgreeStatements className={public_sans.className}>
            <StyledP>
                By signing up, I agree to <LinkStyled href={linkTermsOfUse}>Terms of Use</LinkStyled> and <LinkStyled href={linkPrivacyPolicy}>Privacy Policy.</LinkStyled>
            </StyledP>
        </AgreeStatements>
    );
};

export default AgreeBlock;
