import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {STYLES} from '../../constants/globalStyles';
import CustomCheckbox from '../customCheckbox';
import calculateStore from '../../store/calculateStore';
import {observer} from 'mobx-react-lite';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack/types';
import {styles} from './styles';

interface Props {
  item: typeof calculateStore.fromCountry;
  onPress: () => void;
}

export const CountryListItem = observer(({item, onPress}: Props) => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const isSelected =
    route.params?.type === 'from'
      ? calculateStore.fromCountry.code === item.code
      : calculateStore.toCountry.code === item.code;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: isSelected ? '#DEDEDE' : '#E7E7E7',
      }}
      onPress={onPress}>
      <View style={styles.countryBlock}>
        <Image style={styles.countryImage} source={{uri: item?.flagSrc}} />
        <Text
          numberOfLines={1}
          style={{...STYLES.regularText, maxWidth: '85%'}}>
          {item?.code + ' - ' + item?.name}
        </Text>
      </View>
      <CustomCheckbox isSelected={isSelected} />
    </TouchableOpacity>
  );
});
