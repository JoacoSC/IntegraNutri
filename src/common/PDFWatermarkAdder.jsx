import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import PDFGenerator from './PDFGenerator';  // Asegúrate de cambiar esto a la ruta de tu componente PDFGenerator
import Nutri_logo_vertical_lg_png from '../../assets/imgs/Nutri_logo_vertical_lg_png.png';


async function fetchAsset(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching asset: ${response.statusText}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  }
  

// PDFWatermarkAdder.jsx

// PDFWatermarkAdder.jsx

async function PDFWatermarkAdder({ data }) {

    // Carga la imagen
    const imageBytes = await fetchAsset(Nutri_logo_vertical_lg_png);
  
    // Genera el PDF
    const pdfBlob = await pdf(<PDFGenerator data={data} />).toBlob();
  
    // Convierte el Blob a ArrayBuffer
    const arrayBuffer = await pdfBlob.arrayBuffer();
  
    // Carga el PDF existente
    const pdfDoc = await PDFDocument.load(arrayBuffer);
  
    // Incrusta la imagen en el PDF
    const image = await pdfDoc.embedPng(imageBytes);
  
    // Obtiene la primera página del PDF
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
  
    // Calcula las coordenadas para centrar la imagen
    const { width, height } = firstPage.getSize();
    const scale = 0.5;  // Ajusta este valor para cambiar el tamaño de la imagen
    const imageWidth = width * scale;
    const imageHeight = (image.height / image.width) * imageWidth;
    const x = (width - imageWidth) / 2;
    const y = (height - imageHeight) / 2;
  
    // Dibuja la imagen en la página
    const opacity = 0.1;  // Ajusta este valor para cambiar la opacidad de la imagen
    firstPage.drawImage(image, {
      x: x,
      y: y,
      width: imageWidth,
      height: imageHeight,
      opacity: opacity,
    });
  
    // Guarda el PDF modificado
    const pdfBytes = await pdfDoc.save();
  
    // Descarga el PDF modificado
    const downloadBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(downloadBlob, 'Distribución de porciones.pdf');
  }
  
  export default PDFWatermarkAdder;
  