import React from 'react';
import styled from 'styled-components';
import ProjectInterface from './types';

export default class Project extends React.PureComponent<ProjectInterface> {
    render(): React.ReactNode {
        const { name, subtitle } = this.props;
        return (
            <StyledProject>
                <Name>{name}</Name>
                <Subtitle>{subtitle}</Subtitle>
            </StyledProject>
        );
    }
};

const StyledProject = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const Name = styled.div`
    font-size: 1.5em;
`;

const Subtitle = styled.div`
    font-size: .75em;
`;