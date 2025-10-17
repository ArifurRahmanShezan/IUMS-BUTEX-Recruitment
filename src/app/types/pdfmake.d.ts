declare module 'pdfmake' {
    type TDocumentDefinitions = any;

    interface CreatePdf {
        download: (defaultFileName?: string, cb?: () => void, options?: any) => void;
        open: () => void;
        print: () => void;
        getBuffer: (cb: (buffer: any) => void) => void;
        getBase64: (cb: (data: string) => void) => void;
        getBlob: (cb: (blob: Blob) => void) => void;
    }

    interface PdfMake {
        createPdf: (docDefinition: TDocumentDefinitions, tableLayouts?: any, fonts?: any) => CreatePdf;
        vfs?: any;
    }

    const pdfMake: PdfMake;
    export default pdfMake;
}

declare module 'pdfmake/build/pdfmake' {
    import pdfMake from 'pdfmake';
    export = pdfMake;
}

declare module 'pdfmake/build/vfs_fonts' {
    const vfsFonts: {
        pdfMake: {
            vfs: any;
        };
    };
    export = vfsFonts;
}
