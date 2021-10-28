import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home(){
  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
    </View>
  );
}
