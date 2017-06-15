/* Core */
// React
import React from 'react';

/* Semantic */
import { Button } from 'semantic-ui-react';

/* Crow */
import './../../../assets/Crow/crow.css';

class PdfFromHTML extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 'print',
      hidden: true,
    };
  }

  GeneratePdfFromHtml() {
    pdfMake.fonts = {
      GenShin: {
        normal: 'GenShinGothic-Normal-Sub.ttf',
        bold: 'GenShinGothic-Normal-Sub.ttf',
        italics: 'GenShinGothic-Normal-Sub.ttf',
        bolditalics: 'GenShinGothic-Normal-Sub.ttf',
      },
    };
    const defaultStyle = 'GenShin';
    const docDefinition = {
    	content: [
    		{
    			text: 'React Generate PDF Sample',
    			style: 'header'
    		},
    		{
    			text: 'Sentence',
    			style: 'subheader'
    		},
      `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      す以下、著作しられ性質を翻訳権フリーの採録状態でなるれるても従っます、最小限の条件は、
      一定しライセンスを発表さことについて著作重要であるているますた。
      または、条件の.物は、権利の掲載し明記必要で利用含む、その方針が満たすを陳述行っことに回避満たすられな。
      接触して、ここの受信は無いでも行うあるです。
      Aenean commodo ligula eget dolor. Aenean massa.
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      eleifend tellus.`,
    		{
    			text: 'Styles',
    			style: 'subheader'
    		},
    		{
    			text: '文字',
    			style: { fontSize:  15 },
    		},
    		{
    			text: '赤文字',
    			style: { color: 'red', fontSize: 30 },
    		},
    		{
    			text: '青文字',
    			style: { color: 'blue', fontSize: 40 },
    		},
    		{
    			text: '黄文字',
    			style: { color: 'yellow', fontSize: 50 },
    		},
      ],
    	defaultStyle: {
        font: defaultStyle,
    	},
      styles: {
        header: {
          fontSize: 30,
        },
        subheader: {
          fontSize: 20,
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }

  render() {
    return (
      <div className="crow">
        <div id="print" className="ws-12" style={{ fontFamily: 'MsGothic' }}>
          <h1>React Generate PDF Sample</h1>
          <h2>Sentence</h2>
          <p id="Sentence">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
          す以下、著作しられ性質を翻訳権フリーの採録状態でなるれるても従っます、<br />最小限の条件は、一定しライセンスを発表さことについて著作重要であるているますた。<br />
          または、条件の.物は、権利の掲載し明記必要で利用含む、その方針が満たすを陳述行っことに回避満たすられな。<br />
          接触して、ここの受信は無いでも行うあるです。<br />
          Aenean commodo ligula eget dolor. Aenean massa. <br />
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br />
          eleifend tellus.
          </p>
          <h2>Styles</h2>
          <div id="Styles">
            <h3>文字</h3>
            <p style={{ color: 'red', fontSize: '30px' }}>
              赤文字
            </p>
            <p style={{ color: 'blue', fontSize: '40px' }}>
              青文字
            </p>
            <p style={{ color: 'yellow', fontSize: '50px' }}>
              黄文字
            </p>
          </div>
        </div>
        <span className="ws-12">
          <Button color="youtube" floated="right" onClick={() => { this.GeneratePdfFromHtml(); }} >
            Save PDF
          </Button>
        </span>
      </div>
    );
  }
}

PdfFromHTML.propTypes = {
  id: React.PropTypes.string,
  component: React.PropTypes.node,
  hidden: React.PropTypes.bool,
};

export default PdfFromHTML;
