import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string;

        colors: {
            primary: string;
            secondary: string;
        },

        header: {
            borderBottom: string;
        }

        texts: {
            basicTextColor: string;
            emphasizedTextColor: string;
        },

        buttons: {
            episodeColor: string;
            episodeBorderColor: string;
        }
    }
}