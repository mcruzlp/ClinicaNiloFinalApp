import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ClinicaNiloFinalApp',
  webDir: 'www',
  bundledWebRuntime: false,
  npmClient: 'npm',
  plugins: {
    splashScreen: {
      launchShowDuration: 0,
    },
  },
  cordova: {},
  linuxAndroidStudioPath: '/C:/Program Files/Android/Android Studio/bin/studio.exe',
};

export default config;
