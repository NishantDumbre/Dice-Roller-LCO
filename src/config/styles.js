import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    paddingVertical: hp(3),
    paddingHorizontal: wp(30),
    marginTop: hp(2),
    borderRadius: hp(6),
    backgroundColor: 'tomato',
    fontSize: hp(2.5),
    elevation: hp(1),
  },

  container: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: hp(30),
    width: hp(30),
  },

  text: {
    fontSize: hp(3.5),
    marginTop: hp(1),
    color: 'red',
    fontWeight: '100',
    elevation: hp(1),
  },

  textContainer: {
    marginBottom: hp(3),
    alignItems: 'center',
  },
});

export default styles;
