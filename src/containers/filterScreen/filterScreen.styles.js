import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 8},
  button: {
    margin: 50,
  },
  submit: {
    fontSize: 16,
    padding: 16,
    width: '100%',
    textAlign: 'center',
    shadowColor: '#000000',
    color: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
