import { Pressable, StyleSheet, Text, View} from 'react-native';
import Card from '../shared/Card';

function CategoryGridItem({title, color, onPress}: {title: string; color: string; onPress: () => void}) {
  return (
    <Card style={styles.gridItem}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        android_ripple={{color: '#ccc'}}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    height: 170,
    maxWidth: 170,
    aspectRatio: 1,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CategoryGridItem;
