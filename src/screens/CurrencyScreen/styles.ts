import {StyleSheet} from 'react-native';
import {sizes} from '../../constants/sizes';
import {STYLES} from '../../constants/globalStyles';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5', paddingBottom: sizes.BOTTOM},
  header: {
    alignItems: 'center',
    gap: 12,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: sizes.TOP,
    paddingBottom: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  heading: {
    ...STYLES.semiBoldText,
    fontSize: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
});
