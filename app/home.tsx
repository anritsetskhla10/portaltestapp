// app/home.tsx

import { View, Text, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView
      className="bg-blue flex-1 items-center justify-center
      px-4 py-6">
      <Text className="text-2xl font-bold">Welcome to the Home Screen</Text>
      <Text className="mt-2 text-base text-gray-600">This is /home route</Text>
    </SafeAreaView>
  );
}
