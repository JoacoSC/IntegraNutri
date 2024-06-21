import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { degrees, PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import Nutritional_Indications_png from '../../assets/imgs/exams/nutritionalIndications.png';
import PDFExamRequestGenerator from './PDFExamRequestGenerator';


async function fetchAsset(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching asset: ${response.statusText}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  }

  async function addPatientData(pdfDoc, patientData, nutritionistData, indicationsDate, font) {
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    // Aquí puedes ajustar las coordenadas y el tamaño del texto según sea necesario
    const nutritionistX = width * 0.65;
    const nutritionistY = height * 0.95;
    const nutritionistSize = 13;

    const nutritionistNameX = width * 0.65;
    const nutritionistNameY = height * 0.935;
    const nutritionistNameSize = 13;

    const nutritionistContactX = width * 0.65;
    const nutritionistContactY = height * 0.92;
    const nutritionistContactSize = 13;

    const patientNameX = width * 0.25;
    const patientNameY = height * 0.85;
    const patientNameSize = 14;

    const patientRutX = width * 0.19;
    const patientRutY = height * 0.808;
    const patientRutSize = 14;

    const patientImcX = width * 0.72;
    const patientImcY = height * 0.757;
    const patientImcSize = 14;

    const patientWeightX = width * 0.19;
    const patientWeightY = height * 0.757;
    const patientWeightSize = 14;

    const patientStatureX = width * 0.45;
    const patientStatureY = height * 0.757;
    const patientStatureSize = 14;
    
    const indicationsDateX = width * 0.31;
    const indicationsDateY = height * 0.03;
    const indicationsDateSize = 15;

    const indicationsMonthX = width * 0.39;
    const indicationsMonthY = height * 0.03;
    const indicationsMonthSize = 15;

    const indicationsYearX = width * 0.47;
    const indicationsYearY = height * 0.03;
    const indicationsYearSize = 15;

    firstPage.drawText(nutritionistData.nutritionist, {
      x: nutritionistX,
      y: nutritionistY,
      size: nutritionistSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(nutritionistData.name, {
      x: nutritionistNameX,
      y: nutritionistNameY,
      size: nutritionistNameSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(nutritionistData.contact, {
      x: nutritionistContactX,
      y: nutritionistContactY,
      size: nutritionistContactSize,
      font,
      color: rgb(0, 0, 0),
    });
    
    firstPage.drawText(patientData.name, {
      x: patientNameX,
      y: patientNameY,
      size: patientNameSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(patientData.rut, {
      x: patientRutX,
      y: patientRutY,
      size: patientRutSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(patientData.imc, {
      x: patientImcX,
      y: patientImcY,
      size: patientImcSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(patientData.weight, {
      x: patientWeightX,
      y: patientWeightY,
      size: patientWeightSize,
      font,
      color: rgb(0, 0, 0),
    });
    
    firstPage.drawText(patientData.stature, {
      x: patientStatureX,
      y: patientStatureY,
      size: patientStatureSize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(indicationsDate.d, {
      x: indicationsDateX,
      y: indicationsDateY,
      size: indicationsDateSize,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(indicationsDate.m, {
      x: indicationsMonthX,
      y: indicationsMonthY,
      size: indicationsMonthSize,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(indicationsDate.y, {
      x: indicationsYearX,
      y: indicationsYearY,
      size: indicationsYearSize,
      font,
      color: rgb(0, 0, 0),
    });

    // Repite este proceso para los demás datos del paciente y del nutricionista
  }

  async function addNutritionalIndications(pdfDoc, nutritionalIndications, font) {
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
  
    // Aquí puedes ajustar las coordenadas y el tamaño del texto según sea necesario
    const nutritionalIndicationsX = width * 0.16; // Este valor determina dónde comienza el texto en el eje X
    const nutritionalIndicationsY = height * 0.62; 
    const nutritionalIndicationsSize = 14;
    const indicationsLineHeight = nutritionalIndicationsSize * 1.35; // Ajusta este valor según sea necesario
  
    const indicationsMaxLineWidth = width * 0.7; // Este valor determina cuándo se debe dividir el texto. Ajusta este valor según sea necesario
  
    const nutritionalDiagnosisX = width * 0.5; // Este valor determina dónde comienza el texto en el eje X
    const nutritionalDiagnosisY = height * 0.71; 
    const nutritionalDiagnosisSize = 14;
    const diagnosisLineHeight = nutritionalIndicationsSize * 1.24; // Ajusta este valor según sea necesario

    const diagnosisMaxLineWidth = width * 0.45; // Este valor determina cuándo se debe dividir el texto. Ajusta este valor según sea necesario

    if (typeof nutritionalIndications['nutritionalIndications'] === 'string') {
      // Divide el texto en líneas
      const words = nutritionalIndications['nutritionalIndications'].split(' ');
      let line = '';
      let y = nutritionalIndicationsY;
  
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = font.widthOfTextAtSize(testLine, nutritionalIndicationsSize);
  
        if (testWidth > indicationsMaxLineWidth && i > 0) {
          // Dibuja la línea cuando su longitud supera el ancho máximo
          firstPage.drawText(line, {
            x: nutritionalIndicationsX,
            y: y,
            size: nutritionalIndicationsSize,
            font,
            color: rgb(0, 0, 0),
          });
  
          line = words[i] + ' ';
          y -= indicationsLineHeight;
        } else {
          line = testLine;
        }
      }
  
      // Dibuja la última línea
      firstPage.drawText(line, {
        x: nutritionalIndicationsX,
        y: y,
        size: nutritionalIndicationsSize,
        font,
        color: rgb(0, 0, 0),
      });
    }
    
    if (typeof nutritionalIndications['nutritionalDiagnosis'] === 'string') {
      // Divide el texto en líneas
      const words = nutritionalIndications['nutritionalDiagnosis'].split(' ');
      let line = '';
      let y = nutritionalDiagnosisY;
  
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = font.widthOfTextAtSize(testLine, nutritionalDiagnosisSize);
  
        if (testWidth > diagnosisMaxLineWidth && i > 0) {
          // Dibuja la línea cuando su longitud supera el ancho máximo
          firstPage.drawText(line, {
            x: nutritionalDiagnosisX,
            y: y,
            size: nutritionalDiagnosisSize,
            font,
            color: rgb(0, 0, 0),
          });
  
          line = words[i] + ' ';
          y -= diagnosisLineHeight;
        } else {
          line = testLine;
        }
      }
  
      // Dibuja la última línea
      firstPage.drawText(line, {
        x: nutritionalDiagnosisX,
        y: y,
        size: nutritionalDiagnosisSize,
        font,
        color: rgb(0, 0, 0),
      });
    }
  }
  
// PDFNutritionalIndications.jsx

// PDFNutritionalIndications.jsx

async function PDFNutritionalIndications({ data }) {
  // Carga la imagen
  const imageBytes = await fetchAsset(Nutritional_Indications_png);

  // Genera el PDF
  const pdfBlob = await pdf(<PDFExamRequestGenerator data={data} />).toBlob();

  // Convierte el Blob a ArrayBuffer
  const arrayBuffer = await pdfBlob.arrayBuffer();

  // Carga el PDF existente
  const pdfDoc = await PDFDocument.load(arrayBuffer);


  pdfDoc.registerFontkit(fontkit);

  // Asume que `fontPath` es la ruta a tu fuente personalizada en el directorio de tu proyecto
  const fontPath = '/assets/fonts/Metropolis/Metropolis-Medium.ttf';

  // Usa fetch para obtener los datos de la fuente
  const response = await fetch(fontPath);

  // Convierte la respuesta en un ArrayBuffer
  const fontBytes = await response.arrayBuffer();

  const font = await pdfDoc.embedFont(fontBytes);


  // Incrusta la fuente en el documento PDF
  // const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Incrusta la imagen en el PDF
  const image = await pdfDoc.embedPng(imageBytes);

  // Obtiene la primera página del PDF
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Obtiene el tamaño de la página
  const { width, height } = firstPage.getSize();

  // Calcula el tamaño de la imagen manteniendo su relación de aspecto
  const aspectRatio = image.width / image.height;
  let imageWidth = width;
  let imageHeight = width / aspectRatio;
  if (imageHeight > height) {
    imageHeight = height;
    imageWidth = height * aspectRatio;
  }

  // Calcula las coordenadas para centrar la imagen
  const x = (width - imageWidth) / 2;
  const y = (height - imageHeight) / 2;

  // Dibuja la imagen en la página
  firstPage.drawImage(image, {
    x: x,
    y: y,
    width: imageWidth,
    height: imageHeight,
  });

  await addNutritionalIndications(pdfDoc, data.tableData, font);

  await addPatientData(pdfDoc, data.patientData, data.nutritionistData, data.indicationsDate, font);

  // Guarda el PDF modificado
  const pdfBytes = await pdfDoc.save();

  // Descarga el PDF modificado
  const downloadBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(downloadBlob, 'IndicacionesNutricionales.pdf');
}

export default PDFNutritionalIndications;
