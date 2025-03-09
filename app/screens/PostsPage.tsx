import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { PostService } from '../services/index';
import { Post } from '../types/post';
import { MainTabParamList } from './.types';
const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    PostService.getPosts().then(res => setPosts(res.data.posts));
  }, []);
  console.log('postspostsposts', posts);
  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <Card
      style={styles.card}
      onPress={() =>
        navigation.navigate('PostsDetailPage', { postId: item.id })
      }>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.body.slice(0, 50)}...</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={posts}
      renderItem={Post => renderItem(Post)}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 10 },
  card: { marginBottom: 10, borderWidth: 0, shadowColor: '#999' },
});

export default PostsScreen;
