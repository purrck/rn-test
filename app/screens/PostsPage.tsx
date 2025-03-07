import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { PostService } from '../services/index';
import { Post } from '../types/post';

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    PostService.getPosts().then(res => setPosts(res.data.posts));
  }, []);

  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('PostDetail', { postId: item.id })}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.body.slice(0, 50)}...</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 10 },
  card: { marginBottom: 10 },
});

export default PostsScreen;
