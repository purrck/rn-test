import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '../navigation/types';
import AuthStore from '../stores/authStore';
import { User } from '../types/post';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user: User = AuthStore.user;

  const handleLogout = () => {
    Alert.alert('确认登出', '您确定要退出当前账号吗？', [
      { text: '取消', style: 'cancel' },
      {
        text: '确认',
        style: 'destructive',
        onPress: () => {
          AuthStore.logout();
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
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
            source={{ uri: user?.image || 'https://i.imgur.com/TdIiU4G.png' }}
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
            onPress={() => navigation.navigate('About')}>
            关于我们
          </Button>
          <Button
            mode="text"
            icon="logout"
            style={styles.menuItem}
            onPress={handleLogout}>
            退出登录
          </Button>
        </Card.Content>
      </Card>
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

export default ProfileScreen;
