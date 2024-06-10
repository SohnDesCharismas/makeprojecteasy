import React, { useState, useEffect } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component as a hook
export const useCreateDocument = (sections: any) => {
  const [document, setDocument] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    const newDocument = (
      <Document>
        <Page size="A4" style={styles.page}>
          {sections.map((section: any, index: any) => (
            <View key={index} style={styles.section}>
              <Text>{section}</Text>
            </View>
          ))}
        </Page>
      </Document>
    );
    setDocument(newDocument);
  }, [sections]);

  return document;
};
