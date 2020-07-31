import React from 'react';
import {FlatListProps, Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface Props extends Omit<FlatListProps<string>, 'renderItem'> {}

const Item = ({value}: {value: string}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.item}>{value}</Text>
  </View>
);

export default (props: Props) => {
  const {data} = props;
  return (
    <FlatList
      keyExtractor={(i) => i}
      data={data}
      renderItem={({item}) => <Item value={item} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: '#cccc',
    borderWidth: StyleSheet.hairlineWidth,
    height: 45,
    justifyContent: 'center',
    padding: 10,
  },
  item: {
    fontSize: 20,
  },
});
