const retroColors = [
  '#FF2E88',
  '#00E5FF',
  '#FFD166',
  '#3A0CA3',
  '#2EE59D',
  '#FF5400',
  '#A2D2FF',
  '#7209B7',
  '#FF6B6B',
  '#00FFA3',
  '#FFBE0B',
  '#4361EE',
  '#EF476F',
  '#18FFFF',
  '#FB8500',
  '#8ECAE6',
  '#F72585',
  '#64FFDA',
  '#FCA311',
  '#03045E',
  '#FF8FAB',
  '#00BBF9',
  '#FF7A00',
  '#219EBC',
  '#B5179E',
  '#00F5D4',
  '#FF3C38',
  '#023047',
  '#FF5D8F',
  '#00C896',
  '#FFD166',
  '#1D3557',
  '#560BAD',
  '#4CC9F0',
  '#FF5400',
  '#A8DADC',
  '#CDB4DB',
  '#0077B6',
  '#FFCA3A',
  '#2B2D42',
  '#480CA8',
  '#00E5FF',
  '#FF7A00',
  '#F1FAEE',
  '#FF006E',
  '#2EE59D',
  '#FF8FAB',
  '#073B4C',
  '#3F37C9',
  '#18FFFF',
  '#FCA311',
  '#D90429',
  '#BDE0FE',
  '#FF3C38',
  '#00FFA3',
  '#1B9AAA',
  '#7209B7',
  '#FFD166',
  '#FF5D8F',
  '#118AB2',
  '#4361EE',
  '#FFBE0B',
  '#00C896',
  '#FFCA3A',
];

export function getContrastingColor(color: string): '#000000' | '#ffffff' {
  const hexToRgb = (color: string): [number, number, number] => {
    const value = color.replace('#', '');

    if (value.length !== 6) {
      throw new Error(`Invalid hex color: ${color}`);
    }

    return [parseInt(value.slice(0, 2), 16), parseInt(value.slice(2, 4), 16), parseInt(value.slice(4, 6), 16)];
  };

  const linearize = (color: number): number => {
    const sRGB = color / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };

  const relativeLuminance = (r: number, g: number, b: number): number => {
    const R = linearize(r);
    const G = linearize(g);
    const B = linearize(b);

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };

  const [r, g, b] = hexToRgb(color);
  const luminance = relativeLuminance(r, g, b);
  const contrastWithBlack = (luminance + 0.05) / 0.05;
  const contrastWithWhite = 1.05 / (luminance + 0.05);

  return contrastWithBlack > contrastWithWhite ? '#000000' : '#ffffff';
}

export default retroColors;
