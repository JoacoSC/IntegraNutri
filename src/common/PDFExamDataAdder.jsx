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
    //TODO: Ordenar desde aquí 
    { key: 'curvaInsulina', top: '54%', left: '51.4%', draw: false },
    { key: 'Insulina', top: '56%', left: '56%', draw: false },
    { key: 'TSH', top: '58%', left: '58%', draw: false },
    { key: 'T3', top: '60%', left: '60%', draw: false },
    { key: 'T4', top: '62%', left: '62%', draw: false },
    { key: 'T4libre', top: '64%', left: '64%', draw: false },
    { key: 'orinaCompleta', top: '66%', left: '66%', draw: false },
    { key: 'urocultivo', top: '68%', left: '68%', draw: false },
    { key: 'proteinuria', top: '70%', left: '70%', draw: false },
    { key: 'RPR', top: '72%', left: '72%', draw: false },
    { key: 'VDRL', top: '74%', left: '74%', draw: false },
    { key: 'hemoglobinaGlicosilada', top: '76%', left: '76%', draw: false },
    { key: 'nitrógenoUreico', top: '78%', left: '78%', draw: false },
    { key: 'perfilBioquímico', top: '80%', left: '80%', draw: false },
    { key: 'perfilLipídico', top: '82%', left: '82%', draw: false },
    { key: 'perfilHepático', top: '84%', left: '84%', draw: false },
    { key: 'uremia', top: '86%', left: '86%', draw: false },
    { key: 'transaminasas', top: '88%', left: '88%', draw: false },
    { key: 'RAC', top: '90%', left: '90%', draw: false },
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

  // Guarda el PDF modificado
  const pdfBytes = await pdfDoc.save();

  // Descarga el PDF modificado
  const downloadBlob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(downloadBlob, 'SolicitudDeExamen.pdf');
}

export default PDFExamDataAdder;
