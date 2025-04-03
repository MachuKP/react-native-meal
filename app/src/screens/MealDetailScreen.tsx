import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationProps} from '../navigation/types';
import {MEALS} from '../constants/dummy-data';
import MealDetail from '../shared/MealDetail';
import Subtitle from '../shared/Subtitle';
import List from '../shared/List';
import {useLayoutEffect} from 'react';
import IconButton from '../components/IconButton';

function MealDetailScreen({route, navigation}: NavigationProps<'MealDetail'>) {
  const selectedMeal = MEALS.find(meal => meal.id === route.params.mealId);

  const handleOnPress = () => {
    console.log('press');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return <IconButton icon="star" color="#fff" onPress={handleOnPress} />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.detailContainer}>
      {selectedMeal ? (
        <View>
          <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
          <MealDetail
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            styleText={styles.detailText}
          />
          <View style={styles.outer}>
            <View style={styles.inner}>
              <Subtitle subtitle="Ingredients" />
              <List listData={selectedMeal.ingredients} />
              <Subtitle subtitle="Steps" />
              <List listData={selectedMeal.steps} />
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.fallbackText}>No MealDetail to Show</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    width: '100%',
    marginBottom: 36,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  outer: {
    alignItems: 'center',
  },
  inner: {
    width: '80%',
  },
  fallbackText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
});

export default MealDetailScreen;
