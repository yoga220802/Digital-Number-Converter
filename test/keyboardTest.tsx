import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BinaryKeyboard from '../src/utils/CustomKeyboard/binaryKeyboard';
import OctalKeyboard from '../src/utils/CustomKeyboard/octalKeyboard';

const KeyboardTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState('binary')

  const handleKeyPress = (value: string) => { // Specify the type as 'string'
    setInputValue(inputValue + value);
  };

  const switchModeToBinary = () => {
    setMode('binary')
    setInputValue('')
  }
  const switchModeToOctal = () => {
    setMode('octal')
    setInputValue('')
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} extraHeight={150}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          placeholder= {mode === 'binary' ? "Enter Binary" : "Enter Octal"}
          keyboardType="numeric"
          editable={false}
        />
      </View>
      {mode === 'binary' ? (
        <>
        <BinaryKeyboard onPress={handleKeyPress} />
        <Button title='"Switch To Octal' onPress={switchModeToOctal}/>
        </>
      ) : (
        <>
        <OctalKeyboard onPress={handleKeyPress} />
        <Button title='"Switch To Binary' onPress={switchModeToBinary}/>
        </>
      )}
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
