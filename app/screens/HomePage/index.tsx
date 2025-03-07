import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import AuthStore from '../stores/authStore';
import { AuthService } from '../services';
const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Cart" component={CartStack} />
  </Tab.Navigator>
);
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { marginBottom: 10 },
});

export default HomePage;
