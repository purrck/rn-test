import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Chip,
  ActivityIndicator,
} from 'react-native-paper';
import { PostService } from '../services/index';
import { Post } from '../types/post';

const PostDetailPage = ({ route }) => {
  const { postId } = route.params;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostById(postId);
        setPost(response.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>{post?.title}</Title>
          <Paragraph style={styles.body}>{post?.body}</Paragraph>

          <View style={styles.chipContainer}>
            {post?.tags.map((tag, index) => (
              <Chip key={index} style={styles.chip} textStyle={styles.chipText}>
                #{tag}
              </Chip>
            ))}
          </View>

          <View style={styles.reactions}>
            <Paragraph style={styles.reactionText}>
              Reactions: {post?.reactions}
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  chip: {
    backgroundColor: '#e0e0e0',
  },
  chipText: {
    color: '#424242',
  },
  reactions: {
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    paddingTop: 10,
  },
  reactionText: {
    color: '#757575',
    fontWeight: '500',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetailPage;
