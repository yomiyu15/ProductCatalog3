// // components/PdfViewer.tsx

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// interface PdfViewerProps {
//   src: string;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ src }) => {
//   const [numPages, setNumPages] = useState<number>(0);
//   const [pageNumber, setPageNumber] = useState<number>(1);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <Document
//         file={src}
//         onLoadSuccess={onDocumentLoadSuccess}
      
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//         <button
//           type="button"
//           disabled={pageNumber <= 1}
//           onClick={() => setPageNumber(pageNumber - 1)}
//         >
//           Previous
//         </button>
//         <button
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={() => setPageNumber(pageNumber + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;
