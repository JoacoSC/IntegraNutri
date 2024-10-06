import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComparisonComponent, ModalWrapper, Tabs, TabTrigger } from './components';

import { Image, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
import { Bar, Doughnut, Line, Scatter } from 'react-chartjs-2';
import { format } from 'date-fns';
import { AutoResizeTextarea } from '../common';
import { useForm } from '../hooks';

import Nutri_logo_vertical_lg_png from '../../assets/imgs/Nutri_logo_vertical_lg_png.png';
import MetropolisMedium from '/assets/fonts/Metropolis/Metropolis-Medium.ttf';
import SomatocartaImage from '../../assets/imgs/patient/somatocarta.svg'

async function fetchAsset(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching asset: ${response.statusText}`);
    }
    return new Uint8Array(await response.arrayBuffer());
  }

const styles = StyleSheet.create({
    page: {
      padding: 40, // Padding alrededor de la página
    },
    section: { margin: 10, padding: 10, fontSize: 10, width: "80%", marginLeft: "auto", marginRight: "auto" }, // Ajusta el fontSize
    topOffset: { marginTop: 80 },
    header: { fontSize: 16, marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }, // FontSize más pequeño
    subHeader: { fontSize: 14, marginTop: 10, marginBottom: 15, fontWeight: 'bold' },
    text: { marginBottom: 5, fontSize: 10, width: '50%' }, // Asegúrate de que el texto sea más pequeño
    table: { display: "table", width: "100%", marginBottom: 10 },
    tableRow: { display: "flex", flexDirection: "row", marginBottom: 5, justifyContent: "space-between" },
    tableCell: { padding: 5, borderBottom: '1px solid black', flexGrow: 1, textAlign: 'center', fontSize: 10, width: '10%' }, // Tamaño de la celda reducido
    tableHeader: { fontWeight: 'bold', fontSize: 10, textAlign: 'center', width: '20%' }, // Tamaño del header de la tabla
    inlineGroup: { display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10, width: "100%" },
    somatocarta: { width: '360px', marginLeft: 'auto', marginRight: 'auto' },
    perimetros: { width: '180px', marginLeft: 'auto', marginRight: 'auto' },
    pliegues: { width: '180px', marginLeft: 'auto', marginRight: 'auto' },
    composicionCorporalKg: { width: '180px', marginLeft: 'auto', marginRight: 'auto' },
    composicionCorporalPercent: { width: '180px', marginLeft: 'auto', marginRight: 'auto' },
    pliegues: { width: '180px', marginLeft: 'auto', marginRight: 'auto' },
    flex: { display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40 },
  });
  
  const PDFReport = ({ data, somatocartaImage, perimetrosImage, plieguesImage, bodyCompositionKgImage, bodyCompositionPercentImage }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Datos del paciente */}
        <Text style={[styles.header, styles.topOffset]}>Informe Antropométrico</Text>
        <Text style={styles.subHeader}>Datos del Paciente</Text>
        <View style={styles.inlineGroup}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Nombre: </Text>{data.patientName}</Text>
        </View>
        <View style={styles.inlineGroup}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Email: </Text>{data.email}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Teléfono: </Text>{data.phone}</Text>
        </View>
        <View style={styles.inlineGroup}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Fecha de Nacimiento: </Text>{new Date(data.unixBirthday).toLocaleDateString()}</Text>
        </View>
        <View style={styles.inlineGroup}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Edad: </Text>{data.ageText}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Sexo Biológico: </Text>{data.biologicalSex}</Text>
        </View>
        <View style={styles.inlineGroup}>
            <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Peso: </Text>{data.weightLastEntry} Kg</Text>
            <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Talla: </Text>{data.statureLastEntry} Cm</Text>
        </View>
        <View style={styles.inlineGroup}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>IMC: </Text>{data.imcLastEntry}</Text>
        </View>
        
        {/* Medidas antropométricas */}
        <Text style={styles.subHeader}>Medidas Antropométricas</Text>
        
        {/* Somatotipo */}
        <Text style={styles.subHeader}>Somatotipo</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Endomorfo</Text>
            <Text style={styles.tableCell}>{data.Endomorfia}</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Mesomorfo</Text>
            <Text style={styles.tableCell}>{data.Mesomorfia}</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Ectomorfo</Text>
            <Text style={styles.tableCell}>{data.Ectomorfia}</Text>
          </View>
        </View>

        {/* Gráfico somatocarta */}
        <Image src={somatocartaImage} style={styles.somatocarta} />
  
        {/* Pliegues */}
        <Text style={[styles.subHeader, styles.topOffset]}>Pliegues (mm)</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Tricipital</Text><Text style={styles.tableCell}>{data.InputPliegueTricipital}</Text>
            <Text style={styles.tableCell}>Subescapular</Text><Text style={styles.tableCell}>{data.InputPliegueSubescapular}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Cresta Ilíaca</Text><Text style={styles.tableCell}>{data.InputPliegueCrestailiaca}</Text>
            <Text style={styles.tableCell}>Bicipital</Text><Text style={styles.tableCell}>{data.InputPliegueBicipital}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Supraespinal</Text><Text style={styles.tableCell}>{data.InputPliegueSupraespinal}</Text>
            <Text style={styles.tableCell}>Abdominal</Text><Text style={styles.tableCell}>{data.InputPliegueAbdominal}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Muslo</Text><Text style={styles.tableCell}>{data.InputPliegueMuslo}</Text>
            <Text style={styles.tableCell}>Pierna</Text><Text style={styles.tableCell}>{data.InputPlieguePierna}</Text>
          </View>
        </View>
  
        {/* Perímetros */}
        <Text style={styles.subHeader}>Perímetros (cm)</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Brazo Relajado</Text><Text style={styles.tableCell}>{data.InputPerimetroBrazoRelajado}</Text>
            <Text style={styles.tableCell}>Brazo Contraído</Text><Text style={styles.tableCell}>{data.InputPerimetroBrazoContraido}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Pierna</Text><Text style={styles.tableCell}>{data.InputPerimetroPierna}</Text>
            <Text style={styles.tableCell}>Muslo</Text><Text style={styles.tableCell}>{data.InputPerimetroMuslo}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Cintura</Text><Text style={styles.tableCell}>{data.InputPerimetroCintura}</Text>
            <Text style={styles.tableCell}>Cadera</Text><Text style={styles.tableCell}>{data.InputPerimetroCadera}</Text>
          </View>
        </View>
  
        {/* Diámetros */}
        <Text style={styles.subHeader}>Diámetros (cm)</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Fémur</Text><Text style={styles.tableCell}>{data.InputDiametroFemur}</Text>
            <Text style={styles.tableCell}>Biestiloideo</Text><Text style={styles.tableCell}>{data.InputDiametroMuneca}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Húmero</Text><Text style={styles.tableCell}>{data.InputDiametroHumero}</Text>
          </View>
        </View>

        {/* Gráficos perímetros y diámetros */}
        <View style={styles.flex}>
            <Image src={plieguesImage} style={styles.pliegues} />
            <Image src={perimetrosImage} style={styles.perimetros} />
        </View>
  
        {/* Composición Corporal */}
        <Text style={[styles.subHeader, styles.topOffset]}>Composición Corporal (Kg)</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Masa Grasa (Carter)</Text><Text style={styles.tableCell}>{data.MGCarterKG}</Text>
            <Text style={styles.tableCell}>Masa Muscular (Lee 2000)</Text><Text style={styles.tableCell}>{data.MMLeeKG}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Masa Residual</Text><Text style={styles.tableCell}>{data.MRKG}</Text>
            <Text style={styles.tableCell}>Masa Ósea</Text><Text style={styles.tableCell}>{data.MOKG}</Text>
          </View>
        </View>
        {/* Gráficos composicion corporal Kg */}
        {/* <View style={styles.flex}>
            <Image src={bodyCompositionKgImage} style={styles.composicionCorporalKg} />
        </View> */}
        
        <Text style={styles.subHeader}>Composición Corporal (%)</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Masa Grasa (Faulkner)</Text><Text style={styles.tableCell}>{data.MGFaulknerPercent}%</Text>
            <Text style={styles.tableCell}>Masa Muscular (Lee 2000)</Text><Text style={styles.tableCell}>{data.MMLeePercent}%</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Masa Residual (v2)</Text><Text style={styles.tableCell}>{data.MRV2Percent}%</Text>
            <Text style={styles.tableCell}>Masa Ósea</Text><Text style={styles.tableCell}>{data.MOPercent}%</Text>
          </View>
        </View>
        
        <View style={styles.flex}>
            <Image src={bodyCompositionKgImage} style={styles.pliegues} />
            <Image src={bodyCompositionPercentImage} style={styles.perimetros} />
        </View>
  
        {/* Observaciones del Nutricionista */}
        <Text style={styles.subHeader}>Observaciones</Text>
        <Text style={styles.text}>{data.observations}</Text>
        
      </Page>
    </Document>
  );

  const PDFReportWithWatermark = async (data, somatocartaImage, perimetrosImage, plieguesImage, bodyCompositionKgImage, bodyCompositionPercentImage) => {
    const imageBytes = await fetchAsset(Nutri_logo_vertical_lg_png); // Cargar la imagen de fondo
  
    const pdfBlob = await pdf(<PDFReport data={data} somatocartaImage={somatocartaImage} perimetrosImage={perimetrosImage} plieguesImage={plieguesImage} bodyCompositionKgImage={bodyCompositionKgImage} bodyCompositionPercentImage={bodyCompositionPercentImage} />).toBlob();
    const arrayBuffer = await pdfBlob.arrayBuffer();
  
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    pdfDoc.registerFontkit(fontkit);

    // Asume que `fontPath` es la ruta a tu fuente personalizada en el directorio de tu proyecto
    const fontPath = MetropolisMedium;

    // Usa fetch para obtener los datos de la fuente
    const response = await fetch(fontPath);

    // Convierte la respuesta en un ArrayBuffer
    const fontBytes = await response.arrayBuffer();

    const font = await pdfDoc.embedFont(fontBytes);

  
    const image = await pdfDoc.embedPng(imageBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
  
    // Ajusta estos valores para la marca de agua de fondo
    const scaleWatermark = 0.8;
    const opacityWatermark = 0.1;
  
    // Ajusta estos valores para el logo en la esquina superior izquierda
    const logoScale = 0.2; // Cambia esto según el tamaño que quieras
    const logoOpacity = 1; // Opacidad completa

    // Aquí puedes ajustar las coordenadas y el tamaño del texto según sea necesario
    const nutritionistX = width * 0.7;
    const nutritionistY = height * 0.95;
    const nutritionistSize = 11;

    const nutritionistNameX = width * 0.7;
    let nutritionistNameY = height * 0.935;
    const nutritionistNameSize = 11;
    const nameLineHeight = nutritionistNameSize * 1.2; // Ajusta según sea necesario
    const nameMaxWidth = width * 0.32; // Ancho máximo permitido para el nombre

    const nutritionistContactX = width * 0.7;
    let nutritionistContactY = height * 0.92;
    const nutritionistContactSize = 11;
    const contactLineHeight = nutritionistContactSize * 1.2; // Ajusta según sea necesario
    const contactMaxWidth = width * 0.32; // Ancho máximo permitido para el contacto

    // Coordenadas y tamaño para el Rut del nutricionista
    const nutritionistRutX = width * 0.7;
    let nutritionistRutY = nutritionistNameY - nameLineHeight; // Posición debajo del nombre
    const nutritionistRutSize = 11;
    const rutLineHeight = nutritionistRutSize * 1.2; // Ajusta según sea necesario
    const rutMaxWidth = width * 0.3; // Ancho máximo permitido para el Rut
    
  
    pages.forEach(page => {
        const { width, height } = page.getSize();

        // Cálculos para la marca de agua en el centro
        const imageWidthWatermark = width * scaleWatermark;
        const imageHeightWatermark = (image.height / image.width) * imageWidthWatermark;
        const xWatermark = (width - imageWidthWatermark) / 2;
        const yWatermark = (height - imageHeightWatermark) / 2;

        // Dibuja la imagen de marca de agua en el centro con opacidad reducida
        page.drawImage(image, {
            x: xWatermark,
            y: yWatermark,
            width: imageWidthWatermark,
            height: imageHeightWatermark,
            opacity: opacityWatermark,
        });

        // Cálculos para el logo en la esquina superior izquierda
        const imageWidthLogo = width * logoScale;
        const imageHeightLogo = (image.height / image.width) * imageWidthLogo;
        const xLogo = 40;  // Margen desde la izquierda (puedes ajustarlo)
        const yLogo = height - imageHeightLogo - 20;  // Margen desde arriba (ajusta según sea necesario)

        // Dibuja el logo en la esquina superior izquierda con opacidad completa
        page.drawImage(image, {
            x: xLogo,
            y: yLogo,
            width: imageWidthLogo,
            height: imageHeightLogo,
            opacity: logoOpacity,
        });
    });

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
    if (typeof data.nutritionistData.name === 'string') {
    nutritionistNameY = drawTextWithLineBreaks(data.nutritionistData.name, nutritionistNameX, nutritionistNameY, nutritionistNameSize, nameMaxWidth, nameLineHeight);

    // Ajusta la posición Y para el Rut del nutricionista
    nutritionistRutY = nutritionistNameY - nameLineHeight;
    }

    // Dibuja el Rut del nutricionista debajo del nombre
    if (typeof data.nutritionistData.rut === 'string') {
    nutritionistRutY = drawTextWithLineBreaks(data.nutritionistData.rut, nutritionistRutX, nutritionistRutY, nutritionistRutSize, rutMaxWidth, rutLineHeight);
    }

    // Dibuja el contacto del nutricionista con manejo de saltos de línea
    if (typeof data.nutritionistData.email === 'string') {
    nutritionistContactY = nutritionistRutY - rutLineHeight; // Ajusta la posición basado en el Rut
    nutritionistContactY = drawTextWithLineBreaks(data.nutritionistData.email, nutritionistContactX, nutritionistContactY, nutritionistContactSize, contactMaxWidth, contactLineHeight);
    }

    // Dibuja el resto de la información (como en el ejemplo original)
    firstPage.drawText(data.nutritionistData.nutritionist, {
        x: nutritionistX,
        y: nutritionistY,
        size: nutritionistSize,
        font,
        color: rgb(0, 0, 0),
    });
  
    const pdfBytes = await pdfDoc.save();
    const downloadBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(downloadBlob, 'Informe_Antropometrico.pdf');
};

export const ModalAnthropometricReport = ({ patientObject, commonProps }) => {

    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();

    const somatocartaRef = useRef(null);
    const perimetrosRef = useRef(null);
    const plieguesRef = useRef(null);
    const bodyCompositionKgRef = useRef(null);
    const bodyCompositionPercentRef = useRef(null);
    const bodyCompositionV2Ref = useRef(null);
    const textareaRef = useRef(null);

    const { observations, onInputChange } = useForm();

    const { email: nutritionistEmail } = useSelector((state) => state.auth);
    const { displayName: nutritionistName, phone: nutritionistPhone, rut: nutritionistRut } = useSelector((state) => state.userInfo);

    const onSubmit = async ( event ) => {
        event.preventDefault();

        const somatocartaImage = await combineSomatocartaImages();
        const perimetrosImage = await extractPerimetrosImage();
        const plieguesImage = await extractPlieguesImage();
        const bodyCompositionKgImage = await extractBodyCompositionKgImage();
        const bodyCompositionPercentImage = await extractBodyCompositionPercentImage();

        const data = {
            observations, patientName, email, phone, unixBirthday, ageText, weightLastEntry, statureLastEntry, imcLastEntry, biologicalSex, Endomorfia, Mesomorfia, Ectomorfia, MGCarterKG, MGFaulknerKG, MMLeeKG, MRKG, MRV2KG, MOKG, MGCarterPercent, MGFaulknerPercent, MMLeePercent, MRPercent, MRV2Percent, MOPercent, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueCrestailiaca, InputPliegueBicipital, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna, InputPerimetroBrazoRelajado, InputPerimetroBrazoContraido, InputPerimetroPierna, InputPerimetroMuslo, InputPerimetroCintura, InputPerimetroCadera, InputDiametroFemur, InputDiametroMuneca, InputDiametroHumero, SomatocartaX, SomatocartaY, Peso, Talla,
            nutritionistData: {
                nutritionist: 'Nutricionista',
                name: nutritionistName,
                phone: nutritionistPhone,
                email: nutritionistEmail,
                rut: nutritionistRut.formatted,
            }
        }

        await PDFReportWithWatermark(data, somatocartaImage, perimetrosImage, plieguesImage, bodyCompositionKgImage, bodyCompositionPercentImage);

        setOpenModal(false);

    }

    const combineSomatocartaImages = async () => {

        if (typeof window !== 'undefined') {
            const somatocartaImage = new window.Image();
            somatocartaImage.src = SomatocartaImage;
            await somatocartaImage.decode();
    
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            // Ajusta el tamaño del canvas
            canvas.width = 600;
            canvas.height = 500;
    
            // Rellena el fondo del canvas con un color (por ejemplo, blanco)
            ctx.fillStyle = '#FFFFFF'; // Color blanco
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Dibuja la imagen de la somatocarta en el canvas
            const somatocartaWidth = 474;
            const somatocartaHeight = 455;
            const somatocartaX = 77;
            const somatocartaY = 50;
            ctx.drawImage(somatocartaImage, somatocartaX, somatocartaY, somatocartaWidth, somatocartaHeight);
    
            // Dibuja el gráfico de Chart.js en el canvas
            const chartCanvas = somatocartaRef.current?.canvas;
            const chartWidth = 600;
            const chartHeight = 500;
            const chartX = 0;
            const chartY = 0;
            ctx.drawImage(chartCanvas, chartX, chartY, chartWidth, chartHeight);
    
            // Devuelve el canvas como una imagen en base64
            return canvas.toDataURL('image/png');
        } else {
            throw new Error("El entorno no es el navegador.");
        }
    }
    const extractPerimetrosImage = async () => {

        if (typeof window !== 'undefined') {
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            // Ajusta el tamaño del canvas
            canvas.width = 300;
            canvas.height = 300;
    
            // Rellena el fondo del canvas con un color (por ejemplo, blanco)
            ctx.fillStyle = '#FFFFFF'; // Color blanco
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Dibuja el gráfico de Chart.js en el canvas
            const chartCanvas = perimetrosRef.current?.canvas;
            const chartWidth = 300;
            const chartHeight = 300;
            const chartX = 0;
            const chartY = 0;
            ctx.drawImage(chartCanvas, chartX, chartY, chartWidth, chartHeight);
    
            // Devuelve el canvas como una imagen en base64
            return canvas.toDataURL('image/png');
        } else {
            throw new Error("El entorno no es el navegador.");
        }
    }
    const extractPlieguesImage = async () => {

        if (typeof window !== 'undefined') {
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            // Ajusta el tamaño del canvas
            canvas.width = 300;
            canvas.height = 300;
    
            // Rellena el fondo del canvas con un color (por ejemplo, blanco)
            ctx.fillStyle = '#FFFFFF'; // Color blanco
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Dibuja el gráfico de Chart.js en el canvas
            const chartCanvas = plieguesRef.current?.canvas;
            const chartWidth = 300;
            const chartHeight = 300;
            const chartX = 0;
            const chartY = 0;
            ctx.drawImage(chartCanvas, chartX, chartY, chartWidth, chartHeight);
    
            // Devuelve el canvas como una imagen en base64
            return canvas.toDataURL('image/png');
        } else {
            throw new Error("El entorno no es el navegador.");
        }
    }

    const extractBodyCompositionKgImage = async () => {

        if (typeof window !== 'undefined') {
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            // Ajusta el tamaño del canvas
            canvas.width = 300;
            canvas.height = 300;
    
            // Rellena el fondo del canvas con un color (por ejemplo, blanco)
            ctx.fillStyle = '#FFFFFF'; // Color blanco
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Dibuja el gráfico de Chart.js en el canvas
            const chartCanvas = bodyCompositionKgRef.current?.canvas;
            const chartWidth = 300;
            const chartHeight = 300;
            const chartX = 0;
            const chartY = 0;
            ctx.drawImage(chartCanvas, chartX, chartY, chartWidth, chartHeight);
    
            // Devuelve el canvas como una imagen en base64
            return canvas.toDataURL('image/png');
        } else {
            throw new Error("El entorno no es el navegador.");
        }
    }

    const extractBodyCompositionPercentImage = async () => {

        if (typeof window !== 'undefined') {
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
    
            // Ajusta el tamaño del canvas
            canvas.width = 300;
            canvas.height = 300;
    
            // Rellena el fondo del canvas con un color (por ejemplo, blanco)
            ctx.fillStyle = '#FFFFFF'; // Color blanco
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    
            // Dibuja el gráfico de Chart.js en el canvas
            const chartCanvas = bodyCompositionPercentRef.current?.canvas;
            const chartWidth = 300;
            const chartHeight = 300;
            const chartX = 0;
            const chartY = 0;
            ctx.drawImage(chartCanvas, chartX, chartY, chartWidth, chartHeight);
    
            // Devuelve el canvas como una imagen en base64
            return canvas.toDataURL('image/png');
        } else {
            throw new Error("El entorno no es el navegador.");
        }
    }
    

    const {
        anthropometryHistory,
        biologicalSex,
      } = commonProps

    const {
        patientName,
        email,
        phone,
        unixBirthday,
        ageText,
        weight,
        stature,
        imc,
      } = patientObject

    const weightLastEntry = weight[weight.length - 1].A;
    const statureLastEntry = stature[stature.length - 1].A;
    const imcLastEntry = imc[imc.length - 1].A.toFixed(2);
    const anthropometryLastIndex = anthropometryHistory.length - 1;

    const { Endomorfia, Mesomorfia, Ectomorfia, MGCarterKG, MGFaulknerKG, MMLeeKG, MRKG, MRV2KG, MOKG, MGCarterPercent, MGFaulknerPercent, MMLeePercent, MRPercent, MRV2Percent, MOPercent, InputPliegueTricipital, InputPliegueSubescapular, InputPliegueCrestailiaca, InputPliegueBicipital, InputPliegueSupraespinal, InputPliegueAbdominal, InputPliegueMuslo, InputPlieguePierna, InputPerimetroBrazoRelajado, InputPerimetroBrazoContraido, InputPerimetroPierna, InputPerimetroMuslo, InputPerimetroCintura, InputPerimetroCadera, InputDiametroFemur, InputDiametroMuneca, InputDiametroHumero, SomatocartaX, SomatocartaY, Peso, Talla } = anthropometryHistory[anthropometryLastIndex];

    const skinFoldsArray = [
        { label: 'Tricipital', value: InputPliegueTricipital },
        { label: 'Subescapular', value: InputPliegueSubescapular },
        { label: 'Crestailiaca', value: InputPliegueCrestailiaca },
        { label: 'Bicipital', value: InputPliegueBicipital },
        { label: 'Supraespinal', value: InputPliegueSupraespinal },
        { label: 'Abdominal', value: InputPliegueAbdominal },
        { label: 'Muslo', value: InputPliegueMuslo },
        { label: 'Pierna', value: InputPlieguePierna },
    ]

    const perimetersArray = [
        { label: 'Brazo Relajado', value: InputPerimetroBrazoRelajado },
        { label: 'Brazo Contraído', value: InputPerimetroBrazoContraido },
        { label: 'Pierna', value: InputPerimetroPierna },
        { label: 'Muslo', value: InputPerimetroMuslo },
        { label: 'Cintura', value: InputPerimetroCintura },
        { label: 'Cadera', value: InputPerimetroCadera },
    ]

    const getMaxValue = (array) => Math.max(...array.map(item => item.value));
    const maxSkinFoldsValue = getMaxValue(skinFoldsArray);
    const maxPerimetersValue = getMaxValue(perimetersArray);

    const skinFoldsYMax = Math.ceil((maxSkinFoldsValue + 20) / 20) * 20;
    const perimetersYMax = Math.ceil((maxPerimetersValue + 20) / 20) * 20;

    const [firstRecord, setFirstRecord] = useState(null);
    const [secondRecord, setSecondRecord] = useState(null);

    const handleSelectionChange = (selector, record) => {
        if (selector === 'first') {
            setFirstRecord(record);
        } else {
            setSecondRecord(record);
        }
    };

    const [somatocartaOptions, setSomatocartaOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta la leyenda
            },
            title: {
                display: true,
                text: 'Somatocarta',
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: -9,
                max: 9,
                ticks: {
                  stepSize: 1,
                },
            },
            y: {
                type: 'linear',
                position: 'left',
                min: -10,
                max: 16,
                ticks: {
                  stepSize: 2,
                },
            },
        },
    });
    const [somatocartaData, setSomatocartaData] = useState({
        datasets: [{
            label: 'Somatocarta:    ',
            data: [],
            borderColor: '#FF0000',
            backgroundColor: '#FF0000',
        }]
    });

    const [bodyCompositionKGOptions, setBodyCompositionKGOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false, // Oculta la leyenda
          },
          title: {
            display: true,
            text: 'Composición corporal (Kg)',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} kg`,
            },
          },
        },
        scales: {
          x: {
            type: 'category',
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
          },
          y: {
            type: 'linear',
            min: 0,
            max: 40,
            ticks: {
              stepSize: 5,
            },
          },
        },
    });
    
    const [bodyCompositionKGData, setBodyCompositionKGData] = useState({
        labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
        datasets: [
            {
            label: 'Composición corporal',
            data: [MGCarterKG, MMLeeKG, MRKG, MOKG],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            },
        ],
    });

    const [bodyCompositionPercentOptions, setBodyCompositionPercentOptions] = useState({
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
        legend: {
            display: true, // Mostrar la leyenda
            position: 'top',
        },
        title: {
            display: true,
            text: 'Composición corporal (%)',
        },
        tooltip: {
            callbacks: {
            label: (context) => `${context.raw}%`,
            },
        },
        },
    });

    const [skinFoldsData, setSkinFoldsData] = useState({
        labels: "Valor: ",
        datasets: [
            {
                label: skinFoldsArray.map( (data) => data.value ),
                data: skinFoldsArray.map( (data) => data.value ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
        ]
    });

    const [skinFoldsDataOptions, setSkinFoldsDataOptions] = useState({
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Pliegues',
            },
        },
        scales: {
            y: {
                min: 0,
                max: skinFoldsYMax,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    });
    
    const [perimetersData, setPerimetersData] = useState({
        labels: "Valor: ",
        datasets: [
            {
                label: perimetersArray.map( (data) => data.value ),
                data: perimetersArray.map( (data) => data.value ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
        ]
    });

    const [perimetersDataOptions, setPerimetersDataOptions] = useState({
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Perímetros',
            },
        },
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        // Limita el número de caracteres por línea
                        const maxLineLength = 10;
                        const label = this.getLabelForValue(value);
                        
                        // Divide el texto en líneas si es muy largo
                        if (label.length > maxLineLength) {
                            const words = label.split(' ');
                            const lines = [];
                            let currentLine = '';
                            
                            words.forEach(word => {
                                if ((currentLine + word).length > maxLineLength) {
                                    lines.push(currentLine);
                                    currentLine = word;
                                } else {
                                    currentLine += (currentLine === '' ? '' : ' ') + word;
                                }
                            });

                            if (currentLine.length > 0) {
                                lines.push(currentLine);
                            }

                            return lines;
                        } else {
                            return label;
                        }
                    },
                    maxRotation: 45,  // Evita que las etiquetas se roten
                    autoSkip: false,  // Evita que se omitan etiquetas
                },
            },
            y: {
                min: 0,
                max: perimetersYMax,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    });
    
    const [bodyCompositionPercentData, setBodyCompositionPercentData] = useState({
        labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
        datasets: [
        {
            label: 'Composición corporal',
            data: [MGCarterPercent, MMLeePercent, MRPercent, MOPercent],
            backgroundColor: [
            'rgba(54, 162, 235, 0.7)', // Azul
            'rgba(255, 159, 64, 0.7)', // Naranja
            'rgba(75, 192, 192, 0.7)', // Gris
            'rgba(255, 205, 86, 0.7)', // Amarillo
            ],
            borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 205, 86, 1)',
            ],
            borderWidth: 1,
        },
        ],
    });

    const updateSomatocartaChart = () => {
        setSomatocartaData({
            datasets: [{
                label: 'Somatocarta: ',
                data: [
                    { x: firstRecord?.SomatocartaX, y: firstRecord?.SomatocartaY },
                ].filter(record => record.x !== undefined && record.y !== undefined),
                borderColor: ['rgba(54, 162, 235, 1)'],
                backgroundColor: ['rgba(54, 162, 235, 1)'],
            }]
        });
    }
    
