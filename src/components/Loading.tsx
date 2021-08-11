import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        animating={true}
        color={Colors.blue500}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
