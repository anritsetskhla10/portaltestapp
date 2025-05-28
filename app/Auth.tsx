import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function AuthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>ავტორიზაცია</Text>
      <Button title="დაბრუნება მთავარ გვერდზე" onPress={() => router.push('/')} />
    </View>
  );
}
