import React from 'react';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

const Manual = (props) => {

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const {pdf} = props;

  return (
    <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
    >
        {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
        ))}
    </Document>
  )
}

export default Manual;