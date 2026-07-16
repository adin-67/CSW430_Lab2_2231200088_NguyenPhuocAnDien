import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },

  calculator: {
    width: '100%',
    alignItems: 'center',
  },

  display: {
    width: 290,
    fontSize: 42,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },

  button: {
    width: 68,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,

    elevation: 4,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  buttonText: {
    fontSize: 28,
    color: '#333333',
  },

  operatorText: {
    color: '#ff9500',
  },

  zeroButton: {
    width: 144,
  },

  equalButton: {
    backgroundColor: '#ff9500',
  },

  equalText: {
    color: '#ffffff',
  },

  clearButton: {
    width: 296,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eeeeee',
  },

  clearText: {
    fontSize: 22,
    color: '#333333',
  },
});

export default styles;