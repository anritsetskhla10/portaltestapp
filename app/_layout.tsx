import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="auth" options={{}} />
      <Stack.Screen name="registration" options={{}} />
      <Stack.Screen name="+not-found" options={{}} />
    </Stack>
  );
}
