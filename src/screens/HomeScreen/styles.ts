import {StyleSheet} from 'react-native';
import {STYLES} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  moneyBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  inputBlock: {
    gap: 8,
    marginBottom: 24,
  },
  input: {
    ...STYLES.regularText,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  resultBlock: {gap: 4},
  convertedText: {
    ...STYLES.regularText,
    fontSize: 42,
  },
});
