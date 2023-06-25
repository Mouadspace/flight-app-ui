import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const Header = ({iconSrc}) => {
  return (
    <View style={[styles.row, styles.header]}>
      <View style={styles.icon}>
        <Image source={iconSrc[0]} style={styles.innerIcon} />
      </View>
      <View style={styles.icon}>
        <Image source={iconSrc[1]} style={styles.innerIcon} />
      </View>
    </View>
  );
};

export default React.memo(Header);
