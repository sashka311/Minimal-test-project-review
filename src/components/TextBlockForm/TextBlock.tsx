import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlockProps {
    topText: string;
    bottomText: string;
    linkText: string;
    linkTo: string;
}

const Block = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
`;

const UpText = styled.h1`
    color: #212B36;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
`;

const BotText = styled.p`
    color: #212B36;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

const Linked = styled(Link)`
    color: #00A76F;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`;

const TextBlock: React.FC<BlockProps> = ({ topText, bottomText, linkText, linkTo }) => {
    return (
        <Block>
            <UpText>
                {topText}
            </UpText>
            <BotText>
                {bottomText}
                <Linked href={`/${linkTo}`} >
                    {` ${linkText}`}
                </Linked>
            </BotText>
        </Block>
    )
}

export default TextBlock;