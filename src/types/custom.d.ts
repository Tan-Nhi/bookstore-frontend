// src/custom.d.ts
declare module 'react-csv' {
    import * as React from 'react';
    export const CSVLink: React.FC<any>;
    export const CSVDownload: React.FC<any>;
}

declare module 'react-image-gallery' {
    import * as React from 'react';
    const ImageGallery: React.FC<any>;
    export default ImageGallery;
}
