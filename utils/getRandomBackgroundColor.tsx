import theme from '../styles/theme';
import CONST from './constant';

interface Colors {
  primaryContainer: string;
  secondaryContainer: string;
  tertiaryContainer: string;
  errorContainer: string;
}

const getRandomBackgroundColor = (colors: Colors = theme.colors): string => {
  const backgroundIdx = Math.floor(Math.random() * CONST.CHIP_COLORS.length);
  const background = CONST.CHIP_COLORS[backgroundIdx];

  return colors[background as keyof Colors];
};

export default getRandomBackgroundColor;