import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';

import styles from './style';
import Header from '../../components/Header';
import DropShadow from 'react-native-drop-shadow';
import {BlurView} from '@react-native-community/blur';
const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#181617', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          iconSrc={[
            require('../../assets/icons/menus.png'),
            require('../../assets/icons/person.png'),
          ]}
        />
        <View>
          <View style={styles.txtContainer}>
            <Text style={styles.nameTxt}>Mr Mouad</Text>
            <Text style={[styles.nameTxt, styles.txt]}>Your flight</Text>
          </View>
          <View style={styles.container}>
            <View>
              <Image
                borderRadius={40}
                style={[styles.ticketImage, {position: 'absolute'}]}
                source={require('../../assets/images/desert.jpg')}
              />
              <View style={styles.stack}>
                <View style={styles.cornerBox}></View>
                <View style={[styles.circleBox]}>
                  <Image
                    style={styles.backIcon}
                    source={require('../../assets/icons/arrow.png')}
                  />
                </View>
              </View>
              <View style={styles.topEdge}></View>
              <View style={[styles.topEdge, styles.rightEdge]}></View>
              <View style={styles.qrContainer}>
                <Image
                  style={styles.qrCode}
                  source={require('../../assets/images/qr-code.png')}
                />
              </View>

              <View style={styles.blurContainer}>
                <BlurView blurType="light" blurAmount={20} style={styles.blur}>
                  <View style={styles.blurCard}>
                    <View style={styles.origin}>
                      <Text style={styles.txt}>LHR</Text>
                      <Text style={[styles.nameTxt, {fontSize: 12}]}>
                        London, UK
                      </Text>
                      <Text
                        style={[styles.nameTxt, {fontSize: 12, marginTop: 5}]}>
                        08.25 PM
                      </Text>
                    </View>

                    <View style={styles.flightContainer}>
                      <Image
                        style={styles.flightIcon}
                        source={require('../../assets/icons/flight.png')}
                      />
                    </View>

                    <View style={styles.destination}>
                      <Text style={styles.txt}>DUB</Text>
                      <Text style={[styles.nameTxt, {fontSize: 12}]}>
                        Dubai, UAE
                      </Text>
                      <Text
                        style={[styles.nameTxt, {fontSize: 12, marginTop: 5}]}>
                        09.50 AM
                      </Text>
                    </View>
                  </View>
                </BlurView>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottomContainer, {zIndex: -1}]}>
          <View style={styles.bottomCard}>
            <View style={styles.sit}>
              <Text style={[styles.txt, {fontSize: 20}]}>5</Text>
              <Text style={[styles.nameTxt, {fontSize: 14}]}>Terminal</Text>
            </View>
            <View style={styles.sit}>
              <Text style={[styles.txt, {fontSize: 20}]}>A7</Text>
              <Text style={[styles.nameTxt, {fontSize: 14}]}>Gate</Text>
            </View>
            <View style={styles.sit}>
              <Text style={[styles.txt, {fontSize: 20}]}>F23</Text>
              <Text style={[styles.nameTxt, {fontSize: 14}]}>Seat</Text>
            </View>
          </View>
        </View>
        <View style={styles.options}>
          <View style={[styles.option, styles.food]}>
            <View style={styles.stack}>
              <Text style={styles.txtCard}>{`Food \n& Drink`}</Text>

              <View
                style={[
                  styles.cornerBox,
                  {
                    top: 123,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 38,
                  },
                ]}></View>
              <View
                style={[
                  styles.circleBox,
                  {backgroundColor: 'white', top: 130},
                ]}>
                <Image
                  style={[styles.backIcon]}
                  source={require('../../assets/icons/arrow.png')}
                />
              </View>
            </View>
            <View style={[styles.topEdgeB]}></View>
            <View style={[styles.topEdgeB, styles.rightEdgeB]}></View>
          </View>
          <View style={[styles.option, styles.luggage]}>
            <Text style={styles.txtCardRight}>{`Luggage \nallowance`}</Text>
            <Text style={styles.weight}>30kg</Text>
            <Image
              style={[styles.luggageImg]}
              source={require('../../assets/images/luggage-rm.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
