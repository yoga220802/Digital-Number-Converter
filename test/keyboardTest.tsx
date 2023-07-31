import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomKeyboard from '../src/utils/CustomKeyboard/binaryKeyboard';

const KeyboardTest = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (value: string) => { // Specify the type as 'string'
    setInputValue(inputValue + value);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} extraHeight={150}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          placeholder="Enter 1 or 0"
          keyboardType="numeric"
          editable={false}
        />
      </View>
      <CustomKeyboard onPress={handleKeyPress} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
  },
});

export default KeyboardTest;
