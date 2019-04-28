import React from 'react';
import styled from 'styled-components';
import HeaderInterface from './types';


export default class Header extends React.PureComponent<HeaderInterface> {
    render(): React.ReactNode {
        return (
            <StyledHeader>
                John Cargill
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.header`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    font-size: 2em;
`;