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
      <ScrollView>
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
                <BlurView
                  blurType="light"
                  blurAmount={20}
                  style={styles.blur}></BlurView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
