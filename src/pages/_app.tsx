import Header from '../components/Header';
import Player from '../components/Player';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useState } from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyle from '../styles/global'
import styles from '../styles/app.module.scss'



function MyApp({ Component, pageProps }) {
  //const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (     
     <PlayerContextProvider>                    
        <div className={styles.wrapper}>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>                      
            <main>
              <Header toggleTheme={toggleTheme}/> 
              <Component {...pageProps} />
            </main>                        
          </ThemeProvider>
          <Player/>
        </div>
      </PlayerContextProvider>
            
  );
}

export default MyApp
