import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const LoadingOverlay = () => (
  <View style={styles.overlay}>
    <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.3)', // 半透明遮罩
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // 确保在最顶层
  },
  spinner: {
    transform: [{ scale: 1.5 }], // 放大指示器
  },
});
export default LoadingOverlay;
