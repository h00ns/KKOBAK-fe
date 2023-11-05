declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

interface ImportMeta {
  env: {
    VITE_BASE_URL?: string;
    VITE_APP_MODE?: string;
  };
}
