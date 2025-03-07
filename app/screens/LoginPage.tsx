import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import AuthStore from '../stores/authStore';
import { AuthService } from '../services';
import { observer } from 'mobx-react-lite';
import { User } from '../types/post';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user: User = AuthStore.user;
  useEffect(() => {
    if (user.username) {
      navigation.navigate('MainTab'); // 在副作用中触发导航
    }
  }, [user]); // 依赖项确保 user 变化时重新检查
  console.log('LoginPage');
  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      AuthStore.login(response.data);
      // setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTab' }],
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : null} */}
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
  // loader: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   opacity: 0.3,
  // },
});

export default observer(LoginPage);
