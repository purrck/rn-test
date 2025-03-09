import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AuthStore from '../stores/authStore';
import { AuthService } from '../services';
import { observer } from 'mobx-react-lite';
import { User } from '../types/post';
import LoadingOverlay from '../components/LoadingOverlay';
const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [loading, setLoading] = useState(false);
  const user: User = AuthStore.user;
  useEffect(() => {
    if (user.username) {
      navigation.navigate('MainTab'); // 在副作用中触发导航
    }
  }, [user]); // 依赖项确保 user 变化时重新检查
  console.log('LoginPage');
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await AuthService.login(username, password);
      AuthStore.login(response.data);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTab' }],
      });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      {loading ? <LoadingOverlay /> : null}
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  input: { marginBottom: 10 },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
    backgroundColor: '#eee',
    position: 'absolute',
  },
});

export default observer(LoginPage);
