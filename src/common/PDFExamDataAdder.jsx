import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { degrees, PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';
import Exam_Request_png from '../../assets/imgs/exams/examRequest.png';
import PDFExamRequestGenerator from './PDFExamRequestGenerator';


async function fetchAsset(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching asset: ${response.statusText}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  }

  async function addPatientData(pdfDoc, patientData, nutritionistData, font) {
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

    const patientNameX = width * 0.22;
    const patientNameY = height * 0.85;
    const patientNameSize = 14;

    const patientRutX = width * 0.16;
    const patientRutY = height * 0.808;
    const patientRutSize = 14;

    const patientBirthdayX = width * 0.62;
    const patientBirthdayY = height * 0.808;
    const patientBirthdaySize = 14;
    
    const currentDateX = width * 0.31;
    const currentDateY = height * 0.03;
    const currentDateSize = 15;

    const currentMonthX = width * 0.39;
    const currentMonthY = height * 0.03;
    const currentMonthSize = 15;

    const currentYearX = width * 0.47;
    const currentYearY = height * 0.03;
    const currentYearSize = 15;

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

    firstPage.drawText(patientData.birthday, {
      x: patientBirthdayX,
      y: patientBirthdayY,
      size: patientBirthdaySize,
      font,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(patientData.currentDate.d, {
      x: currentDateX,
      y: currentDateY,
      size: currentDateSize,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(patientData.currentDate.m, {
      x: currentMonthX,
      y: currentMonthY,
      size: currentMonthSize,
      font,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(patientData.currentDate.y, {
      x: currentYearX,
      y: currentYearY,
      size: currentYearSize,
      font,
      color: rgb(0, 0, 0),
    });

    // Repite este proceso para los demás datos del paciente y del nutricionista
  }
  async function addOtherExams(pdfDoc, examRequest, font) {
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
  
    // Aquí puedes ajustar las coordenadas y el tamaño del texto según sea necesario
    const otherExamsX = width * 0.5; // Este valor determina dónde comienza el texto en el eje X
    const otherExamsY = height * 0.15; 
    const otherExamsSize = 14;
    const lineHeight = otherExamsSize * 1.35; // Ajusta este valor según sea necesario
  
    const maxLineWidth = width * 0.4; // Este valor determina cuándo se debe dividir el texto. Ajusta este valor según sea necesario
  
    if (typeof examRequest['otherExams'] === 'string') {
      // Divide el texto en líneas
      const words = examRequest['otherExams'].split(' ');
      let line = '';
      let y = otherExamsY;
  
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = font.widthOfTextAtSize(testLine, otherExamsSize);
  
        if (testWidth > maxLineWidth && i > 0) {
          // Dibuja la línea cuando su longitud supera el ancho máximo
          firstPage.drawText(line, {
            x: otherExamsX,
            y: y,
            size: otherExamsSize,
            font,
            color: rgb(0, 0, 0),
          });
  
          line = words[i] + ' ';
          y -= lineHeight;
        } else {
          line = testLine;
        }
      }
  
      // Dibuja la última línea
      firstPage.drawText(line, {
        x: otherExamsX,
        y: y,
        size: otherExamsSize,
        font,
        color: rgb(0, 0, 0),
      });
    }
  }
  
  const xMarks = [
    { key: 'hemograma', top: '72.8%', left: '8.8%', draw: false },
    { key: 'hematocrito', top: '70.6%', left: '8.8%', draw: false },
    { key: 'hemoglobina', top: '68.2%', left: '8.8%', draw: false },
    { key: 'leucocitos', top: '66%', left: '8.8%', draw: false },
    { key: 'plaquetas', top: '63.8%', left: '8.8%', draw: false },
    { key: 'protrombina', top: '61.6%', left: '8.8%', draw: false },
    { key: 'ferritina', top: '59.6%', left: '8.8%', draw: false },
    { key: 'fierroSérico', top: '57.4%', left: '8.8%', draw: false },
    { key: 'transferrina', top: '55.2%', left: '8.8%', draw: false },
    { key: 'vitaminaD', top: '48.8%', left: '8.8%', draw: false },
    { key: 'vitaminaB12', top: '46.6%', left: '8.8%', draw: false },
    { key: 'acidoFolico', top: '44.4%', left: '8.8%', draw: false },
    { key: 'glicemia', top: '38.2%', left: '8.8%', draw: false },
    { key: 'acidoUrico', top: '35.8%', left: '8.8%', draw: false },
    { key: 'albumina', top: '33.8%', left: '8.8%', draw: false },
    { key: 'bilirrubina', top: '31.6%', left: '8.8%', draw: false },
    { key: 'colesterolTotal', top: '29.6%', left: '8.8%', draw: false },
    { key: 'creatinina', top: '27.2%', left: '8.8%', draw: false },
    { key: 'curvaGlicemia', top: '25.2%', left: '8.8%', draw: false },
    { key: 'electrolitos', top: '22.9%', left: '8.8%', draw: false },
    { key: 'fosforo', top: '20.8%', left: '8.8%', draw: false },
    { key: 'glucosaOral', top: '18.4%', left: '8.8%', draw: false },
    { key: 'curvaInsulina', top: '72.4%', left: '51.4%', draw: false },
    { key: 'Insulina', top: '70.2%', left: '51.4%', draw: false },
    { key: 'TSH', top: '68%', left: '51.4%', draw: false },
    { key: 'T3', top: '66%', left: '51.4%', draw: false },
    { key: 'T4', top: '63.8%', left: '51.4%', draw: false },
    { key: 'T4libre', top: '61.8%', left: '51.4%', draw: false },
    { key: 'orinaCompleta', top: '56.4%', left: '51.4%', draw: false },
    { key: 'urocultivo', top: '54.2%', left: '51.4%', draw: false },
    { key: 'proteinuria', top: '52%', left: '51.4%', draw: false },
    { key: 'RPR', top: '46.8%', left: '51.4%', draw: false },
    { key: 'VDRL', top: '44.4%', left: '51.4%', draw: false },
    { key: 'hemoglobinaGlicosilada', top: '40.4%', left: '51.4%', draw: false },
    { key: 'nitrógenoUreico', top: '38%', left: '51.4%', draw: false },
    { key: 'perfilBioquímico', top: '36%', left: '51.4%', draw: false },
    { key: 'perfilLipídico', top: '33.8%', left: '51.4%', draw: false },
    { key: 'perfilHepático', top: '31.8%', left: '51.4%', draw: false },
    { key: 'uremia', top: '29.4%', left: '51.4%', draw: false },
    { key: 'transaminasas', top: '27.2%', left: '51.4%', draw: false },
    { key: 'RAC', top: '25%', left: '51.4%', draw: false },
    { key: 'otherExams', top: '20%', left: '51.4%', draw: false },
  ];

// PDFExamDataAdder.jsx

// PDFExamDataAdder.jsx

async function PDFExamDataAdder({ data }) {
  // Carga la imagen
  const imageBytes = await fetchAsset(Exam_Request_png);

  const examRequest = data.tableData;

  // Genera el PDF
  const pdfBlob = await pdf(<PDFExamRequestGenerator data={data} />).toBlob();

  // Convierte el Blob a ArrayBuffer
  const arrayBuffer = await pdfBlob.arrayBuffer();

  // Carga el PDF existente
  const pdfDoc = await PDFDocument.load(arrayBuffer);

  // Incrusta la fuente en el documento PDF
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

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

  // Actualiza las marcas que se deben dibujar
  for (let markKey in examRequest) {
    if (examRequest[markKey] === "on") {
      const mark = xMarks.find(m => m.key === markKey);
      if (mark) {
        mark.draw = true;
      }
    }
  }

  // Dibuja las marcas
  for (let mark of xMarks) {
    if (mark.draw) {
      const x = width * parseFloat(mark.left) / 100;
      const y = height * parseFloat(mark.top) / 100;
      firstPage.drawText('X', {
          x,
          y,
          size: 14,
          font,
          color: rgb(0, 0, 0),
      });
    }
  }

  await addOtherExams(pdfDoc, data.tableData, font);

  await addPatientData(pdfDoc, data.patientData, data.nutritionistData, font);

  // Guarda el PDF modificado
  const pdfBytes = await pdfDoc.save();

  // Descarga el PDF modificado
  const downloadBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(downloadBlob, 'SolicitudDeExamen.pdf');
}

export default PDFExamDataAdder;
