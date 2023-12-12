import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import {AyetOfferwall} from 'ayetsdk';
import {NavigationContainer} from '@react-navigation/native';

const Offerwall = ({navigation}) => {
  const onClose = () => {
    navigation.navigate('Home');
  };

  return <AyetOfferwall userId="12345" adslotId="536" onClose={onClose} />;
};

export default Offerwall;
