import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Meal from '../models/meal';

import MealDetail from '../shared/MealDetail';
import Card from '../shared/Card';


function MealItem({
  mealDetail,
  onPress,
}: {
  mealDetail: Meal;
  onPress: () => void;
}) {
  return (
    <Card style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <View>
          <Image source={{uri: mealDetail.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{mealDetail.title}</Text>
        </View>
        <MealDetail
          duration={mealDetail.duration}
          complexity={mealDetail.complexity}
          affordability={mealDetail.affordability}
        />
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    minWidth: '90%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default MealItem;
