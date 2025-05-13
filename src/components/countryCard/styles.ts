import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
  },
  countryContainer: {flexDirection: 'row', alignItems: 'center', gap: 8},
  countryImage: {
    width: 30,
    height: 20,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
  },
  countryText: {fontFamily: 'Inter-Regular', fontSize: 16, color: '#000000'},
});
