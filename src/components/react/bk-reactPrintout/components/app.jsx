import React from 'react';

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from 'react-pdf';

const MyDocument = (props) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

class ReactPdf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MyDocument />
      </div>
    )
  }
}

export default ReactPdf;
