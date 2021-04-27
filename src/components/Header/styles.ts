import styled from 'styled-components';

export const Container = styled.header`
    background: ${props => props.theme.colors.primary};
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.theme.header.borderBottom };

    p{
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 1px solid var(--gray-100);
    }

    span{
        margin-left: auto;
        text-transform: capitalize;
    }

    .switcher{
        margin-left: 1rem;
    }    
`;