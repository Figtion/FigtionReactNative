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

export default function SiginView({navigation}) {
  // to do - integrate with backend
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>FIGTION.</Text>
      </View>

      <View style={styles.formWrapper}>
        <CustomTextInput
          placeholder="Your Username"
          onChangeText={username => setUsername(username)}
          IconEl={<Icon name="user" size={25} color="white" />}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          IconEl={<Icon name="lock" size={25} color="white" />}
        />
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotBtnText}>Forget password?</Text>
        </TouchableOpacity>

        <View style={styles.signupWrapper}>
          <Text style={styles.signupInstructionText}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupBtnText}>Create new</Text>
          </TouchableOpacity>
        </View>
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
    flex: 2,
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginBtn: {
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#ffffff',
    lineHeight: 1.2,
  },

  loginText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold, Inter, sans-serif',
    color: '#000000',
    fontWeight: '800',
  },

  forgotBtn: {
    marginTop: 10,
  },

  forgotBtnText: {
    color: '#ffffff',
  },

  signupWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupInstructionText: {
    color: '#ffffff',
  },

  signupBtn: {
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  signupBtnText: {
    color: '#ffffff',
  },
});
