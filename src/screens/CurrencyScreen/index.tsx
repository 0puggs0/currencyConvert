import {FlatList, Text, TextInput, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import BackIcon from '../../../assets/icons/back-icon.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';
import {STYLES} from '../../constants/globalStyles';

import COUNTRIES from '../../localData/currencies.json';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack/types';
import calculateStore from '../../store/calculateStore';
import {CountryListItem} from '../../components/countryListItem';
import {observer} from 'mobx-react-lite';
import {styles} from './styles';

export const CurrencyScreen = observer(() => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [search, setSearch] = useState('');

  const handlePress = (item: typeof calculateStore.fromCountry) => {
    if (route.params?.type === 'from') {
      calculateStore.setFromCountry(item);
    } else {
      calculateStore.setToCountry(item);
    }
  };
  const sortedData = useMemo(() => {
    return COUNTRIES.filter(item =>
      (item.code + ' - ' + item.name)
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackIcon onPress={navigation.goBack} />
        <Text style={styles.heading}>Currency Select</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.inputContainer}>
          <SearchIcon />
          <TextInput
            value={search}
            onChangeText={value => setSearch(value)}
            style={{...STYLES.regularText, flex: 1}}
          />
        </View>
        <FlatList
          keyExtractor={item => item.code}
          style={{backgroundColor: '#E7E7E7', borderRadius: 8}}
          showsVerticalScrollIndicator={false}
          data={sortedData}
          renderItem={({item}) => (
            <CountryListItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      </View>
    </View>
  );
});
