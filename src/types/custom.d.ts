// src/custom.d.ts

declare module 'react-csv' {
    import type { ComponentType } from 'react';
    export const CSVLink: ComponentType<any>;
    export const CSVDownload: ComponentType<any>;
}

declare module 'react-image-gallery' {
    import type { ComponentType } from 'react';
    const ImageGallery: ComponentType<any>;
    export default ImageGallery;
}
