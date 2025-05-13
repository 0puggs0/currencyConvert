import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface Props {
  isSelected: boolean;
}

export default function CustomCheckbox({isSelected}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      {isSelected && <View style={styles.checkboxInnerView} />}
    </TouchableOpacity>
  );
}
