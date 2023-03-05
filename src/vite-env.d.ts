/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_KEY: string;
    readonly VITE_AUTH_DOMAIN: string;
    readonly VITE_PROJECT_ID: string;
    readonly VITE_STORAGE_BUCKET: string;
    readonly VITE_MESSAGING_SENDER_ID: string;
    readonly VITE_APP_ID: string;
    readonly VITE_GAPI_KEY: string;
    readonly VITE_CALENDAR_ID: string;
    readonly VITE_CALENDAR_PW: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
