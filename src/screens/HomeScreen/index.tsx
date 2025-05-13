import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChangeArrowsIcon from '../../../assets/icons/change-arrows.svg';
import CountryCard from '../../components/countryCard';
import {STYLES} from '../../constants/globalStyles';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack/types';
import calculateStore from '../../store/calculateStore';
import {observer} from 'mobx-react-lite';

export const HomeScreen = observer(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.moneyBlock}>
        <View style={{gap: 8}}>
          <Text style={STYLES.regularText}>From:</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CurrencyScreen', {type: 'from'})
            }>
            <CountryCard
              countryImage={calculateStore.fromCountry.flagSrc}
              countryName={calculateStore.fromCountry.code}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={calculateStore.reverseCountries}>
          <ChangeArrowsIcon style={{top: '17%'}} />
        </TouchableOpacity>
        <View style={{gap: 8}}>
          <Text style={STYLES.regularText}>To:</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CurrencyScreen', {type: 'to'})}>
            <CountryCard
              countryImage={calculateStore.toCountry.flagSrc}
              countryName={calculateStore.toCountry.code}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputBlock}>
        <Text style={STYLES.regularText}>Amount:</Text>
        <TextInput
          defaultValue={'1'}
          value={calculateStore.amount}
          onChangeText={value => {
            calculateStore.setAmount(value);
            calculateStore.convert();
          }}
          style={styles.input}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.resultBlock}>
        <Text style={STYLES.regularText}>
          {calculateStore.amount ? calculateStore.amount : 1}{' '}
          {calculateStore.fromCountry.symbolNative} =
        </Text>
        <Text style={styles.convertedText}>
          {calculateStore.result.value} {calculateStore.result.symbolNative}
        </Text>
      </View>
    </View>
  );
});
