import { light as lightGreen, dark as darkGreen } from './palette--green';

const palette = (themeMode = 'light', paletteType = 'green') => {
  // if (paletteType === 'blue') {
  //   return themeMode === 'dark' ? darkBlue : lightBlue;
  // } else if (paletteType === 'indigo') {
  //   return themeMode === 'dark' ? darkIndigo : lightIndigo;
  // } else if (paletteType === 'pink') {
  //   return themeMode === 'dark' ? darkPink : lightPink;
  // } else if (paletteType === 'orange') {
  //   return themeMode === 'dark' ? darkOrange : lightOrange;
  // }

  return themeMode === 'dark' ? darkGreen : darkGreen;
};

export default palette;
