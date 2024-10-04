// // components/PdfViewer.tsx
// import { Document, Page } from 'react-pdf';
// import { useState } from 'react';

// interface PdfViewerProps {
//   file: string;
//   onClose: () => void;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ file, onClose }) => {
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div>
//       <button onClick={onClose}>Close</button>
//       <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// };

// export default PdfViewer;
