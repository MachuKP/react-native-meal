// import { useNavigation } from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from '../components/MealItem';
import {CATEGORIES, MEALS} from '../constants/dummy-data';
import Meal from '../models/meal';
import {NavigationProps} from '../navigation/types';
import {useLayoutEffect} from 'react';

function renderMealItem({
  mealDetail,
  onPress,
}: {
  mealDetail: Meal;
  onPress: () => void;
}) {
  return <MealItem mealDetail={mealDetail} onPress={onPress} />;
}

function MealOverviewScreen({
  route,
  navigation,
}: NavigationProps<'MealOverview'>) {
  // useNavigation, useRoute can replace route, navigation props
  // const navigetion = useNavigation();
  // const route = useRoute();
  const displayMeal = MEALS.filter(meal => {
    return meal.categoryIds.indexOf(route.params.categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === route.params.categoryId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, route.params.categoryId]);

  const handleOnPress = (mealId: string) => {
    navigation.navigate('MealDetail', {
      mealId: mealId,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeal}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          renderMealItem({
            mealDetail: item,
            onPress: () => handleOnPress(item.id),
          })
        }
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mealItem: {
    padding: 16,
    borderRadius: 8,
  },
});

export default MealOverviewScreen;
