import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function NotFound() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black px-6">
      <Text className="text-2xl font-bold text-black dark:text-white mb-4">
        გვერდი არ მოიძებნა
      </Text>
      <Pressable
        className="bg-orange-500 px-4 py-2 rounded-full mt-2"
        onPress={() => router.replace('/')}
      >
        <Text className="text-white font-semibold">მთავარ გვერდზე დაბრუნება</Text>
      </Pressable>
    </View>
  );
}
