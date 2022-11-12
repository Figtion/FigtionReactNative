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

export default function ForgotPasswordView({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Forgot Password</Text>
      </View>

      <View style={styles.formWrapper}>
        <CustomTextInput
          placeholder="Your Email"
          IconEl={<Icon name="user" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Email Verification"
          IconEl={
            <TouchableOpacity style={styles.getBtn}>
              <Text style={styles.getBtnText}>GET</Text>
            </TouchableOpacity>
          }
        />
        <CustomTextInput
          placeholder="Set Password"
          secureTextEntry={true}
          IconEl={<Icon name="lock" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          IconEl={<Icon name="lock" size={25} color="white" />}
        />
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.resetBtn}>
          <Text style={styles.resetText}>Reset</Text>
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

  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1.2,
    marginTop: 30,
    paddingBottom: 10,
  },

  header: {
    fontFamily: 'Inter-Black, Inter, sans-serif',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
  },

  formWrapper: {
    flex: 4,
    marginTop: 25,
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 0,
  },

  textInput: {
    color: '#ffffff',
  },

  getBtn: {
    lineHeight: 1.2,
  },

  getBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Medium, Inter, sans-serif',
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
    marginBottom: 40,
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
