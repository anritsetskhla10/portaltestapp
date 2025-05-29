import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import '../global.css'; // Ensure global styles are imported

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <Stack />;
}
