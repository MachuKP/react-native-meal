import {StyleSheet, Text, View} from 'react-native';

function List({listData}: {listData: string[]}) {
  return listData.map((data, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.text}>{data}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  text: {
    color: '#351401',
    textAlign: 'center',
  },
});

export default List;
