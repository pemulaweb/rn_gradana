import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

export default function MyCard(item: any) {
  return (
    <Card style={styles.card}>
      <Card.Title title={`Random Jokes ${item?.id}`} subtitle={item?.setup} />
      <Card.Content>
        <Paragraph>{item?.punchline}</Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
});
