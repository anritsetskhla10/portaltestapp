import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>მთავარი გვერდი</Text>
      <Button title="გადადი ავტორიზაციაზე" onPress={() => router.push('/Auth')} />
    </View>
  );
}
