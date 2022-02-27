import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    elevation: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    margin: 8,
  },
  listTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    width: 300,
  },
  category: {
    color: '#A9A9A9',
    fontWeight: 'bold',
    width: 200,
  },
  subOkrTitle: {
    color: '#000000',
    paddingTop: 6,
  },
});
