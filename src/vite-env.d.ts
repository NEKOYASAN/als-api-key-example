/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAP_REGION: string;
  readonly VITE_MAP_NAME: string;
  readonly VITE_MAP_APP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