// rgba(54, 162, 235, 0.7)
// rgba(255, 99, 132, 0.7)
    const updateBodyCompositionKGBarChart = () => {
        setBodyCompositionKGData({
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
            datasets: [
                {
                    label: 'Primera selección',
                    data: [firstRecord?.MGCarterKG, firstRecord?.MMLeeKG, firstRecord?.MRKG, firstRecord?.MOKG],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }
            ],
        });
    }
    
    
    const updateSkinFoldsLineChart = () => {
        setSkinFoldsData({
            labels: skinFoldsArray.map(data => data.label),
            datasets: [
                {
                    label: 'Pliegues (mm)',
                    data: [
                        firstRecord?.InputPliegueTricipital, firstRecord?.InputPliegueSubescapular, firstRecord?.InputPliegueCrestailiaca, 
                        firstRecord?.InputPliegueBicipital, firstRecord?.InputPliegueSupraespinal, firstRecord?.InputPliegueAbdominal, 
                        firstRecord?.InputPliegueMuslo, firstRecord?.InputPlieguePierna
                    ],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    pointRadius: 4,
                }
            ],
        });
    }
    

    const updatePerimetersLineChart = () => {
        setPerimetersData({
            labels: perimetersArray.map(data => data.label),
            datasets: [
                {
                    label: 'Perímetros (cm)',
                    data: [
                        firstRecord?.InputPerimetroBrazoRelajado, firstRecord?.InputPerimetroBrazoContraido, 
                        firstRecord?.InputPerimetroPierna, firstRecord?.InputPerimetroMuslo, 
                        firstRecord?.InputPerimetroCintura, firstRecord?.InputPerimetroCadera
                    ],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    pointRadius: 4,
                }
            ],
        });
    }
    
    
    const updateBodyCompositionPercentDoughnutChart = () => {
        setBodyCompositionPercentData({
            labels: ['MG(Carter)', 'MM(Lee 2000)', 'MR', 'MO'],
            datasets: [
                {
                    label: 'Primera selección',
                    data: [firstRecord?.MGCarterPercent, firstRecord?.MMLeePercent, firstRecord?.MRPercent, firstRecord?.MOPercent],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 205, 86, 0.7)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 205, 86, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        });
    }
    
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 10}px`;
        }
    }, [observations]);

    useEffect(() => {
        updateSomatocartaChart();
    }, [firstRecord]);
    
    useEffect(() => {
        updateBodyCompositionKGBarChart();
    }, [firstRecord]);
    
    useEffect(() => {
        updateBodyCompositionPercentDoughnutChart();
    }, [firstRecord]);
    
    useEffect(() => {
        updateSkinFoldsLineChart();
    }, [firstRecord]);
    
    useEffect(() => {
        updatePerimetersLineChart();
    }, [firstRecord]);    

    return (
        <>
            
            <button onClick={() => setOpenModal(true)} className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={HeartIconWhite} />
                </label>
                <p>
                    Generar informe&nbsp;
                </p>
            </button>

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Informe de mediciones antropométricas"
                footerButtons={[
                    { text: "Generar PDF", onClick: onSubmit, className: "btn-modal-action" },
                ]}
            >

                {/* Componente Tabs */}
                <Tabs>
                    <TabTrigger value="graphs" label="Gráficos">
                        <div className='patient-secondary-card-content flex-column gap-2'>
                            <div hidden={true}>
                                <ComparisonComponent 
                                    anthropometryHistory={anthropometryHistory} 
                                    onSelectionChange={handleSelectionChange} 
                                />

                            </div>
                            <div className='flex-row h-100 mt-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                                <div className="canvas-chart">
                                    <Bar ref={bodyCompositionKgRef} data={bodyCompositionKGData} options={bodyCompositionKGOptions} />
                                </div>
                                <div className="canvas-chart">
                                    <Doughnut ref={bodyCompositionPercentRef} data={bodyCompositionPercentData} options={bodyCompositionPercentOptions} />
                                </div>
                            </div>
                            <div className='flex-row h-100 mb-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                                <div className="canvas-chart">
                                    <Line ref={perimetrosRef} data={perimetersData} options={perimetersDataOptions} />
                                </div>
                                <div className="canvas-chart">
                                    <Line ref={plieguesRef} data={skinFoldsData} options={skinFoldsDataOptions} />
                                </div>
                            </div>
                            <div className='flex-row h-100 mb-1 gap-2 border-2 border-color-gray border-radius-20 p-2'>
                                <div className="canvas-anthropometry-container">
                                    <div className="canvas-anthropometry">
                                        <Scatter ref={somatocartaRef} data={somatocartaData} options={somatocartaOptions} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </TabTrigger>
                    <TabTrigger value="data" label="Datos del Paciente">
                    <div className="modal-body">
                        
                        <div className="section standard-font" style={{ display: 'flex', flexDirection: 'column', background: '#fff', margin: '10px 0', padding: '30px', borderRadius: '20px', gap: '1rem', border: 'solid 2px #ECEDED' }}>
                            <h2 style={{ paddingBottom: '1.5rem' }}>Datos del Paciente</h2>
                            <div className='flex-row'>
                                <div className='flex-row' style={{ gap: '0.5rem' }}><strong>Nombre: </strong>{patientName}</div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Email: </strong>{email}</div>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Teléfono: </strong>{phone}</div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-row' style={{ gap: '0.5rem' }}><strong>Fecha de Nacimiento: </strong>{format(unixBirthday, 'dd/MM/yyyy')}</div>
                            </div>
                            <div style={{borderTop: 'solid 2px #ECEDED'}}></div>
                            <div className='flex-row'>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Edad: </strong>{ageText}</div>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Sexo biológico: </strong>{biologicalSex}</div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Peso: </strong>{weightLastEntry} Kg</div>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Talla: </strong>{statureLastEntry} Cm</div>
                            </div>
                            <div className='flex-row'>
                                <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>IMC: </strong>{imcLastEntry}</div>
                            </div>
                        </div>

                        
                        <div className="section standard-font" style={{ display: 'flex', flexDirection: 'column', background: '#fff', margin: '10px 0', padding: '30px', borderRadius: '20px', gap: '1rem', border: 'solid 2px #ECEDED' }}>
                            <h2 style={{ paddingBottom: '1.5rem' }}>Medidas Antropométricas</h2>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <h3>Somatotipo</h3>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Endomorfo:</strong>{Endomorfia}</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Mesomorfo:</strong>{Mesomorfia}</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Ectomorfo:</strong>{Ectomorfia}</div>
                                </div>
                            </div>
                            <div style={{paddingTop: '0.5rem'}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <h3>Pliegues</h3>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Tricipital:</strong>{InputPliegueTricipital} mm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Subescapular:</strong>{InputPliegueSubescapular} mm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Cresta Ilíaca:</strong>{InputPliegueCrestailiaca} mm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Bicipital:</strong>{InputPliegueBicipital} mm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Supraespinal:</strong>{InputPliegueSupraespinal} mm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Abdominal:</strong>{InputPliegueAbdominal} mm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Muslo:</strong>{InputPliegueMuslo} mm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Pierna:</strong>{InputPlieguePierna} mm</div>
                                </div>
                            </div>
                            <div style={{paddingTop: '0.5rem'}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <h3>Perímetros</h3>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Brazo Relajado:</strong>{InputPerimetroBrazoRelajado} cm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Brazo Contraído:</strong>{InputPerimetroBrazoContraido} cm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Pierna:</strong>{InputPerimetroPierna} cm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Muslo:</strong>{InputPerimetroMuslo} cm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Cintura:</strong>{InputPerimetroCintura} cm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Cadera:</strong>{InputPerimetroCadera} cm</div>
                                </div>
                            </div>
                            <div style={{paddingTop: '0.5rem'}}></div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                                <h3>Diámetros</h3>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Femur:</strong>{InputDiametroFemur} cm</div>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Biestiloideo:</strong>{InputDiametroMuneca} cm</div>
                                </div>
                                <div className='flex-row'>
                                    <div className='flex-row w-50' style={{ gap: '0.5rem' }}><strong>Humero:</strong>{InputDiametroHumero} cm</div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="section standard-font" style={{ background: '#fff', margin: '10px 0', padding: '30px', borderRadius: '20px', border: 'solid 2px #ECEDED' }}>
                            <h2 style={{ paddingBottom: '1.5rem' }}>Composición Corporal</h2>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', textAlign: 'left', borderRadius: '10px', overflow: 'hidden' }}>
                                <thead>
                                <tr>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Parámetro</th>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Valor (kg)</th>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Porcentaje (%)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Grasa (Carter):</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MGCarterKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MGCarterPercent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Muscular (Lee 2000):</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MMLeeKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MMLeePercent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Residual:</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MRKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MRPercent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Ósea:</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MOKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MOPercent}%</td>
                                </tr>
                                </tbody>
                            </table>
                            <div style={{paddingTop: '1rem'}}></div>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', textAlign: 'left', borderRadius: '10px', overflow: 'hidden' }}>
                                <thead>
                                <tr>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Parámetro</th>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Valor (kg)</th>
                                    <th style={{ padding: '10px', border: '2px solid #ECEDED' }}>Porcentaje (%)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Grasa (Faulkner):</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MGFaulknerKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MGFaulknerPercent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Muscular (Lee 2000):</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MMLeeKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MMLeePercent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Residual (versión 2):</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MRV2KG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MRV2Percent}%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}><strong>Masa Ósea:</strong></td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MOKG} kg</td>
                                    <td style={{ padding: '10px', border: '1px solid #ECEDED' }}>{MOPercent}%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    </TabTrigger>
                    <TabTrigger value="diagnosis" label="Diagnóstico">
                        <div className="modal-body">
                            
                            <div className="section standard-font" style={{ display: 'flex', flexDirection: 'column', background: '#fff', margin: '10px 0', padding: '30px', borderRadius: '20px', gap: '1rem', border: 'solid 2px #ECEDED' }}>
                                <h2 style={{ paddingBottom: '1.5rem' }}>Diagnóstico u observaciones</h2>
                                <textarea
                                    className='standard-font' 
                                    name='observations'
                                    ref={textareaRef}
                                    onChange={onInputChange}
                                    placeholder='Observaciones:' 
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        padding: '10px',
                                        border: 'solid 1px black',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                        </div>
                    </TabTrigger>
                </Tabs>
                
            </ModalWrapper>
        </>
    )
}
