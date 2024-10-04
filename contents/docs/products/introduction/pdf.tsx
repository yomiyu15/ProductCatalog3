// app/docs/getting-started/introduction/pdf.tsx

import React from 'react';
import PdfViewer from '../../../../components/pdfviewer';

const PdfPage: React.FC = () => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      {/* Point to the PDF in the public directory */}
      <PdfViewer src="/CCF.pdf" />
    </div>
  );
};

export default PdfPage;
