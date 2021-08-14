import React from 'react';
import {SafeAreaView, Alert, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Dropdown from '../components/Dropdown';
import useWilayah from '../hooks/useWilayah';

export default function FormScreen() {
  const {
    provinces,
    regencies,
    districts,
    onGetRegencies,
    onGetDistricts,
    onSelectDistrict,
    selected,
  } = useWilayah();
  const {province, regency, district} = selected;

  const onAlert = () => {
    Alert.alert(
      'Your Wilayah',
      `${province?.name}, ${regency?.name}, ${district?.name}`,
    );
  };

  return (
    <SafeAreaView>
      {provinces.length > 0 && (
        <Dropdown
          title="Province"
          selected={province}
          data={provinces}
          onChange={onGetRegencies}
        />
      )}
      {regencies.length > 0 && (
        <Dropdown
          title="Regencies"
          selected={regency}
          data={regencies}
          onChange={onGetDistricts}
        />
      )}
      {districts.length > 0 && (
        <Dropdown
          title="Districts"
          selected={district}
          data={districts}
          onChange={onSelectDistrict}
        />
      )}

      {province && regency && district && (
        <Button mode="contained" style={styles.btnPrint} onPress={onAlert}>
          PRINT
        </Button>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnPrint: {
    margin: 15,
  },
});
