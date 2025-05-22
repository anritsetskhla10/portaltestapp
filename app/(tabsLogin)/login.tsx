import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      <View className="items-center mb-12">
        <Image
          source={require('../assets/login-illustration.png')}
          className="w-64 h-64"
          resizeMode="contain"
        />
      </View>

      <Text className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</Text>

      <TextInput
        className="bg-gray-100 rounded-xl px-4 py-3 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="bg-gray-100 rounded-xl px-4 py-3 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="bg-yellow-400 rounded-xl py-3 items-center mb-4">
        <Text className="font-bold text-black text-base">LOGIN</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-500">
        Don't have an account? <Text className="text-yellow-400">Register</Text>
      </Text>
    </SafeAreaView>
  );
}
