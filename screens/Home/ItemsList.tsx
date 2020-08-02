import React from 'react';
import {FlatListProps, Text, View, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface Props extends Omit<FlatListProps<string>, 'renderItem'> {
  onDeleteItem: (item: string) => void;
}

const Item = ({
  value,
  onDeleteItem,
}: {
  value: string;
  onDeleteItem: (item: string) => void;
}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.item}>{value}</Text>
    <Button
      title="X"
      onPress={() => onDeleteItem(value)}
      color="red"
      testID="cell-delete"
    />
  </View>
);

export default (props: Props) => {
  const {data, onDeleteItem} = props;
  return (
    <FlatList
      keyExtractor={(i) => i}
      data={data}
      renderItem={({item}) => <Item value={item} onDeleteItem={onDeleteItem} />}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: '#cccc',
    borderWidth: StyleSheet.hairlineWidth,
    height: 60,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  item: {
    fontSize: 20,
  },
});
