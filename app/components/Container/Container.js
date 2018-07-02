import React, { PropTypes } from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
    <View={styles.container}>
        {children}
    </View>
);

Container.PropTypes = {
  children: PropTypes.element,
}

export default Container;
