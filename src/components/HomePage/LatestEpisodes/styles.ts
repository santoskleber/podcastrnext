import styled from 'styled-components';

export const LatestEpisodes = styled.section`
`;

export const LatestEpisodesList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;    
`;

export const LatestEpisodesListItem = styled.li`
    background: ${props => props.theme.colors.primary};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.header.borderBottom };
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: center;

    img{
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
    }
`;

export const EpisodeListItemButton = styled.button`
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.theme.buttons.episodeColor};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.buttons.episodeBorderColor};
    border-radius: 0.675rem;
    font-size: 0;

    transition: filter 0.2s;

    img{
        width: 1.5rem;
        height: 1.5rem;
    }                

    &:hover{
        filter:brightness(0.95);
    }    
`;

export const EpisodeDetails = styled.div`
    flex: 1;
    margin-left: 1rem;

    a{
        display: block;
        color: var(--grey-800);
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;

        &:hover{
            text-decoration: underline;
        }
    }

    p{
        font-size: 0.875rem;
        margin-top: 0.5rem;
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span{
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.875rem;

        &:last-child{
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            position: relative;

            &::before{
                content: "";
                width: 4px;
                height: 4px;
                border-radius: 2px;
                background: #DDD;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

`;