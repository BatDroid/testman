import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ItemAdder from '../../components/ItemAdder';
import ItemsList from './ItemsList';

const Home = () => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <View style={styles.root}>
      <ItemAdder
        onAddItem={(item) => {
          if (item.trim().length > 0 && !items.includes(item)) {
            setItems([...items, item]);
          }
        }}
        testID="Adder"
      />
      <ItemsList data={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Home;
