import React from 'react';

import {
  View
} from 'react-native';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function Games(){
  return (
    <View>
      <Header />
      <NavBar />
    </View>
  );
}
