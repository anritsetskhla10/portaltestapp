import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-yellow-400 flex-row justify-between items-center px-4 py-3">
        <Text className="text-black font-bold text-2xl">Delivo</Text>
        <Image source={require('../assets/flag.png')} className="w-6 h-6" />
      </View>

      {/* Card */}
      <View className="flex-1 justify-center px-6">
        <View className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          {/* Tabs */}
          <View className="flex-row justify-around mb-4">
            <Text className="text-yellow-500 border-b-2 border-yellow-500 pb-1 font-semibold">LOGIN</Text>
            <Text className="text-gray-500">REGISTRATION</Text>
          </View>

          <Text className="text-center text-2xl font-bold mb-6">Log In</Text>

          {/* Email Input */}
          <Text className="text-sm text-gray-500">E-mail</Text>
          <TextInput
            className="border rounded-md px-4 py-2 mt-1 mb-4 bg-blue-50"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
          />

          {/* Password Input */}
          <Text className="text-sm text-gray-500">Password</Text>
          <View className="flex-row items-center border rounded-md bg-blue-50 px-4 py-2 mb-4">
            <TextInput
              className="flex-1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
              placeholder="Enter password"
            />
            <Pressable onPress={() => setSecure(!secure)}>
              {secure ? <Eye className="text-gray-500" size={20} /> : <EyeOff className="text-gray-500" size={20} />}
            </Pressable>
          </View>


          {/* Login Button */}
          <Pressable className="bg-yellow-400 py-3 rounded-md items-center mb-4">
            <Text className="text-black font-bold">LOGIN</Text>
          </Pressable>

          {/* Reset Password */}
          <Text className="text-center text-blue-500 underline">Reset password</Text>
        </View>
      </View>

      {/* Footer */}
      <View className="bg-yellow-400 px-4 py-3 flex-wrap flex-row justify-between">
        <Text className="text-xs text-black">My orders</Text>
        <Text className="text-xs text-black">For developers</Text>
        <Text className="text-xs text-black">Delivo's web-site</Text>
        <Text className="text-xs text-black">Terms and conditions</Text>
        <Text className="text-xs text-black">Version - 0.86.3</Text>
        <Text className="text-xs text-black">Feedback</Text>
      </View>
    </View>
  );
}

