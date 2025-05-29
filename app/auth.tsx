import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';


export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-yellow-400 px-4 py-3">
        <Text className="text-2xl font-bold text-black">Delivo</Text>
      </View>

      {/* Card */}
      <View className="flex-1 justify-center px-6">
        <View className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
          {/* Tabs */}
          <View className="mb-4 flex-row justify-around">
            <Text className="border-b-2 border-yellow-500 pb-1 font-semibold text-yellow-500">
              LOGIN
            </Text>
            <Text className="text-gray-500">REGISTRATION</Text>
          </View>

          <Text className="mb-6 text-center text-2xl font-bold">Log In</Text>

          {/* Email Input */}
          <Text className="text-sm text-gray-500">E-mail</Text>
          <TextInput
            className="mb-4 mt-1 rounded-md border bg-blue-50 px-4 py-2"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
          />

          {/* Password Input */}
          <Text className="text-sm text-gray-500">Password</Text>
          <View className="mb-4 flex-row items-center rounded-md border bg-blue-50 px-4 py-2">
            <TextInput
              className="flex-1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
              placeholder="Enter password"
            />
            <Pressable onPress={() => setSecure(!secure)}>
              {secure ? (
                <Eye className="text-gray-500" size={20} />
              ) : (
                <EyeOff className="text-gray-500" size={20} />
              )}
            </Pressable>
          </View>

          {/* Login Button */}
          <Pressable className="mb-4 items-center rounded-md bg-yellow-400 py-3">
            <Text className="font-bold text-black">LOGIN</Text>
          </Pressable>

          {/* Reset Password */}
          <Text className="text-center text-blue-500 underline">Reset password</Text>
        </View>
      </View>

      {/* Footer */}
      <View className="flex-row flex-wrap justify-between bg-yellow-400 px-4 py-3">
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
