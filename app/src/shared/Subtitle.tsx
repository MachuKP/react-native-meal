import {StyleSheet, Text, View} from 'react-native';

function Subtitle({subtitle}: {subtitle: string}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

export default Subtitle;
