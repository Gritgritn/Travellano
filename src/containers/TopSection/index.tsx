import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { NavBar } from '../../components/NavBar';

const TopSectionContainer = styled.div`
    ${tw`
        h-screen
        w-full
        flex
        flex-col
        relative
    `}
`;

export function TopSection() {
    return <TopSectionContainer>
        <NavBar />
    </TopSectionContainer>
};