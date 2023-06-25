import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  stack: {
    position: 'relative',
  },

  txtContainer: {
    marginLeft: 22,
  },
  nameTxt: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 17,
  },
  txt: {
    color: 'white',
    fontWeight: '400',
    fontSize: 45,
  },

  container: {
    flexDirection: 'column',
    width: '100%',
    height: 270,
    marginTop: 30,
    paddingHorizontal: 22,
    // backgroundColor: 'green',
  },
  ticketImage: {
    width: '100%',
    height: 270,
  },
  cornerBox: {
    position: 'absolute',
    width: 77,
    height: 77,
    backgroundColor: '#181617',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 38,
  },
  circleBox: {
    position: 'absolute',
    width: 70,
    height: 70,
    backgroundColor: '#E5FA79',
    borderRadius: 40,
    alignSelf: 'flex-end',

    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 22,
    height: 22,
    transform: [{rotate: '145deg'}],
  },
  topEdge: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderTopRightRadius: 35,
    alignSelf: 'flex-end',
    marginRight: 66,
    marginTop: -10,
    zIndex: 0,

    borderTopColor: '#181617',
    borderTopWidth: 10,
    borderRightColor: '#181617',
    borderRightWidth: 10,
  },
  rightEdge: {
    marginRight: -10,
    marginTop: 37,
  },

  qrCode: {
    width: 60,
    height: 60,
  },
  qrContainer: {
    position: 'absolute',
    top: 26,
    left: 26,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  blur: {
    width: '100%',
    height: 140,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  blurContainer: {
    overflow: 'hidden',
    marginTop: 23,
    width: '100%',
    height: 140,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    zIndex: 1,
  },

  flightIcon: {
    width: 20,
    height: 20,
    transform: [{rotate: '90deg'}],
  },

  blurCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,

    // backgroundColor: 'red',
  },

  destination: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  flightContainer: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  bottomCard: {
    marginTop: -100,
    width: '100%',
    height: 190,
    backgroundColor: '#28292D',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    zIndex: -1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    paddingBottom: 35,
  },
  sit: {
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 22,
  },

  options: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  option: {
    width: '48%',
    height: 200,
    backgroundColor: '#4B5AEB',
    borderRadius: 20,
  },
  food: {},
  luggage: {
    backgroundColor: '#28292D',
    position: 'relative',
    overflow: 'hidden',
  },

  topEdgeB: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    borderBottomRightRadius: 35,
    alignSelf: 'flex-end',
    marginRight: -10,
    marginTop: 93,
    zIndex: 0,

    borderBottomColor: '#171717',
    borderBottomWidth: 10,
    borderRightColor: '#171717',
    borderRightWidth: 10,
  },
  rightEdgeB: {
    marginRight: 67,
    marginTop: 38,
  },
  txtCard: {
    position: 'absolute',
    marginTop: 22,
    marginLeft: 22,
    fontSize: 16,
    color: 'white',
  },
  txtCardRight: {
    marginTop: 22,
    marginLeft: 22,
    fontSize: 16,
    color: 'white',
  },
  weight: {
    marginTop: 5,
    marginLeft: 22,
    fontSize: 14,
    color: 'rgba(255,255,255,0.6)',
  },
  luggageImg: {
    position: 'absolute',
    width: 100,
    height: 200,
    right: 22,
    bottom: -80,
  },
});

export default styles;
