import { Page, Text, View, Document, StyleSheet, Svg } from '@react-pdf/renderer';

// Crea estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    color: 'black',
    marginBottom: '50px',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  tableColHeaderFoodGroup: {
    width: '32%', 
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomColor: '#000',
    backgroundColor: '#5a338d',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableColHeaderTotalPortions: {
    width: '12%', 
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomColor: '#000',
    backgroundColor: '#5a338d',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableColHeader: {
    width: '8%', 
    borderStyle: 'solid',
    borderColor: '#000',
    borderBottomColor: '#000',
    backgroundColor: '#5a338d',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableColFoodGroup: {
    width: '32%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableColTotalPortions: {
    width: '12%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableCol: {
    width: '8%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
  },
  tableCellPatientData: {
    fontSize: 12,
    color: 'black',
    marginBottom: '8px',
  },
  tableCellPatientID: {
    fontSize: 8,
    color: 'black',
    textAlign: 'right',
  },
  tableCellHeader: {
    margin: 'auto',
    fontSize: 12,
    color: 'white',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10
  },
  tableContainer: {
    height: '100%',
  },
  topMargin: {
    marginTop: '20px',
  },
  bottomMargin: {
    flex: 1,
  },
});



// Crea un componente de documento
const PDFGenerator = ({ data }) => {

  const calculateTotalPortions = (portionNames) => {
    return portionNames.reduce((total, portionName) => total + Number(data.tableData[portionName] || 0), 0);
  };

  console.log('data: ', data)

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.section}>
          <Text style={ styles.title}>Distribución de porciones por tiempo de comida</Text>
          <Text style={ styles.tableCellPatientData}>{`Paciente: ${data.patientName}`}</Text>
          <Text style={ styles.tableCellPatientData}>{`Rut: ${data.rut}`}</Text>
          <View style={styles.topMargin} />
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeaderFoodGroup}>
                <Text style={styles.tableCellHeader}>Grupo de alimentos</Text>
              </View>
              <View style={styles.tableColHeaderTotalPortions}>
                <Text style={styles.tableCellHeader}>Total Porciones</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Desayuno</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Colación</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Almuerzo</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Colación</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Once</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Cena</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Colación</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup}>
                <Text style={styles.tableCell}>Cereales, papas y legumbres frescas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                'cerealBreakfastPortion',
                'cerealFirstSnackPortion',
                'cerealLunchPortion',
                'cerealSecondSnackPortion',
                'cerealOncePortion',
                'cerealDinnerPortion',
                'cerealThirdSnackPortion'
                ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.cerealThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Verduras: En general</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                  'generalVeggieBreakfastPortion',
                  'generalVeggieFirstSnackPortion',
                  'generalVeggieLunchPortion',
                  'generalVeggieSecondSnackPortion',
                  'generalVeggieOncePortion',
                  'generalVeggieDinnerPortion',
                  'generalVeggieThirdSnackPortion'
                ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.generalVeggieThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Verduras: Libre consumo</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                  'freeVeggieBreakfastPortion',
                  'freeVeggieFirstSnackPortion',
                  'freeVeggieLunchPortion',
                  'freeVeggieSecondSnackPortion',
                  'freeVeggieOncePortion',
                  'freeVeggieDinnerPortion',
                  'freeVeggieThirdSnackPortion'
                ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.freeVeggieThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Frutas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'fruitBreakfastPortion',
                                          'fruitFirstSnackPortion',
                                          'fruitLunchPortion',
                                          'fruitSecondSnackPortion',
                                          'fruitOncePortion',
                                          'fruitDinnerPortion',
                                          'fruitThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.fruitThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Carnes, huevos, y legumbres secas: Alta en grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'highFatMeatBreakfastPortion',
                                          'highFatMeatFirstSnackPortion',
                                          'highFatMeatLunchPortion',
                                          'highFatMeatSecondSnackPortion',
                                          'highFatMeatOncePortion',
                                          'highFatMeatDinnerPortion',
                                          'highFatMeatThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatMeatThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Carnes, huevos, y legumbres secas: Baja en grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'lowFatMeatBreakfastPortion',
                                          'lowFatMeatFirstSnackPortion',
                                          'lowFatMeatLunchPortion',
                                          'lowFatMeatSecondSnackPortion',
                                          'lowFatMeatOncePortion',
                                          'lowFatMeatDinnerPortion',
                                          'lowFatMeatThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatMeatThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Carnes, huevos, y legumbres secas: Leguminosas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'legumeMeatBreakfastPortion',
                                          'legumeMeatFirstSnackPortion',
                                          'legumeMeatLunchPortion',
                                          'legumeMeatSecondSnackPortion',
                                          'legumeMeatOncePortion',
                                          'legumeMeatDinnerPortion',
                                          'legumeMeatThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.legumeMeatThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Lácteos: Altos en grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'highFatDairyBreakfastPortion',
                                          'highFatDairyFirstSnackPortion',
                                          'highFatDairyLunchPortion',
                                          'highFatDairySecondSnackPortion',
                                          'highFatDairyOncePortion',
                                          'highFatDairyDinnerPortion',
                                          'highFatDairyThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairySecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.highFatDairyThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Lácteos: Medios en grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'midFatDairyBreakfastPortion',
                                          'midFatDairyFirstSnackPortion',
                                          'midFatDairyLunchPortion',
                                          'midFatDairySecondSnackPortion',
                                          'midFatDairyOncePortion',
                                          'midFatDairyDinnerPortion',
                                          'midFatDairyThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairySecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.midFatDairyThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Lácteos: Bajos en grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'lowFatDairyBreakfastPortion',
                                          'lowFatDairyFirstSnackPortion',
                                          'lowFatDairyLunchPortion',
                                          'lowFatDairySecondSnackPortion',
                                          'lowFatDairyOncePortion',
                                          'lowFatDairyDinnerPortion',
                                          'lowFatDairyThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairySecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lowFatDairyThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Aceites y grasas</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'oilAndFatBreakfastPortion',
                                          'oilAndFatFirstSnackPortion',
                                          'oilAndFatLunchPortion',
                                          'oilAndFatSecondSnackPortion',
                                          'oilAndFatOncePortion',
                                          'oilAndFatDinnerPortion',
                                          'oilAndFatThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.oilAndFatThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Alimentos altos en lípidos</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'lipidRichFoodBreakfastPortion',
                                          'lipidRichFoodFirstSnackPortion',
                                          'lipidRichFoodLunchPortion',
                                          'lipidRichFoodSecondSnackPortion',
                                          'lipidRichFoodOncePortion',
                                          'lipidRichFoodDinnerPortion',
                                          'lipidRichFoodThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.lipidRichFoodThirdSnackPortion || "0"}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColFoodGroup} wrap={false}>
                <Text style={styles.tableCell}>Azúcares y otros</Text>
              </View>
              <View style={styles.tableColTotalPortions}>
                <Text style={styles.tableCell}>{calculateTotalPortions([
                                          'sugarAndOthersBreakfastPortion',
                                          'sugarAndOthersFirstSnackPortion',
                                          'sugarAndOthersLunchPortion',
                                          'sugarAndOthersSecondSnackPortion',
                                          'sugarAndOthersOncePortion',
                                          'sugarAndOthersDinnerPortion',
                                          'sugarAndOthersThirdSnackPortion'
                                      ])}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersBreakfastPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersFirstSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersLunchPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersSecondSnackPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersOncePortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersDinnerPortion || "0"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tableData.sugarAndOthersThirdSnackPortion || "0"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomMargin} />
          <Text style={ styles.tableCellPatientID}>{`ID: ${data.patientID}`}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
