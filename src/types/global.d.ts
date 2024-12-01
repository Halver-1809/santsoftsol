// src/types/global.d.ts (o donde prefieras colocar tus declaraciones globales)

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module 'react-file-viewer' {
  const FileViewer: any;
  export default FileViewer;
}
