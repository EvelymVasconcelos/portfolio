import { typographyVariants } from './typographVariants'

const colors = {
    background: {
        light: {
            color: '#E5E5E5',
        },
        dark: {
            color: '#000000',
        },
    },
    primary: {
        main: {
        //   color: '#D7385E',
          contrastText: '#000000',
        },
    },
    secondary: {
        main: {
        //   color: '#D7385E',
          contrastText: '#FFFFFF',
        },
    },
     
  }

export default {
    colors: colors,
    typographyVariants,
    fontFamily: '\'Fire+Sans\', sans-serif',
}