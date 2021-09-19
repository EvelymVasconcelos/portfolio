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

export const breakpoints = {
    xs: 0, //extra small
    sm: 480, //small
    md: 768, //medium 
    lg: 992, //large
    xl: 1200, //extra large
};

export default {
    colors: colors,
    typographyVariants,
    breakpoints,
    fontFamily: '\'Fire+Sans\', sans-serif',
}