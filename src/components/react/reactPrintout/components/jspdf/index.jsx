import React from 'react';

import JsPDF from 'jspdf';
import GHtml from './gHtml';
import PdfFromHtml from './../../utils/PdfFromHtml';

const docs = new JsPDF();

class ReactJspdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: 'empty',
    };
    // docs.output('dataurlnewwindow');
  }

  render() {
    return (
      <div>
        <PdfFromHtml />
      </div>
    );
  }

}

export default ReactJspdf;
