import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CustomTextInput from '../components/CustomTextInput';

export default function SigupView({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>FIGTION.</Text>
      </View>

      <View style={styles.formWrapper}>
        <CustomTextInput
          placeholder="Your Username"
          IconEl={<Icon name="user" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Your Email"
          IconEl={<Icon name="mail" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Set Password"
          secureTextEntry={true}
          IconEl={<Icon name="eye" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          IconEl={<Icon name="eye" size={25} color="white" />}
        />
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.resetBtn}>
          <Text style={styles.resetText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  logoWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 2.5,
    marginTop: 30,
    paddingBottom: 10,
  },

  logo: {
    fontFamily: 'Inter-Black, Inter, sans-serif',
    color: '#ffffff',
    fontSize: 47,
    fontWeight: '900',
  },

  formWrapper: {
    flex: 5,
    marginTop: 25,
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 0,
  },

  textInput: {
    color: '#ffffff',
  },

  bottomWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetBtn: {
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    lineHeight: 1.2,
  },

  resetText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold, Inter, sans-serif',
    color: '#000000',
    fontWeight: '800',
  },
});
