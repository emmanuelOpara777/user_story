import {StyleSheet} from 'react-native';
import {greyColor, whiteColor, lightGreyColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyColor,
    padding: 10,
    paddingTop: 25,
  },
  wrapper: {
    backgroundColor: whiteColor,
    flex: 1,
    borderRadius: 30,
    paddingTop: 20,
    padding: 15,
  },
  row: {flexDirection: 'row'},
  spaceBetween: {justifyContent: 'space-between'},
  filterIcon: {
    textAlignVertical: 'center',
    backgroundColor: whiteColor,
    elevation: 4,
    borderRadius: 10,
    marginLeft: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
  options: {paddingTop: 15, paddingBottom: 15},
  optionText: {fontWeight: 'bold', margin: 0},
  dot: {textAlign: 'center', marginVertical: -5},
  bold: {fontWeight: 'bold'},
  label: {fontSize: 12, color: 'grey'},
  rightAlign: {textAlign: 'right'},
  card: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    backgroundColor: whiteColor,
  },
  hr: {
    borderBottomColor: lightGreyColor,
    flex: 1,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginBottom: 10,
  },
  aircraftIcon: {
    transform: [{rotate: '35deg'}],
    position: 'absolute',
    left: '45%',
  },
  dateLabel: {
    fontSize: 12,
    color: 'grey',
  },
  boldLabel: {fontSize: 12, fontWeight: 'bold'},
  sign: {
    backgroundColor: whiteColor,
    borderRadius: 7,
    elevation: 3,
    color: 'black',
    padding: 3,
  },
  count: {paddingRight: 10, paddingLeft: 10, textAlignVertical: 'center'},
  signs: {paddingTop: 10},
  scrollView: {padding: 1},
});

export default styles;
