'use strict';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/core';
import useCamera from '../hooks/useCamera';

export default function CameraScreen() {
  const isFocused = useIsFocused();
  const {onTakeSnap, image} = useCamera();

  if (isFocused)
    return (
      <SafeAreaView style={styles.container}>
        {image && (
          <Card style={styles.cardPreview}>
            <Card.Title title="Image Result" />
            <Card.Cover source={{uri: image}} />
          </Card>
        )}
        <Button icon="camera" mode="contained" onPress={onTakeSnap}>
          SNAP
        </Button>
      </SafeAreaView>
    );
  else return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardPreview: {
    marginBottom: 20,
  },
});
