// types/global.d.ts

declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: object) => void;
  }
}

// This empty export is needed to make the file a module
export {};
