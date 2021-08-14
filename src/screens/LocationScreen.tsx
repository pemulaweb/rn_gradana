import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, List, Button, Subheading} from 'react-native-paper';
import useLocation from '../hooks/useLocation';

export default function LocationScreen() {
  const {onGetLocation, location, error} = useLocation();

  if (error)
    return (
      <SafeAreaView>
        <Text>
          There is an error when getting location. Please check the permissions.
        </Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Subheading>Please make sure you have activate your Location</Subheading>
      <List.Section>
        <List.Subheader>Your Current Location</List.Subheader>
        <List.Item title={`Latitude: ${location?.coords?.latitude}`} />
        <List.Item title={`Longitude : ${location?.coords?.longitude}`} />
        <List.Item title={`Accuracy: ${location?.coords?.accuracy}`} />
      </List.Section>

      <Button mode="contained" icon="google-maps" onPress={onGetLocation}>
        GET LOCATION
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
