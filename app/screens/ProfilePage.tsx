import React, { useEffect } from 'react';

import { View, StyleSheet, Alert, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StackScreenProps } from '../navigation/types';
import AuthStore from '../stores/authStore';
import { User } from '../types/post';

const ProfilePage = ({ navigation }) => {
  const user: User = AuthStore.user;
  useEffect(() => {
    console.log('useruseruseruser,', user);
    if (!user.username) {
      navigation.navigate('LoginPage');
    }
  }, [user]); // 依赖项确保 user 变化时重新检查
  const handleLogout = () => {
    Alert.alert('确认登出', '您确定要退出当前账号吗？', [
      { text: '取消', style: 'cancel' },
      {
        text: '确认',
        style: 'destructive',
        onPress: () => {
          AuthStore.logout();
          navigation.reset({
            index: 1,
            routes: [{ name: 'LoginPage' }],
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Image
            size={80}
            source={{ uri: user?.image }}
            style={styles.avatar}
          />
          <Title style={styles.name}>
            {user?.firstName} {user?.lastName}
          </Title>
          <Paragraph style={styles.username}>@{user?.username}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.menuCard}>
        <Card.Content>
          <Button
            mode="text"
            icon="information"
            style={styles.menuItem}
            onPress={() => console.log('about')}>
            关于我们
          </Button>
        </Card.Content>
      </Card>

      <Button
        mode="text"
        icon="logout"
        style={styles.menuItem}
        onPress={handleLogout}>
        退出登录
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
    marginBottom: 16,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
  },
  profileContent: {
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    color: '#666',
    fontSize: 16,
  },
  menuCard: {
    marginBottom: 16,
  },
  menuItem: {
    justifyContent: 'flex-start',
    paddingVertical: 12,
  },
});

export default ProfilePage;
