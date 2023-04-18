import { PaletteMode, ThemeOptions } from '@mui/material';
import { IRANSansX } from './fonts';

const iranSansXFont = IRANSansX.style.fontFamily;

export const themeOptions = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: iranSansXFont,
    display1: {
      fontSize: 57,
      lineHeight: '64px',
      letterSpacing: 0,
      fontWeight: 900,
    },
    display2: {
      fontSize: 45,
      lineHeight: '52px',
      letterSpacing: 0,
      fontWeight: 900,
    },
    display3: {
      fontSize: 36,
      lineHeight: '44px',
      letterSpacing: 0,
      fontWeight: 900,
    },
    headline1: {
      fontSize: 32,
      lineHeight: '40px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    headline2: {
      fontSize: 28,
      lineHeight: '36px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    headline3: {
      fontSize: 24,
      lineHeight: '32px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    title1: {
      fontSize: 20,
      lineHeight: '28px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    title2: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    title3: {
      fontSize: 16,
      lineHeight: '20px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    title4: {
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 700,
    },
    label1: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    label2: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    label3: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: 0,
      fontWeight: 500,
    },
    body1: {
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: 0,
      fontWeight: 400,
    },
    body2: {
      fontSize: 18,
      lineHeight: '22px',
      letterSpacing: 0,
      fontWeight: 400,
    },
    body3: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: 0,
      fontWeight: 400,
    },
    body4: {
      fontSize: 12,
      lineHeight: '18',
      letterSpacing: 0,
      fontWeight: 400,
    },
    caption: undefined,
    button: undefined,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'gold' },
          style: ({ theme }) => ({
            background: theme.palette.yellow[500],
            color: theme.palette.grey[700],
            ':hover': {
              background: theme.palette.yellow[600],
            },
            ':disabled': {
              background: theme.palette.grey[200],
            },
            ':active': {
              background: theme.palette.yellow[700],
            },
          }),
        },
        {
          props: { variant: 'negative' },
          style: ({ theme }) => ({
            background: theme.palette.red[500],
            color: theme.palette.common.white,
            ':hover': {
              background: theme.palette.red[700],
            },
            ':disabled': {
              background: theme.palette.grey[200],
            },
            ':active': {
              background: theme.palette.red[800],
            },
          }),
        },
        {
          props: { variant: 'positive' },
          style: ({ theme }) => ({
            background: theme.palette.green[500],
            color: theme.palette.common.white,
            ':hover': {
              background: theme.palette.green[700],
            },
            ':disabled': {
              background: theme.palette.grey[200],
            },
            ':active': {
              background: theme.palette.green[800],
            },
          }),
        },
        {
          props: { variant: 'warning' },
          style: ({ theme }) => ({
            background: theme.palette.green[500],
            color: theme.palette.common.white,
            ':hover': {
              background: theme.palette.green[700],
            },
            ':disabled': {
              background: theme.palette.grey[200],
            },
            ':active': {
              background: theme.palette.green[800],
            },
          }),
        },
        {
          props: { variant: 'blue' },
          style: ({ theme }) => ({
            background: theme.palette.blue[400],
            color: theme.palette.common.white,
            ':hover': {
              background: theme.palette.blue[500],
            },
            ':disabled': {
              background: theme.palette.blue[200],
            },
            ':active': {
              background: theme.palette.blue[800],
            },
          }),
        },
        {
          props: { variant: 'text' },
          style: ({ theme }) => ({
            background: 'transparent',
            border: '1px solid',
            color: theme.palette.common.white,
            ':hover': {
              background: theme.palette.grey[900],
            },
            ':disabled': {
              background: theme.palette.grey[200],
            },
            ':active': {
              background: theme.palette.grey[800],
            },
          }),
        },
      ],
      styleOverrides: {
        root: {
          minHeight: 48,
          fontSize: 14,
          borderRadius: '12px',
          fontFamily: iranSansXFont,
          padding: '0 20px',
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 16,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    MuiModal: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          common: {
            black: '#000',
            white: '#FFF',
          },
          primary: {
            main: 'rgba(21,101,192,0.8)',
            light: 'rgba(67,131,204,0.4)',
          },
          secondary: {
            main: 'rgba(41,157,143,0.8)',
          },
          // palette values for light mode
          red: {
            '50': '#FEF3F2',
            '100': '#FEE4E2',
            '200': '#FFCDCA',
            '300': '#FDA29B',
            '400': '#FA7066',
            '500': '#F04438',
            '600': '#D92D20',
            '700': '#B42318',
            '800': '#912018',
            '900': '#7A271A',
          },
          warning: {
            '50': '#FFFAEB',
            '100': '#FEF0C7',
            '200': '#FEDF89',
            '300': '#FEC84B',
            '400': '#FDB022',
            '500': '#F79009',
            '600': '#DC6803',
            '700': '#B54708',
            '800': '#93370D',
            '900': '#7A2E0E',
          },
          green: {
            '50': '#ECFDF3',
            '100': '#D1FADF',
            '200': '#A6F4C5',
            '300': '#6CE9A6',
            '400': '#32D583',
            '500': '#12B76A',
            '600': '#039855',
            '700': '#027A48',
            '800': '#05603A',
            '900': '#054F31',
          },
          grey: {
            '50': '#F9FAFB',
            '100': '#F2F4F7',
            '200': '#EAECF0',
            '300': '#D0D5DD',
            '400': '#98A2B3',
            '500': '#667085',
            '600': '#475467',
            '700': '#344054',
            '800': '#1D2939',
            '900': '#101828',
          },
          yellow: {
            '50': '#FFF8ED',
            '100': '#FFEAC6',
            '200': '#FFE0AA',
            '300': '#FFD184',
            '400': '#FFC96C',
            '500': '#FFBB47',
            '600': '#E8AA41',
            '700': '#B58532',
            '800': '#8C6727',
            '900': '#6B4F1E',
          },
          teal: {
            '50': '#F4FBFC',
            '100': '#DEF4F5',
            '200': '#CEEEF0',
            '300': '#B8E6EA',
            '400': '#AAE1E5',
            '500': '#95DADF',
            '600': '#88C6CB',
            '700': '#6A9B9E',
            '800': '#52787B',
            '900': '#3F5C5E',
          },
          blue: {
            '50': '#E6F8FD',
            '100': '#B0E9F9',
            '200': '#8ADEF6',
            '300': '#54CFF2',
            '400': '#33C5F0',
            '500': '#00B7EC',
            '600': '#00A7D7',
            '700': '#0082A8',
            '800': '#006582',
            '900': '#004D63',
          },
          azure: {
            '50': '#EEF2F9',
            '100': '#CAD6EB',
            '200': '#B0C2E2',
            '300': '#8CA6D5',
            '400': '#7695CD',
            '500': '#547AC0',
            '600': '#4C6FAF',
            '700': '#3C5788',
            '800': '#2E436A',
            '900': '#233351',
          },
          violet: {
            '50': '#EBEBF4',
            '100': '#C1C0DD',
            '200': '#A3A2CC',
            '300': '#7A77B5',
            '400': '#605DA6',
            '500': '#383490',
            '600': '#332F83',
            '700': '#282566',
            '800': '#1F1D4F',
            '900': '#18163C',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            //here need change i copied palette from light mode
            main: 'rgba(21,101,192,0.8)',
            light: 'rgba(67,131,204,0.4)',
          },
          secondary: {
            main: 'rgba(41,157,143,0.8)',
          },
          common: {
            white: '#000',
            black: '#FFF',
          },
          red: {
            '900': '#FEF3F2',
            '800': '#FEE4E2',
            '700': '#FFCDCA',
            '600': '#FDA29B',
            '500': '#FA7066',
            '400': '#F04438',
            '300': '#D92D20',
            '200': '#B42318',
            '100': '#912018',
            '50': '#7A271A',
          },
          warning: {
            '900': '#FFFAEB',
            '800': '#FEF0C7',
            '700': '#FEDF89',
            '600': '#FEC84B',
            '500': '#FDB022',
            '400': '#F79009',
            '300': '#DC6803',
            '200': '#B54708',
            '100': '#93370D',
            '50': '#7A2E0E',
          },
          green: {
            '900': '#ECFDF3',
            '800': '#D1FADF',
            '700': '#A6F4C5',
            '600': '#6CE9A6',
            '500': '#32D583',
            '400': '#12B76A',
            '300': '#039855',
            '200': '#027A48',
            '100': '#05603A',
            '50': '#054F31',
          },
          grey: {
            '900': '#F9FAFB',
            '800': '#F2F4F7',
            '700': '#EAECF0',
            '600': '#D0D5DD',
            '500': '#98A2B3',
            '400': '#667085',
            '300': '#475467',
            '200': '#344054',
            '100': '#1D2939',
            '50': '#101828',
          },
          yellow: {
            '900': '#FFF8ED',
            '800': '#FFEAC6',
            '700': '#FFE0AA',
            '600': '#FFD184',
            '500': '#FFC96C',
            '400': '#FFBB47',
            '300': '#E8AA41',
            '200': '#B58532',
            '100': '#8C6727',
            '50': '#6B4F1E',
          },
          teal: {
            '900': '#F4FBFC',
            '800': '#DEF4F5',
            '700': '#CEEEF0',
            '600': '#B8E6EA',
            '500': '#AAE1E5',
            '400': '#95DADF',
            '300': '#88C6CB',
            '200': '#6A9B9E',
            '100': '#52787B',
            '50': '#3F5C5E',
          },
          blue: {
            '900': '#E6F8FD',
            '800': '#B0E9F9',
            '700': '#8ADEF6',
            '600': '#54CFF2',
            '500': '#33C5F0',
            '400': '#00B7EC',
            '300': '#00A7D7',
            '200': '#0082A8',
            '100': '#006582',
            '50': '#004D63',
          },
          azure: {
            '900': '#EEF2F9',
            '800': '#CAD6EB',
            '700': '#B0C2E2',
            '600': '#8CA6D5',
            '500': '#7695CD',
            '400': '#547AC0',
            '300': '#4C6FAF',
            '200': '#3C5788',
            '100': '#2E436A',
            '50': '#233351',
          },
          violet: {
            '900': '#EBEBF4',
            '800': '#C1C0DD',
            '700': '#A3A2CC',
            '600': '#7A77B5',
            '500': '#605DA6',
            '400': '#383490',
            '300': '#332F83',
            '200': '#282566',
            '100': '#1F1D4F',
            '50': '#18163C',
          },
        }),
  },
});
