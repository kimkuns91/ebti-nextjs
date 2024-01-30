import type { Options } from 'react-to-pdf';
import { Margin, Resolution } from 'react-to-pdf';

export const pdfOptions: Options = {
  filename: 'EBTI.pdf',
  method: 'save',
  resolution: Resolution.HIGH,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: 'A4',
    // default is 'portrait'
    // orientation: 'landscape',
  },
  // canvas: {
  //   // default is 'image/jpeg' for better size performance
  //   mimeType: 'image/png',
  //   qualityRatio: 1,
  // },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};
