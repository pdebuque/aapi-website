"use client"

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

type Props = {
  pdf: string
}

function PDFViewer({pdf}:Props) {
  const [numPages, setNumPages] = useState<number|null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFViewer;