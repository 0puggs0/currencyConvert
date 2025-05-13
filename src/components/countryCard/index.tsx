import {Image, Text, View} from 'react-native';
import React from 'react';
import VerticalArrowIcon from '../../../assets/icons/vertical-arrow.svg';
import {styles} from './styles';

interface Props {
  countryImage: string;
  countryName: string;
}

export default function CountryCard({countryImage, countryName}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.countryContainer}>
        <Image style={styles.countryImage} source={{uri: countryImage}} />
        <Text style={styles.countryText}>{countryName}</Text>
      </View>
      <VerticalArrowIcon />
    </View>
  );
}
