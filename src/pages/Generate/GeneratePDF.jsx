import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const GeneratePDF = ({ name, username, userFunds, stockData, currentDate }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Estado de Cuenta</Text>
        </View>
        <View>
          <Text style={styles.text}>Nombre: Ana Alfaro</Text>
          <Text style={styles.text}>Usuario: anamlfr </Text>
          <Text style={styles.text}>Fondos Disponibles: $2800</Text>
        </View>
        <View>
          <Text style={styles.title}>Detalles de Acciones</Text>
          {stockData.map((stock) => (
            <Text key={stock.id} style={styles.text}>
              {stock.name_stock}: Cantidad: {stock.quantity}, Valor: {stock.monetaryValue}
            </Text>
          ))}
        </View>
        <View>
        <Text style={styles.title}>Detalle de la Solicitud</Text>
        </View>
        <View>
        <Text style={styles.text}>Fecha de Solicitud: {currentDate}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default GeneratePDF;
