import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  'displaySmall': {
    'fontFamily': 'Poppins-Bold',
  },
  'displayMedium': {
    'fontFamily': 'Poppins-Bold',
  },
  'displayLarge': {
    'fontFamily': 'Poppins-Bold',
  },
  'headlineSmall': {
    'fontFamily': 'Poppins-Medium',
  },
  'headlineMedium': {
    'fontFamily': 'Poppins-Medium',
  },
  'headlineLarge': {
    'fontFamily': 'Poppins-Medium',
  },
  'titleSmall': {
    'fontFamily': 'Poppins',
  },
  'titleMedium': {
    'fontFamily': 'Poppins',
  },
  'titleLarge': {
    'fontFamily': 'Poppins',
  },
  'labelSmall': {
    'fontFamily': 'Poppins-SemiBold',
  },
  'labelMedium': {
    'fontFamily': 'Poppins-SemiBold',
  },
  'labelLarge': {
    'fontFamily': 'Poppins-SemiBold',
  },
  'bodySmall': {
    'fontFamily': 'Poppins-Light',
  },
  'bodyMedium': {
    'fontFamily': 'Poppins-Light',
  },
  'bodyLarge': {
    'fontFamily': 'Poppins-Light',
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    'primary': 'rgb(0, 97, 162)',
    'onPrimary': 'rgb(255, 255, 255)',
    'primaryContainer': 'rgb(209, 228, 255)',
    'onPrimaryContainer': 'rgb(0, 29, 53)',
    'secondary': 'rgb(99, 81, 165)',
    'onSecondary': 'rgb(255, 255, 255)',
    'secondaryContainer': 'rgb(231, 222, 255)',
    'onSecondaryContainer': 'rgb(31, 0, 95)',
    'tertiary': 'rgb(123, 88, 0)',
    'onTertiary': 'rgb(255, 255, 255)',
    'tertiaryContainer': 'rgb(255, 222, 165)',
    'onTertiaryContainer': 'rgb(39, 25, 0)',
    'error': 'rgb(186, 26, 26)',
    'onError': 'rgb(255, 255, 255)',
    'errorContainer': 'rgb(255, 218, 214)',
    'onErrorContainer': 'rgb(65, 0, 2)',
    'background': 'rgb(245, 245, 245)',
    'onBackground': 'rgb(26, 28, 30)',
    'surface': 'rgb(253, 252, 255)',
    'onSurface': 'rgb(26, 28, 30)',
    'surfaceVariant': 'rgb(223, 226, 235)',
    'onSurfaceVariant': 'rgb(66, 71, 78)',
    'outline': 'rgb(115, 119, 127)',
    'outlineVariant': 'rgb(195, 199, 207)',
    'shadow': 'rgb(0, 0, 0)',
    'scrim': 'rgb(0, 0, 0)',
    'inverseSurface': 'rgb(47, 48, 51)',
    'inverseOnSurface': 'rgb(241, 240, 244)',
    'inversePrimary': 'rgb(157, 202, 255)',
    'elevation': {
      'level0': 'transparent',
      'level1': 'rgb(240, 244, 250)',
      'level2': 'rgb(233, 240, 248)',
      'level3': 'rgb(225, 235, 245)',
      'level4': 'rgb(223, 233, 244)',
      'level5': 'rgb(218, 230, 242)'
    },
    'surfaceDisabled': 'rgba(26, 28, 30, 0.12)',
    'onSurfaceDisabled': 'rgba(26, 28, 30, 0.38)',
    'backdrop': 'rgba(44, 49, 55, 0.4)'
  }
};

export default theme;