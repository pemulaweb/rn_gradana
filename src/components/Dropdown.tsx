import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

interface Props {
  title: 'Province' | 'Regencies' | 'Districts';
  data: any[];
  selected: any;
  onChange: (v: any) => void;
}

export default function Dropdown(props: Props) {
  const {title, data, selected, onChange} = props;

  const onValueChange = useCallback(
    item => {
      onChange(item);
    },
    [selected],
  );

  return (
    <View>
      <Title style={styles.subheading}>{title}</Title>
      <Picker selectedValue={selected} onValueChange={onValueChange}>
        <Picker.Item label={`Choose ${title}`} value="" />
        {data.map((i, index) => (
          <Picker.Item key={index} label={i?.name} value={i} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  subheading: {
    paddingHorizontal: 15,
  },
});
