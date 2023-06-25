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
    height: 235,
    marginTop: 30,
    paddingHorizontal: 22,
  },
  ticketImage: {
    width: '100%',
    height: 235,
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
    height: 120,
  },
  blurContainer: {
    overflow: 'hidden',
    marginTop: 10,
    width: '100%',
    height: 120,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});

export default styles;

// shadowProp: {
//   shadowColor: '#171717',
//   shadowOffset: {width: 8, height: -8},
//   shadowOpacity: 1,
//   shadowRadius: 0,
// },
/* <DropShadow style={styles.shadowProp}>
              <View style={styles.rightCornerBox}></View>
            </DropShadow> */
