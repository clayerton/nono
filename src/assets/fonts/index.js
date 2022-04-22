import ArchivoBlackRegularFont from './ArchivoBlack-Regular.ttf';

const ArchivoBlackRegular = {
    fontFamily: "ArchivoBlack",
    fontStyle: "normal",
    fontWeight: 400,
    src: `
        local('ArchivoBlack-Regular'),
        url(${ArchivoBlackRegularFont}) format('ttf')
      `
  }
  export default {
    ArchivoBlackRegular,
  };