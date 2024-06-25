import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Crea estilos
const styles = StyleSheet.create({
  // ... tus estilos existentes aquí ...

  xMark: {
    position: 'absolute',
    fontSize: 24,
    color: '#000',
  },
});

const xMarks = [
  { key: 'mark1', top: '10%', left: '20%' },
  { key: 'mark2', top: '30%', left: '40%' },
  // ... puedes agregar más marcas aquí ...
];


// Crea un componente de documento
const PDFExamRequestGenerator = ({ data }) => {

  const renderXMarks = () => {
    return xMarks.map((mark) => (
      <Text key={mark.key} style={{...styles.xMark, top: mark.top, left: mark.left}}>X</Text>
    ));
  };

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation='portrait'>
        <View style={styles.section}>
          {/* ... el contenido de tu página existente aquí ... */}

          {/* Renderiza las X en las posiciones correctas */}
          {renderXMarks()}
        </View>
      </Page>
    </Document>
  );
};

export default PDFExamRequestGenerator;
