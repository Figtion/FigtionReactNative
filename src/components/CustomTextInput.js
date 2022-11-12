import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const CustomTextInput = ({styles, IconEl, ...props}) => {
  return (
    <View style={defaultStyles.textInputWrapper}>
      <TextInput
        style={defaultStyles.textInput}
        underlineColorAndroid="transparent"
        placeholderTextColor={'#ffffff'}
        {...props}
      />
      {IconEl}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    lineHeight: 1.2,
    borderRadius: 25,
    borderColor: '#ffffff',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },

  textInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Inter-ExtraBold, Inter, sans-serif',
    maxHeight: 49,
    minHeight: 49,
    height: 49,
  },
});

export default CustomTextInput;
