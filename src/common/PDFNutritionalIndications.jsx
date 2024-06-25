import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { degrees, PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import Nutritional_Indications_png from '../../assets/imgs/exams/nutritionalIndications.png';
import PDFExamRequestGenerator from './PDFExamRequestGenerator';
import MetropolisMedium from '/assets/fonts/Metropolis/Metropolis-Medium.ttf';


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
    const nutritionistX = width * 0.63;
    const nutritionistY = height * 0.95;
    const nutritionistSize = 11;

    const nutritionistNameX = width * 0.63;
    let nutritionistNameY = height * 0.935;
    const nutritionistNameSize = 11;
    const nameLineHeight = nutritionistNameSize * 1.2; // Ajusta según sea necesario
    const nameMaxWidth = width * 0.32; // Ancho máximo permitido para el nombre

    const nutritionistContactX = width * 0.63;
    let nutritionistContactY = height * 0.92;
    const nutritionistContactSize = 11;
    const contactLineHeight = nutritionistContactSize * 1.2; // Ajusta según sea necesario
    const contactMaxWidth = width * 0.32; // Ancho máximo permitido para el contacto

    // Coordenadas y tamaño para el Rut del nutricionista
    const nutritionistRutX = width * 0.63;
    let nutritionistRutY = nutritionistNameY - nameLineHeight; // Posición debajo del nombre
    const nutritionistRutSize = 11;
    const rutLineHeight = nutritionistRutSize * 1.2; // Ajusta según sea necesario
    const rutMaxWidth = width * 0.3; // Ancho máximo permitido para el Rut

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

    // Función para dibujar texto con manejo de saltos de línea
   const drawTextWithLineBreaks = (text, x, y, size, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let word of words) {
      const testLine = line + word + ' ';
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > maxWidth) {
        firstPage.drawText(line, { x, y: currentY, size, font, color: rgb(0, 0, 0) });
        line = word + ' ';
        currentY -= lineHeight;
      } else {
        line = testLine;
      }
    }

    // Dibuja la última línea
    firstPage.drawText(line, { x, y: currentY, size, font, color: rgb(0, 0, 0) });

    // Retorna la posición Y final después de dibujar todas las líneas
    return currentY;
  };

  // Dibuja el nombre del nutricionista con manejo de saltos de línea
if (typeof nutritionistData.name === 'string') {
  nutritionistNameY = drawTextWithLineBreaks(nutritionistData.name, nutritionistNameX, nutritionistNameY, nutritionistNameSize, nameMaxWidth, nameLineHeight);

  // Ajusta la posición Y para el Rut del nutricionista
  nutritionistRutY = nutritionistNameY - nameLineHeight;
}

// Dibuja el Rut del nutricionista debajo del nombre
if (typeof nutritionistData.rut === 'string') {
  nutritionistRutY = drawTextWithLineBreaks(nutritionistData.rut, nutritionistRutX, nutritionistRutY, nutritionistRutSize, rutMaxWidth, rutLineHeight);
}

// Dibuja el contacto del nutricionista con manejo de saltos de línea
if (typeof nutritionistData.contact === 'string') {
  nutritionistContactY = nutritionistRutY - rutLineHeight; // Ajusta la posición basado en el Rut
  nutritionistContactY = drawTextWithLineBreaks(nutritionistData.contact, nutritionistContactX, nutritionistContactY, nutritionistContactSize, contactMaxWidth, contactLineHeight);
}

  // Dibuja el resto de la información (como en el ejemplo original)
  firstPage.drawText(nutritionistData.nutritionist, {
    x: nutritionistX,
    y: nutritionistY,
    size: nutritionistSize,
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
  
    const nutritionalIndicationsX = width * 0.16;
    const nutritionalIndicationsY = height * 0.62;
    const nutritionalIndicationsSize = 14;
    const indicationsLineHeight = nutritionalIndicationsSize * 1.35;
    const indicationsMaxLineWidth = width * 0.7;
  
    const nutritionalDiagnosisX = width * 0.5;
    const nutritionalDiagnosisY = height * 0.71;
    const nutritionalDiagnosisSize = 14;
    const diagnosisLineHeight = nutritionalIndicationsSize * 1.24;
    const diagnosisMaxLineWidth = width * 0.45;
  
    // Modificación: Manejo de saltos de línea en 'nutritionalIndications'
    if (typeof nutritionalIndications['nutritionalIndications'] === 'string') {
      const lines = nutritionalIndications['nutritionalIndications'].split('\n'); // Dividir por saltos de línea
      let y = nutritionalIndicationsY;
  
      lines.forEach((line) => { // Procesar cada línea por separado
        const words = line.split(' ');
        let currentLine = '';
        words.forEach((word, index) => {
          const testLine = currentLine + word + ' ';
          const testWidth = font.widthOfTextAtSize(testLine, nutritionalIndicationsSize);
  
          if (testWidth > indicationsMaxLineWidth && index > 0) {
            firstPage.drawText(currentLine, {
              x: nutritionalIndicationsX,
              y: y,
              size: nutritionalIndicationsSize,
              font,
              color: rgb(0, 0, 0),
            });
            currentLine = word + ' ';
            y -= indicationsLineHeight;
          } else {
            currentLine = testLine;
          }
        });
  
        firstPage.drawText(currentLine, {
          x: nutritionalIndicationsX,
          y: y,
          size: nutritionalIndicationsSize,
          font,
          color: rgb(0, 0, 0),
        });
        y -= indicationsLineHeight;
      });
    }
  
    // Modificación: Manejo de saltos de línea en 'nutritionalDiagnosis'
    if (typeof nutritionalIndications['nutritionalDiagnosis'] === 'string') {
      const lines = nutritionalIndications['nutritionalDiagnosis'].split('\n'); // Dividir por saltos de línea
      let y = nutritionalDiagnosisY;
  
      lines.forEach((line) => { // Procesar cada línea por separado
        const words = line.split(' ');
        let currentLine = '';
        words.forEach((word, index) => {
          const testLine = currentLine + word + ' ';
          const testWidth = font.widthOfTextAtSize(testLine, nutritionalDiagnosisSize);
  
          if (testWidth > diagnosisMaxLineWidth && index > 0) {
            firstPage.drawText(currentLine, {
              x: nutritionalDiagnosisX,
              y: y,
              size: nutritionalDiagnosisSize,
              font,
              color: rgb(0, 0, 0),
            });
            currentLine = word + ' ';
            y -= diagnosisLineHeight;
          } else {
            currentLine = testLine;
          }
        });
  
        firstPage.drawText(currentLine, {
          x: nutritionalDiagnosisX,
          y: y,
          size: nutritionalDiagnosisSize,
          font,
          color: rgb(0, 0, 0),
        });
        y -= diagnosisLineHeight;
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
  const fontPath = MetropolisMedium;

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
