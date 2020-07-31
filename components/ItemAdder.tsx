import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface Props {
  testID: string;
  onAddItem: (item: string) => void;
}

export default (props: Props) => {
  const [input, setInput] = useState('');
  const {testID, onAddItem} = props;
  return (
    <View style={styles.root}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Add Item..."
        style={styles.input}
        testID={`${testID}-input`}
      />
      <Button
        title="Add"
        onPress={() => {
          onAddItem(input);
          setInput('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#333',
    padding: 2,
    borderRadius: 5,
  },
});
