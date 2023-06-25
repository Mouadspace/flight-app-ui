import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  header: {
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 15,
    paddingBottom: 40,
  },
  icon: {
    flexDirection: 'column',
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: '#28292D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;
