//src: https://gist.github.com/iaurg/c1d53dd58d9a2a170272b469d9edbd79

import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default class DownloadResumePDF extends Component {
  state = {
    loading: false,
  };

  download = (filename, url) => {
    const element = document.createElement('a');
    element.setAttribute('href', `${url}`);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  createAndDownloadPDF = (pdfContent, filename, divId, callback) => {
    setTimeout(() => {
      const link = (
        <div id={divId}>
          <PDFDownloadLink document={pdfContent} fileName={filename}>
            {({ blob, url, loading, error }) => {
              if (!loading && blob instanceof Blob) {
                this.download(filename, URL.createObjectURL(blob));
                callback();
              }
            }}
          </PDFDownloadLink>
        </div>
      );
      const elem = document.createElement('div');
      document.getElementById('pdfButton').appendChild(elem);
      hydrate(link, elem);
    }, 500);
  };
  

  buildPDF = () => {
    const { loading } = this.state;
    if (!loading) {
      this.setState({ loading: true }, () => {
        this.createAndDownloadPDF(this.generatePDF(), `JWCL_RESUME.pdf`, `file`, () =>
          this.setState({ loading: false })
        );
      });
    }
  };

  generatePDF = () => {
    return <>{this.props.children}</>
  };

  render() {
    const { loading } = this.state;
    return loading ? (
      <div id="pdfButton">Loading...</div>
    ) : (
      <img onClick={this.buildPDF}  src={'pdf.svg'} width={'40px'} style={{ cursor: 'pointer' }} />
    );
  }
}