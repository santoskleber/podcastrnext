import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import Switch from 'react-switch';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { lighten, darken } from 'polished';


type HeaderProps = {
    toggleTheme(): void
}

export default function Header( { toggleTheme }: HeaderProps ){
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    } );

    function handleSwithChanged(){
        toggleTheme();
    }

    const { title, colors } = useContext(ThemeContext);

    return (
        <Container>
            <Link href="/">
                <a>
                    <img src={title === 'dark' ? "/logo-dark.svg" : "/logo-white.svg" } alt="Podcastr"/>
                </a>
            </Link>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

            <Switch onChange={handleSwithChanged} 
                checked={title === 'dark'} 
                checkedIcon={false} 
                uncheckedIcon={false} 
                className="switcher"
                offColor={darken(0.2, colors.primary)} 
                onColor={lighten(0.1, colors.secondary)}
            />
        </Container>
    );
}