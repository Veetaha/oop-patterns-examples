declare module 'electron-reload' {
    /**
     * Warning this decalration file is not complete, see https://github.com/yan-foto/electron-reload
     * to learn the whole interface.
     */
    export default function (paths: string, options: ElectronReloadOptions): void;

    export interface ElectronReloadOptions {
        electron: typeof import('electron');

        // some other properties here ...
    }

}