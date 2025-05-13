import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E7E7E7',
    padding: 16,
    borderRadius: 8,
  },
  countryImage: {
    width: 30,
    height: 20,
    backgroundColor: 'lightpink',
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
  },
  countryBlock: {flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1},
});
