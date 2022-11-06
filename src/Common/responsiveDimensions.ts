import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const aspectRatio = () => height / width;

export const responsiveWidth = (w: number) => Math.round(width * (w / 100));

export const responsiveHeight = (h: number) => Math.round(height * (h / 100));

export const expResponsiveHeight = (h: number) => {
  const percent = (h + Math.exp(Math.E - aspectRatio()) * Math.E) / 100;
  return Math.round(height * percent);
};

export const expResponsiveWidth = (w: number) => {
  const percent = (w + Math.exp(Math.E - aspectRatio()) * Math.E) / 100;
  return Math.round(width * percent);
};

export const moderateScale = (size: number, factor = 0.5) =>
  Math.round(size + (responsiveWidth(size) - size) * factor);

export const responsiveFontSize = (f: number, factor = 0.35) =>
  f + (responsiveWidth(f) - f) * factor;
