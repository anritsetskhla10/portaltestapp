import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';

export default function RegistrationScreen() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="mb-4 text-center text-2xl font-bold">Registration</Text>

      {/* Column 1 */}
      <View className="flex flex-col gap-4">
        <TextInput placeholder="Company name" className="rounded border p-3" />
        <TextInput placeholder="E-mail" className="rounded border p-3" />
        <TextInput placeholder="Legal Address" className="rounded border p-3" />
        <TextInput placeholder="Select your city" className="rounded border p-3" />
        <TextInput placeholder="Name contact person" className="rounded border p-3" />
        <TextInput placeholder="E-mail contact person" className="rounded border p-3" />
        <TextInput placeholder="Public phone number" className="rounded border p-3" />
      </View>

      {/* Column 2 */}
      <View className="mt-6 flex flex-col gap-4">
        <TextInput placeholder="Government number" className="rounded border p-3" />
        <TextInput placeholder="Company phone number" className="rounded border p-3" />
        <TextInput placeholder="Owner name" className="rounded border p-3" />
        <TextInput placeholder="Fact Address" className="rounded border p-3" />
        <TextInput placeholder="Phone number contact person" className="rounded border p-3" />
        <TextInput placeholder="Public company name" className="rounded border p-3" />
        <TextInput placeholder="Public address" className="rounded border p-3" />
      </View>

      {/* Checkboxes */}
      <View className="mt-6">
        <View className="mb-3 flex-row items-center space-x-2">
          <Pressable
            onPress={() => setChecked1(!checked1)}
            className={`h-5 w-5 rounded border ${checked1 ? 'bg-yellow-400' : 'bg-white'}`}
          />
          <Text className="flex-1">I accept and declare consent regarding Terms of Service.</Text>
        </View>

        <View className="flex-row items-center space-x-2">
          <Pressable
            onPress={() => setChecked2(!checked2)}
            className={`h-5 w-5 rounded border ${checked2 ? 'bg-yellow-400' : 'bg-white'}`}
          />
          <Text className="flex-1">I accept and declare consent regarding data processing.</Text>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity className="mt-6 items-center rounded bg-yellow-400 p-4">
        <Text className="font-semibold text-black">APPLY FOR REGISTRATION</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
